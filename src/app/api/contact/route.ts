// Handles contact form submissions and sends email via Resend.
// Includes server-side validation, input sanitisation, and length limits.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email address where you want to receive contact form messages
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "ruturkoladiya@gmail.com";

// ── Input length constraints ──────────────────────────────────
const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 320;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;

/**
 * Strips HTML tags from user input to prevent XSS in the email template.
 * Uses a simple regex approach — sufficient for email body sanitisation.
 */
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

    // ── Length validation ────────────────────────────────────
    if (typeof name !== "string" || name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be at most ${MAX_NAME_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (typeof email !== "string" || email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }
    if (typeof subject !== "string" || subject.length > MAX_SUBJECT_LENGTH) {
      return NextResponse.json(
        { error: `Subject must be at most ${MAX_SUBJECT_LENGTH} characters.` },
        { status: 400 }
      );
    }
    if (typeof message !== "string" || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be at most ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Sanitize inputs before embedding in HTML ─────────────
    const safeName = sanitizeHtml(name.trim());
    const safeEmail = sanitizeHtml(email.trim());
    const safeSubject = sanitizeHtml(subject.trim());
    const safeMessage = sanitizeHtml(message.trim());

    // ── Send email via Resend ────────────────────────────────
    const { error } = await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>", // Change after verifying your domain
      to:      TO_EMAIL,
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e8a622; margin-bottom: 4px;">New message from your portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px; font-size: 13px;">Name</td>
              <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${safeEmail}" style="color: #e8a622;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0; font-size: 14px;">${safeSubject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <p style="color: #666; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>

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