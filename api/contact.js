// Vercel serverless function: receives contact-form submissions and forwards
// them to admin@oglasglobal.com via the Resend API.
//
// Required env var (Vercel project settings → Environment Variables):
//   RESEND_API_KEY   — Resend API key (starts with "re_")
// Optional env vars:
//   CONTACT_TO_EMAIL   — recipient. Defaults to admin@oglasglobal.com
//   CONTACT_FROM_EMAIL — sender. Defaults to onboarding@resend.dev
//                        Once theoglas.com is verified in Resend, set this to
//                        e.g. "The Oglas <contact@theoglas.com>".

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Email service not configured" });
  }

  const body = req.body || {};
  const fullName = String(body.fullName ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 60);
  const company = String(body.company ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 2000);

  if (!emailRe.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  if (phone.replace(/[^\d]/g, "").length < 7) {
    return res.status(400).json({ error: "Enter a valid phone number." });
  }
  if (fullName && fullName.length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }

  const to = process.env.CONTACT_TO_EMAIL || "admin@oglasglobal.com";
  const from =
    process.env.CONTACT_FROM_EMAIL || "The Oglas <onboarding@resend.dev>";

  const subject = `New enquiry — ${fullName || "no name"}${company ? ` (${company})` : ""}`;

  const textBody = [
    `Name:    ${fullName || "—"}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    `Company: ${company || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color:#111; line-height:1.5;">
      <h2 style="margin:0 0 16px;">New contact form enquiry</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Name</td><td>${escapeHtml(fullName) || "&mdash;"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Phone</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Company</td><td>${escapeHtml(company) || "&mdash;"}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message) || "&mdash;"}</p>
    </div>
  `;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resp.ok) {
      const raw = await resp.text().catch(() => "");
      console.error("Resend error:", resp.status, raw);
      let message = "Could not send message. Please try again later.";
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.message) message = parsed.message;
      } catch {
        if (raw) message = raw.slice(0, 300);
      }
      return res.status(502).json({ error: message, status: resp.status });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res
      .status(500)
      .json({ error: "Could not send message. Please try again later." });
  }
}
