"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ServicosPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [trainingFrequency, setTrainingFrequency] = useState<number>(1);
  const [trainingDuration, setTrainingDuration] = useState<string>("30 minutos");
  const router = useRouter();

  const services = [
    {
      title: "Treinos Presenciais",
      desc: "Sessões 1:1 com acompanhamento personalizado no ginásio ou ao ar livre. Correção técnica em tempo real e motivação constante.",
      price: "A partir de €30/hora",
      features: ["Acompanhamento 1:1", "Correção técnica", "Flexibilidade de horários", "Ajustes na hora"],
      icon: "/images/presencial1.jpg",
      color: "from-[#1E90FF] to-blue-600",
      popular: false
    },
    {
      title: "Treinos Online",
      desc: "Planos remotos com acompanhamento semanal e ajustes personalizados. Ideal para quem prefere treinar em casa.",
      price: "A partir de €25€/hora",
      features: ["Planos personalizados", "Acompanhamento semanal", "Ajustes contínuos", "Videochamada"],
      icon: "/images/online1.png",
      color: "from-[#FF6B35] to-orange-600",
      popular: true
    },
    {
      title: "Aulas de Grupo",
      desc: "Aulas em grupo com ambiente motivacional e preços mais acessíveis. Ideal para quem gosta de treinar em equipa.",
      price: "A partir de €20/hora",
      features: ["Aulas em grupo", "Ambiente motivacional", "Preços acessíveis", "Horários flexíveis"],
      icon: "/images/grupo.png",
      color: "from-purple-500 to-pink-600",
      popular: false
    },
    {
      title: "Ginástica Laboral / Teambuilding para Empresas",
      desc: "Sessões de ginástica laboral e atividades de teambuilding para promover saúde, bem-estar e espírito de equipa nas empresas.",
      price: "€30/hora",
      icon: "/images/coletivo.jpg",
      color: "from-green-500 to-emerald-600",
      popular: false,
      pdf: "https://1b7dd9d4-91c7-449f-be0e-7e7479c5029f.filesusr.com/ugd/3342dc_0223ae79b6854f449c15e195b1428f49.pdf"
    }
  ];

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleContinue = () => {
    const params = new URLSearchParams({
      service: selectedService || "",
      frequency: trainingFrequency.toString(),
      duration: trainingDuration
    });
    
    router.push(`/contacto?${params.toString()}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setTrainingFrequency(1);
    setTrainingDuration("30 minutos");
  };

  const calculatePrice = () => {
    let basePrice = 0;

    if (selectedService === "Treinos Presenciais") {
      switch (trainingDuration) {
        case "30 minutos":
          basePrice = 20;
          break;
        case "45 minutos":
          basePrice = 25;
          break;
        case "1 hora":
          basePrice = 30;
          break;
      }
    } else if (selectedService === "Treinos Online") {
      switch (trainingDuration) {
        case "30 minutos":
          basePrice = 15;
          break;
        case "45 minutos":
          basePrice = 21;
          break;
        case "1 hora":
          basePrice = 25;
          break;
      }
    } else if (selectedService === "Aulas de Grupo") {
      switch (trainingDuration) {
        case "30 minutos":
          basePrice = 13;
          break;
        case "45 minutos":
          basePrice = 17;
          break;
        case "1 hora":
          basePrice = 20;
          break;
      }
    } else if (selectedService === "Ginástica Laboral / Teambuilding para Empresas") {
      switch (trainingDuration) {
        case "30 minutos":
          basePrice = 20;
          break;
        case "45 minutos":
          basePrice = 25;
          break;
        case "1 hora":
          basePrice = 30;
          break;
      }
    }

    return basePrice * trainingFrequency;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Os Meus <span className="text-[#1E90FF]">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolhe o serviço que melhor encaixa nos teus objetivos e estilo de vida
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer ${
                  service.popular 
                    ? 'border-[#FF6B35] shadow-lg shadow-[#FF6B35]/20' 
                    : 'border-blue-200 hover:border-[#1E90FF]/50'
                }`}
                onClick={() => handleServiceClick(service.title)}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <div className="text-2xl font-bold text-[#1E90FF] mb-6">{service.price}</div>
                  </div>
                </div>

                {service.pdf ? (
                  <div className="mb-8 text-center">
                    <a
                      href={service.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[#1E90FF] font-bold underline text-lg"
                    >
                      Informação detalhada (PDF)
                    </a>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features && service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="text-center">
                  <button 
                    className={`inline-block w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 shadow-lg ${
                      service.popular
                        ? 'bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white'
                        : 'bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white'
                    }`}
                  >
                    Escolher Plano
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Personalizar {selectedService}
              </h3>
              <p className="text-gray-600">
                Escolhe a frequência e duração dos teus treinos
              </p>
            </div>

            <div className="space-y-6">
              {/* Training Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Frequência de Treinos por Semana
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setTrainingFrequency(freq)}
                      className={`py-3 px-2 rounded-lg font-bold transition-all duration-300 ${
                        trainingFrequency === freq
                          ? 'bg-[#1E90FF] text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#1E90FF] hover:text-[#1E90FF]'
                      }`}
                    >
                      {freq}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Training Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Duração do Treino
                </label>
                <div className="space-y-2">
                  {["30 minutos", "45 minutos", "1 hora"].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setTrainingDuration(duration)}
                      className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                        trainingDuration === duration
                          ? 'bg-[#FF6B35] text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-[#FF6B35] hover:text-[#FF6B35]'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
                             </div>

               {/* Price Display */}
               <div className="bg-gray-50 rounded-lg p-4 mt-6">
                 <div className="text-center">
                   <p className="text-sm text-gray-600 mb-2">Preço/Semana</p>
                   <p className="text-3xl font-bold text-[#1E90FF]">€{calculatePrice()}</p>
                   <p className="text-xs text-gray-500 mt-1">
                     {trainingFrequency}x por semana • {trainingDuration}
                   </p>
                 </div>
               </div>

               {/* Action Buttons */}
               <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-all duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleContinue}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#1E90FF] to-blue-600 text-white rounded-lg font-bold hover:from-[#1E90FF]/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Porque Escolher os <span className="text-[#1E90FF]">Meus Serviços</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalizado</h3>
              <p className="text-gray-600">
                Cada plano é adaptado às tuas necessidades, objetivos e rotina diária.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resultados</h3>
              <p className="text-gray-600">
                Foco em resultados reais e sustentáveis, com acompanhamento contínuo.
              </p>
            </div>

                         <div className="text-center p-8 bg-white rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
               <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte</h3>
               <p className="text-gray-600">
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
          <button 
            onClick={() => router.push('/contacto')}
            className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Marca Consulta Gratuita
          </button>
        </div>
      </section>
    </main>
  );
}


