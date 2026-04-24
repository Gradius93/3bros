import type { NextApiRequest, NextApiResponse } from "next";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
}

const EMAIL_RECIPIENT = "sean.myles.gray@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const trimField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = req.body as ContactPayload;

  const name = trimField(body.name);
  const email = trimField(body.email).toLowerCase();
  const subject = trimField(body.subject);
  const message = trimField(body.message);
  const website = trimField(body.website);

  if (website) {
    return res.status(200).json({ message: "Message received." });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email." });
  }

  if (name.length > 100 || subject.length > 160 || message.length > 5000) {
    return res.status(400).json({ message: "Please shorten your message." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return res.status(500).json({
      message:
        "Contact form is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [EMAIL_RECIPIENT],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return res
        .status(502)
        .json({ message: "Email service is unavailable. Please try again." });
    }

    return res.status(200).json({ message: "Message sent successfully." });
  } catch {
    return res
      .status(502)
      .json({ message: "Email service is unavailable. Please try again." });
  }
}
