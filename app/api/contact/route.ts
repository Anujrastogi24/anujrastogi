const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendMail(fields: Record<string, string>) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const apiBase = process.env.MAILGUN_API_BASE ?? "https://api.mailgun.net";

  const response = await fetch(`${apiBase}/v3/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
    },
    body: new URLSearchParams(fields),
  });

  if (!response.ok) {
    throw new Error(`Mailgun ${response.status}: ${await response.text()}`);
  }
}

export async function POST(request: Request) {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } =
    process.env;
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form is missing Mailgun environment variables");
    return Response.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (clean(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 200);
  const topic = clean(payload.topic, 200) || "General inquiry";
  const message = clean(payload.message, 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    topic: escapeHtml(topic),
    message: escapeHtml(message).replace(/\n/g, "<br>"),
  };

  try {
    // Notification to Anuj: replying goes straight to the visitor.
    await sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      "h:Reply-To": `${name} <${email}>`,
      subject: `Portfolio contact: ${topic} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${safe.name}<br><strong>Email:</strong> ${safe.email}<br><strong>Topic:</strong> ${safe.topic}</p><p>${safe.message}</p>`,
    });
  } catch (error) {
    console.error("Failed to send contact notification", error);
    return Response.json(
      { error: "Could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  try {
    // Confirmation to the visitor: replying goes to Anuj's inbox.
    await sendMail({
      from: CONTACT_FROM_EMAIL,
      to: `${name} <${email}>`,
      "h:Reply-To": CONTACT_TO_EMAIL,
      subject: "Thanks for reaching out — Anuj Rastogi",
      text: `Hi ${name},\n\nThanks for getting in touch. I've received your message and will get back to you soon. You can reply directly to this email to reach me.\n\nYour message:\n${message}\n\n— Anuj Rastogi\nhttps://www.anujrastogi.in`,
      html: `<p>Hi ${safe.name},</p><p>Thanks for getting in touch. I've received your message and will get back to you soon. You can reply directly to this email to reach me.</p><p><strong>Your message:</strong><br>${safe.message}</p><p>— Anuj Rastogi<br><a href="https://www.anujrastogi.in">anujrastogi.in</a></p>`,
    });
  } catch (error) {
    // The notification already went out, so don't fail the request.
    console.error("Failed to send contact confirmation", error);
  }

  return Response.json({ ok: true });
}
