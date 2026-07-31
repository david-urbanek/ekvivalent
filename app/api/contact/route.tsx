import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  message: z.string().min(1),
});

const CONTACT_RECIPIENT = "jan.hevessy@ekvivalent.cz";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Ekvivalent web <onboarding@resend.dev>",
    to: CONTACT_RECIPIENT,
    replyTo: email,
    subject: `Nová zpráva z webu od ${name}`,
    text: `Jméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
