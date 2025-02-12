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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

  specialisation: z.string().min(1, {
    message: "Please enter your specialty",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject",
  }),
  message: z.string().min(1, {
    message: "Please enter a message",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const t = useTranslations("Contact");

  const [checked, setChecked] = useState(false);
  const [emailTo, setEmailTo] = useState("marketing@vivacy.fr");
  const [isSending, setIsSending] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      specialisation: "",
      subject: "",
      message: "",
    },
  });

  function emailChange(event: any) {
    if (event.target.value === "Contact with a distributor (international)") {
      setEmailTo("export@vivacy.com");
    } else if (event.target.value === "Job Application") {
      setEmailTo("recrutement@vivacy.fr");
    } else {
      setEmailTo("marketing@vivacy.com");
    }
  }

  async function handleSubmit(data: FormData) {
    const {
      firstname,
      lastname,
      email,
      country,
      specialisation,
      subject,
      message,
    } = data;

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    setIsSending(true);

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response = await axios({
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
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailTo,
          firstname,
          lastname,
          email,
          country,
          specialisation,
          subject,
          message,
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
    } else {
      window.alert("Recaptcha failed");
      setIsSending(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 lg:grid"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {/* firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue">
                    {t("form.firstname")}
                  </FormLabel>
                  <FormControl>
                    <Input className="border-blue" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue">
                    {t("form.country")}
                  </FormLabel>
                  <FormControl>
                    <Input className="border-blue" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* lastname */}
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue">
                    {t("form.lastname")}
                  </FormLabel>
                  <FormControl>
                    <Input className="border-blue" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* specialisation */}
            <FormField
              control={form.control}
              name="specialisation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue">
                    {t("form.specialisation")}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger style={{ borderColor: "#000f9f" }}>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={t("form.specialisations.1")}>
                          {t("form.specialisations.1")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.2")}>
                          {t("form.specialisations.2")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.3")}>
                          {t("form.specialisations.3")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.4")}>
                          {t("form.specialisations.4")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.5")}>
                          {t("form.specialisations.5")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.6")}>
                          {t("form.specialisations.6")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.7")}>
                          {t("form.specialisations.7")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.8")}>
                          {t("form.specialisations.8")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.9")}>
                          {t("form.specialisations.9")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.10")}>
                          {t("form.specialisations.10")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.11")}>
                          {t("form.specialisations.11")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.12")}>
                          {t("form.specialisations.12")}
                        </SelectItem>
                        <SelectItem value={t("form.specialisations.13")}>
                          {t("form.specialisations.13")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue">{t("form.email")}</FormLabel>
                  <FormControl>
                    <Input
                      className="border-blue"
                      type="mail"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem onChange={emailChange}>
                  <FormLabel className="text-blue">
                    {t("form.subject")}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger style={{ borderColor: "#000f9f" }}>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={t("form.subjects.1")}>
                          {t("form.subjects.1")}
                        </SelectItem>
                        <SelectItem
                          value={t("form.subjects.2")}
                          onSelect={() => console.log("selected")}
                        >
                          {t("form.subjects.2")}
                        </SelectItem>
                        <SelectItem value={t("form.subjects.3")}>
                          {t("form.subjects.3")}
                        </SelectItem>
                        <SelectItem value={t("form.subjects.4")}>
                          {t("form.subjects.4")}
                        </SelectItem>
                        <SelectItem value={t("form.subjects.5")}>
                          {t("form.subjects.5")}
                        </SelectItem>
                        <SelectItem value={t("form.subjects.6")}>
                          {t("form.subjects.6")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue">{t("form.message")}</FormLabel>
                <FormControl>
                  <Textarea
                    className="border-blue resize-none"
                    {...field}
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* legals */}
          <p className="text-sm">{t("legal")}</p>

          <div className="flex max-lg:flex-col-reverse gap-8 lg:gap-14 items-end lg:items-center pt-8 lg:pt-14">
            <button
              disabled={!checked || isSending}
              type="submit"
              className="disabled:cursor-not-allowed bg-blue py-3 px-10 rounded-3xl text-white uppercase font-normal text-sm sm:text-base hover:bg-blue transition-all"
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
            <div className="flex gap-x-4">
              <Checkbox
                id="accept"
                checked={checked}
                onCheckedChange={() => setChecked(!checked)}
              />
              <label htmlFor="accept" className="leading-none text-sm">
                <p>{t("checked")}</p>
              </label>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
