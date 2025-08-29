"use client";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !isEmail || message.length < 10) {
      setStatus("error");
      return;
    }
    setTimeout(() => setStatus("success"), 500); // mock submit
  }

  return (
    <main className="container pt-6 md:pt-10">
      <h1 className="text-3xl font-bold text-white">Contacto</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-white/80">Nome</label>
            <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" placeholder="O teu nome" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white/80">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" placeholder="nome@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-white/80">Mensagem</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" placeholder="Como posso ajudar?" />
          </div>
          <button type="submit" className="btn-primary">Enviar</button>
          {status === "success" && (
            <p role="status" className="text-[--color-success] text-sm">Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p role="alert" className="text-[--color-error] text-sm">Verifica os dados (mensagem min. 10 caracteres).</p>
          )}
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="text-white font-semibold">Contacto direto</h2>
            <p className="text-white/80 text-sm mt-1">Email: <a className="text-[--color-primary] hover:underline" href="mailto:ola@fabiole.com">ola@fabiole.com</a></p>
            <p className="text-white/80 text-sm">Telefone: <a className="text-[--color-primary] hover:underline" href="tel:+351912345678">+351 912 345 678</a></p>
          </div>
          <div>
            <h2 className="text-white font-semibold">Localização</h2>
            <div className="mt-2 aspect-video w-full rounded-xl border border-white/10 bg-card/40 grid place-items-center text-white/60">Mapa (placeholder)</div>
          </div>
        </div>
      </div>
    </main>
  );
}


