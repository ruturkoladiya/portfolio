// Handles contact form submissions and sends email via Resend.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

console.log(process.env.RESEND_API_KEY, process.env.CONTACT_EMAIL);


const resend = new Resend(process.env.RESEND_API_KEY);

// Email address where you want to receive contact form messages
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "ruturkoladiya@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // ── Basic server-side validation ─────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Send email via Resend ────────────────────────────────
    const { error } = await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>", // Change after verifying your domain
      to:      TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6c63ff; margin-bottom: 4px;">New message from your portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px; font-size: 13px;">Name</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #6c63ff;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0; font-size: 14px;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <p style="color: #666; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 12px; color: #aaa;">
            Sent from your portfolio contact form · Reply directly to this email to respond.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}