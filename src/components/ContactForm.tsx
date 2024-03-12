"use client";

import { useRecaptcha } from "@/hooks/useRecaptcha";
import { ContactFormData, contactFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useState } from "react";
import { set, useForm } from "react-hook-form";

import Spinner from "./Spinner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [submitError, setSubmitError] = useState(false);
  const { handleReCaptchaVerify, captchaError } = useRecaptcha();

  const submitForm = async (data: ContactFormData) => {
    const { email, name, subject, message } = data;
    try {
      const token = await handleReCaptchaVerify();

      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!res.ok) {
        throw new Error();
      }
      reset();
    } catch (err) {
      console.error(err);
      setSubmitError(true);
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="space-y-4">
          <fieldset>
            <div className=" flex items-center gap-5">
              <label className=" w-[90px] text-right " htmlFor="name">
                Name
              </label>
              <input
                className="dark:bg-light/30 bg-dark/30 focus:bg-dark/50 focus:dark:bg-light/50 focus:outline-solid focus:dark:outline-light focus:outline-dark inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-2 leading-none"
                {...register("name")}
              />
            </div>
            <p className="mt-1 text-red-500 text-right">
              {errors.name?.message}
            </p>
          </fieldset>
          <fieldset>
            <div className="flex items-center gap-5">
              <label
                className=" w-[90px] text-right text-[15px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="dark:bg-light/30 bg-dark/30 focus:bg-dark/50 focus:dark:bg-light/50 focus:outline-solid focus:dark:outline-light focus:outline-dark inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-2 leading-none"
                {...register("email")}
              />
            </div>
            <p className="mt-1 text-red-500 text-right">
              {errors.email?.message}
            </p>
          </fieldset>
          <fieldset>
            <div className="flex items-center gap-5">
              <label
                className=" w-[90px] text-right text-[15px]"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="dark:bg-light/30 bg-dark/30 focus:bg-dark/50 focus:dark:bg-light/50 focus:outline-solid focus:dark:outline-light focus:outline-dark inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-2 leading-none"
                {...register("subject")}
              />
            </div>
            <p className="mt-1 text-red-500 text-right">
              {errors.subject?.message}
            </p>
          </fieldset>
          <fieldset>
            <div className="flex items-center gap-5">
              <label
                className=" w-[90px] text-right text-[15px]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={5}
                className="dark:bg-light/30 bg-dark/30 focus:bg-dark/50 focus:dark:bg-light/50 focus:outline-solid focus:dark:outline-light focus:outline-dark  inline-flex w-full flex-1  rounded-[4px] px-2 py-2  leading-none"
                {...register("message")}
              />
            </div>
            <p className="mt-1 text-red-500 text-right">
              {errors.message?.message}
            </p>
          </fieldset>
          {!isSubmitSuccessful && (
            <div className="flex justify-end">
              <button
                disabled={!isValid}
                className="bg-dark w-52 dark:bg-light disabled:opacity-50 disabled:cursor-not-allowed text-light dark:text-dark dark:hover:bg-light/90 hover:bg-dark/90 inline-flex  items-center justify-center rounded-[4px] px-4 font-medium leading-none py-3"
              >
                {isSubmitting ? <Spinner /> : "Send Message"}
              </button>
            </div>
          )}
          {submitError && (
            <p className="text-red-500">
              An error occurred while sending your message. Please try again
              later.
            </p>
          )}
          {isSubmitSuccessful && (
            <p className="text-green-500">
              Your message has been sent successfully!
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
