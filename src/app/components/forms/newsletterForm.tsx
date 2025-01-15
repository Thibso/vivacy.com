"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
    },
  });

  async function onSubmit(data: FormData) {
    const { firstname, lastname, email, country } = data;

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
              disabled={!checked}
              type="submit"
              className="disabled:cursor-not-allowed max-lg:col-start-2 block self-end max-lg:w-fit max-lg:mr-0 max-lg:m-auto bg-transparent py-2 px-8 border-white border-[1px] rounded-3xl text-white uppercase font-normal text-sm sm:text-base hover:bg-white hover:text-blue transition-all"
            >
              {t("form.submit")}
            </button>
          </div>

          <div className="flex gap-x-4">
            <Checkbox
              id="accept"
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
              className="border-white bg-blue checked:bg-blue"
            />
            <label htmlFor="accept" className="leading-none text-sm text-white">
              <p>{t("checked")}</p>
            </label>
          </div>
        </form>
      </Form>
    </div>
  );
}
