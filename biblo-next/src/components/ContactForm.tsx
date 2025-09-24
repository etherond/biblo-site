"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>("");
  const [messageColor, setMessageColor] = useState<string>("text-zinc-500");

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

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value || "";
    if (!isValidEmail(value)) {
      setMessage("Veuillez entrer une adresse email valide.");
      setMessageColor("text-red-700");
      inputRef.current?.focus();
      return;
    }
    setMessage("Merci ! Nous vous recontacterons très bientôt.");
    setMessageColor("text-emerald-700");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="mt-3 grid gap-3 sm:grid-cols-[1fr,auto] bg-white border border-zinc-200 rounded-xl p-6 max-w-[560px] mx-auto min-h-[120px]">
        <input
          ref={inputRef}
          id="email"
          type="email"
          placeholder="Votre email"
          className="h-14 px-4 rounded-lg border border-zinc-200 text-lg outline-none focus:border-[#2f6df6] focus:ring-4 focus:ring-[#2f6df6]/20"
        />
        <button type="submit" className="h-14 px-5 rounded-full bg-black text-white font-semibold">
          Obtenir mon accès
        </button>
        <div className="sm:col-span-2 text-center text-sm text-zinc-500 mt-1">
          Nous vous enverrons une invitation dès que le produit sera disponible.
        </div>
      </form>
      <p id="form-message" className={`mt-2 text-center ${messageColor}`}>{message}</p>
    </div>
  );
}


