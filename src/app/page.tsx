"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[url('/globe.svg')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Treinos personalizados para resultados reais
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              Acompanho-te com planos de treino e nutrição adaptados ao teu objetivo.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contacto" className="btn-primary">Marca já a tua sessão</Link>
              <Link href="/servicos" className="btn-secondary">Ver serviços</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="justify-self-center">
            <div className="w-[320px] h-[420px] rounded-2xl bg-card/60 border border-white/10 shadow-xl" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* Serviços em destaque */}
      <section className="container mt-24">
        <h2 className="text-2xl font-bold text-white">Serviços</h2>
        <p className="text-white/70 mt-1">Planos pensados para diferentes objetivos.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Treinos presenciais", desc: "Sessões 1:1 no ginásio ou ao ar livre." },
            { title: "Treinos online", desc: "Planos remotos com acompanhamento semanal." },
            { title: "Planos alimentares", desc: "Nutrição alinhada ao teu objetivo." },
          ].map((s) => (
            <motion.div key={s.title} whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-card/50 p-6">
              <div className="h-10 w-10 rounded-md bg-[--color-secondary] text-white grid place-items-center text-sm font-bold">🏋</div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              <div className="mt-4">
                <Link href="/servicos" className="text-[--color-primary] hover:underline">Saber mais →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testemunhos */}
      <section className="container mt-24">
        <h2 className="text-2xl font-bold text-white">Testemunhos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-card/40 p-6 text-white/80 text-sm">
              "Excelente acompanhamento e resultados visíveis!" — Cliente {i}
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="container mt-24 mb-24 text-center">
        <div className="rounded-2xl bg-[--color-primary] text-white p-10">
          <h3 className="text-2xl font-semibold">Pronto para começar?</h3>
          <p className="mt-2 text-white/90">Entra em contacto e dá o primeiro passo.</p>
          <div className="mt-6">
            <Link href="/contacto" className="btn-secondary">Contactar</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
