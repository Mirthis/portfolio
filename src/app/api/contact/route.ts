import { contactFormSchema } from "@/types";
import { z } from "zod";

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type CapctchaVerifyResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
  "error-codes": string[];
};

const requestSchema = contactFormSchema.extend({
  token: z.string().min(1),
});

export const validateRecaptcha = async (token: string) => {
  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    },
  );
  const captchaResponseData =
    (await captchaResponse.json()) as CapctchaVerifyResponse;

  const isHuman = captchaResponseData?.success;

  if (!isHuman) {
    throw new Error("Captcha validation failed");
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = requestSchema.parse(body);
    await validateRecaptcha(input.token);
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `[andreacardinale.me] : ${input.subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
        <meta charset="utf-8">
        </head>
      <body>
      <p><b>Sender:</b> ${input.name}</h3>
      <p><b>Sender email:</b> ✉️${input.email}</p>
      <p><b>Subject:</b> ${input.subject}</p>
      <p><b>Message:</b></p>
      <p>${input.message}</p>
      </body>
      </html>`,
      }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
