"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("text-zinc-500");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Focus the email field when any anchor to #contact is clicked
  useEffect(() => {
    function handleClick(e: Event) {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target?.getAttribute("href");
      if (href === "#contact") {
        setTimeout(() => inputRef.current?.focus(), 400);
      }
    }
    const anchors = Array.from(document.querySelectorAll('a[href="#contact"]')) as HTMLAnchorElement[];
    anchors.forEach((a) => a.addEventListener("click", handleClick));
    return () => anchors.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim().toLowerCase());
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value || "";
    if (!isValidEmail(value)) {
      setMessage("Veuillez entrer une adresse email valide.");
      setMessageColor("text-red-700");
      inputRef.current?.focus();
      return;
    }
    try {
      setIsSubmitting(true);
      setMessage("");
      const res = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Une erreur s'est produite.");
      }
      setMessage("Merci ! Nous vous enverrons une invitation dès que le produit sera disponible.");
      setMessageColor("text-emerald-700");
      if (inputRef.current) inputRef.current.value = "";
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Impossible d'envoyer la demande pour le moment.";
      setMessage(errorMessage);
      setMessageColor("text-red-700");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="mt-3 grid gap-3 sm:grid-cols-[1fr,auto] bg-white border border-zinc-200 rounded-xl p-6 max-w-[560px] mx-auto min-h-[120px]">
        <input
          ref={inputRef}
          id="email"
          type="email"
          placeholder="Votre email"
          className="h-14 px-4 rounded-lg border border-zinc-200 text-lg outline-none focus:border-[#2f6df6] focus:ring-4 focus:ring-[#2f6df6]/20 disabled:opacity-60"
          disabled={isSubmitting}
        />
        <button type="submit" className="h-14 px-5 rounded-full bg-black text-white font-semibold disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Envoi..." : "Obtenir mon accès"}
        </button>
        <div className="sm:col-span-2 text-center text-sm text-zinc-500 mt-1">
          Nous vous enverrons une invitation dès que le produit sera disponible.
        </div>
      </form>
      <p id="form-message" className={`mt-2 text-center ${messageColor}`}>{message}</p>
    </div>
  );
}


