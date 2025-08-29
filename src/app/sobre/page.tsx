export const metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return (
    <main className="container pt-6 md:pt-10">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-white">Sobre mim</h1>
        <p className="mt-4 text-white/80">
          Sou personal trainer com experiência em treinos de força, emagrecimento e performance. O meu foco é criar planos personalizados que respeitam a tua rotina e objetivos.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-card/40 p-5">
            <h3 className="text-white font-semibold">Missão</h3>
            <p className="text-white/70 text-sm mt-1">Ajudar-te a alcançar resultados sustentáveis com consistência.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-card/40 p-5">
            <h3 className="text-white font-semibold">Valores</h3>
            <p className="text-white/70 text-sm mt-1">Disciplina, transparência e acompanhamento próximo.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-card/40 p-5">
            <h3 className="text-white font-semibold">Experiência</h3>
            <p className="text-white/70 text-sm mt-1">+5 anos a trabalhar com atletas e iniciantes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


