export const metadata = {
  title: "Serviços",
};

const services = [
  { title: "Treinos presenciais", desc: "Sessões 1:1 com correção técnica.", cta: "Saber mais" },
  { title: "Treinos online", desc: "Plano e ajustes semanais.", cta: "Saber mais" },
  { title: "Planos alimentares", desc: "Nutrição alinhada ao treino.", cta: "Saber mais" },
  { title: "Acompanhamento personalizado", desc: "Suporte por chat e check-ins.", cta: "Saber mais" },
];

export default function ServicosPage() {
  return (
    <main className="container pt-6 md:pt-10">
      <h1 className="text-3xl font-bold text-white">Serviços</h1>
      <p className="text-white/80 mt-2 max-w-prose">Escolhe o serviço que melhor encaixa nos teus objetivos.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border border-white/10 bg-card/40 p-6">
            <div className="h-10 w-10 rounded-md bg-[--color-secondary] text-white grid place-items-center text-sm font-bold">💪</div>
            <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
            <p className="text-white/70 text-sm mt-1">{s.desc}</p>
            <button className="btn-primary mt-4">{s.cta}</button>
          </div>
        ))}
      </div>
    </main>
  );
}


