import Link from "next/link";

export const metadata = {
  title: "Serviços",
};

const services = [
  {
    title: "Treinos Presenciais",
    desc: "Sessões 1:1 com acompanhamento personalizado no ginásio ou ao ar livre. Correção técnica em tempo real e motivação constante.",
    price: "A partir de €30/sessão",
    features: ["Acompanhamento 1:1", "Correção técnica", "Flexibilidade de horários", "Suporte nutricional"],
    icon: "💪",
    color: "from-[#1E90FF] to-blue-600",
    popular: false
  },
  {
    title: "Treinos Online",
    desc: "Planos remotos com acompanhamento semanal e ajustes personalizados. Ideal para quem prefere treinar em casa.",
    price: "A partir de €80/mês",
    features: ["Planos personalizados", "Acompanhamento semanal", "Ajustes contínuos", "Suporte por chat"],
    icon: "🏃‍♂️",
    color: "from-[#FF6B35] to-orange-600",
    popular: true
  },
  {
    title: "Planos Alimentares",
    desc: "Nutrição alinhada ao teu objetivo de treino e estilo de vida. Planos adaptados às tuas preferências.",
    price: "A partir de €50/mês",
    features: ["Planos personalizados", "Receitas incluídas", "Acompanhamento nutricional", "Ajustes semanais"],
    icon: "🥗",
    color: "from-green-500 to-emerald-600",
    popular: false
  },
  {
    title: "Acompanhamento Premium",
    desc: "Serviço completo com treino + nutrição + suporte 24/7. Para quem quer resultados máximos.",
    price: "A partir de €120/mês",
    features: ["Treino + Nutrição", "Suporte 24/7", "Check-ins diários", "Análise de progresso"],
    icon: "👑",
    color: "from-purple-500 to-pink-600",
    popular: false
  }
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Os Meus <span className="text-[#1E90FF]">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolhe o serviço que melhor encaixa nos teus objetivos e estilo de vida
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`relative bg-gray-800 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  service.popular 
                    ? 'border-[#FF6B35] shadow-lg shadow-[#FF6B35]/20' 
                    : 'border-gray-700 hover:border-[#1E90FF]/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.desc}</p>
                  <div className="text-2xl font-bold text-[#1E90FF] mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link 
                    href="/contacto" 
                    className={`inline-block w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                      service.popular
                        ? 'bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white'
                        : 'bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white'
                    }`}
                  >
                    Escolher Plano
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Porque Escolher os <span className="text-[#1E90FF]">Meus Serviços</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalizado</h3>
              <p className="text-gray-300">
                Cada plano é adaptado às tuas necessidades, objetivos e rotina diária.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-orange-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                📈
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resultados</h3>
              <p className="text-gray-300">
                Foco em resultados reais e sustentáveis, com acompanhamento contínuo.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto">
                💪
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Suporte</h3>
              <p className="text-gray-300">
                Suporte dedicado e motivação constante para manteres o foco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contacta-me para uma consulta gratuita e descobre qual o melhor plano para ti
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Marca Consulta Gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}


