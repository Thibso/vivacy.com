"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";

const FormSchema = z.object({
  firstname: z.string().min(1, { message: "Please enter your first name" }),
  lastname: z.string().min(1, { message: "Please enter your name" }),
  country: z.string().min(1, { message: "Please enter your country" }),
  email: z
    .string()
    .min(1, { message: "Please enter an e-mail address" })
    .email("Invalid e-mail address"),
});

type FormData = z.infer<typeof FormSchema>;

export default function NewsletterForm() {
  const { toast } = useToast();
  const t = useTranslations("Newsletter");

  const [checked, setChecked] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
    },
  });

  const { reset } = form;

  const { executeRecaptcha } = useGoogleReCaptcha();

  async function onSubmit(data: FormData) {
    const { firstname, lastname, email, country } = data;

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    setIsSending(true);

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response: any = await axios({
      method: "post",
      url: "/api/recaptcha",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response.data.success === true) {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          country,
        }),
      });

      const responseJson = await response.json();

      if (responseJson.id) {
        toast({
          title: t("toast.title"),
          description: t("toast.description"),
          variant: "success",
        });
      }
      if (responseJson.error) {
        toast({
          title: t("toast.error_title"),
          description: t("toast.error_description"),
          variant: "destructive",
        });
      }
      setIsSending(false);
      reset();
    } else {
      window.alert("Recaptcha failed");
      setIsSending(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="max-lg:grid max-lg:grid-cols-2 gap-4 lg:flex lg:gap-x-8 items-center">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-normal">
                    {t("form.email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-white bg-white"
                      type="mail"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-normal">
                    {t("form.firstname")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-white bg-white"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Lastname */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-normal">
                    {t("form.lastname")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-white bg-white "
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-normal">
                    {t("form.country")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-white bg-white"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              disabled={!checked || isSending}
              type="submit"
              className="disabled:cursor-not-allowed max-lg:col-start-2 block self-end max-lg:w-fit max-lg:mr-0 max-lg:m-auto bg-transparent py-2 px-8 border-white border-[1px] rounded-3xl text-white uppercase font-normal text-sm sm:text-base hover:bg-white hover:text-blue transition-all"
            >
              {isSending ? (
                <span className="flex">
                  <svg
                    className="mr-3 -ml-1 size-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {t("form.submitting")}
                </span>
              ) : (
                t("form.submit")
              )}
            </button>
          </div>

          <div className="flex gap-x-4">
            <Checkbox
              id="acceptNL"
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
              className="border-white bg-blue checked:bg-blue"
            />
            <label
              htmlFor="acceptNL"
              className="leading-none text-sm text-white"
            >
              <p>{t("checked")}</p>
            </label>
          </div>
        </form>
      </Form>
    </div>
  );
}
function executeRecaptcha(arg0: string) {
  throw new Error("Function not implemented.");
}
