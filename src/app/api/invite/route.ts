import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "contact@laslo.app";
const FROM_EMAIL = process.env.EMAIL_FROM || "Laslo <no-reply@laslo.app>";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim().toLowerCase());
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await req.json()
      : await req.formData().then((fd) => ({
          email: String(fd.get("email") || ""),
          website: String(fd.get("website") || ""),
          consent: fd.get("consent") === "on" // récupère la valeur de la checkbox
        }));

    const email = String(body?.email || "").trim();
    const website = String(body?.website || "").trim();
    const consent = !!body?.consent;

    // Honeypot check: if the hidden "website" field has a value, it's a bot
    if (website) {
      console.warn("Bot submission detected via honeypot");
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Adresse email invalide." }), { status: 400 });
    }

    // Vérifie que le consentement est donné
    if (!consent) {
      return new Response(
        JSON.stringify({ error: "Vous devez accepter de recevoir des emails." }),
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Configuration email manquante." }), { status: 500 });
    }

    const subject = `Invitation requested: ${email}`;
    const text = `A new invitation has been requested.\n\nEmail: ${email}`;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      text,
    });

    if (error) {
      return new Response(JSON.stringify({ error: "Échec de l'envoi de l'email." }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (_err) {
    return new Response(JSON.stringify({ error: "Erreur serveur inattendue." }), { status: 500 });
  }
}


