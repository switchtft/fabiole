import Image from "next/image";

export const metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sobre <span className="text-[#1E90FF]">Mim</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conhece a minha história, experiência e paixão por transformar vidas através do fitness
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fabio1.png"
                  alt="Fabio Le Personal Trainer"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  A Minha <span className="text-[#1E90FF]">História</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sou um personal trainer apaixonado por fitness e transformação. Com mais de 5 anos de experiência, 
                  dedico-me a ajudar pessoas a alcançarem os seus objetivos através de treinos personalizados 
                  e acompanhamento dedicado.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold text-[#1E90FF] mb-2">5+</div>
                  <div className="text-gray-300 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-2">100+</div>
                  <div className="text-gray-300 font-medium">Clientes Satisfeitos</div>
                </div>
                <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Os Meus <span className="text-[#1E90FF]">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Princípios que guiam o meu trabalho e compromisso com os clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-[#1E90FF]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
              <p className="text-gray-300">
                Ajudar-te a alcançar resultados sustentáveis com consistência e dedicação total.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-[#FF6B35]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-orange-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
              <p className="text-gray-300">
                Disciplina, transparência e acompanhamento próximo em cada passo da jornada.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experiência</h3>
              <p className="text-gray-300">
                +5 anos a trabalhar com atletas e iniciantes, sempre em busca da excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Começar a Tua Transformação?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junta-te aos meus clientes satisfeitos e descobre o teu potencial máximo
          </p>
          <a 
            href="/contacto" 
            className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Marca a Tua Primeira Sessão
          </a>
        </div>
      </section>
    </main>
  );
}


