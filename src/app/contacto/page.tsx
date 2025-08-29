"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedService, setSelectedService] = useState<string>("");
  const [trainingFrequency, setTrainingFrequency] = useState<string>("");
  const [trainingDuration, setTrainingDuration] = useState<string>("");
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const service = searchParams.get("service");
    const frequency = searchParams.get("frequency");
    const duration = searchParams.get("duration");
    
    if (service) setSelectedService(service);
    if (frequency) setTrainingFrequency(frequency);
    if (duration) setTrainingDuration(duration);
  }, [searchParams]);
  
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

  const hasSelectedOptions = selectedService && trainingFrequency && trainingDuration;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-[#1E90FF]">Contacta</span> Comigo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para começar a tua transformação? Vamos conversar sobre os teus objetivos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envia-me uma Mensagem</h2>
              
              {/* Selected Service Options Display */}
              {hasSelectedOptions && (
                <div className="mb-6 p-4 bg-white rounded-lg border border-blue-200 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-800">📋 Opções Selecionadas:</h3>
                    <button
                      onClick={() => window.location.href = '/servicos'}
                      className="px-4 py-2 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-sm font-bold rounded-lg transition-all duration-300"
                    >
                      Alterar
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Serviço:</span>
                      <span className="font-semibold text-[#1E90FF]">{selectedService}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequência:</span>
                      <span className="font-semibold text-[#FF6B35]">{trainingFrequency}x por semana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-semibold text-[#FF6B35]">{trainingDuration}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full rounded-lg bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all duration-300" 
                    placeholder="O teu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full rounded-lg bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all duration-300" 
                    placeholder="nome@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full rounded-lg bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-all duration-300 resize-none" 
                    placeholder={
                      hasSelectedOptions 
                        ? `Olá Fábio! Estou interessado no serviço "${selectedService}" com ${trainingFrequency} treinos por semana de ${trainingDuration}. Conta-me sobre os teus objetivos de fitness e como posso ajudar...`
                        : "Conta-me sobre os teus objetivos de fitness e como posso ajudar..."
                    }
                    defaultValue={
                      hasSelectedOptions 
                        ? `Olá Fábio! Estou interessado no serviço "${selectedService}" com ${trainingFrequency} treinos por semana de ${trainingDuration}. Gostaria de saber mais sobre este plano e como podemos começar.`
                        : ""
                    }
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#1E90FF] to-blue-600 hover:from-[#1E90FF]/90 hover:to-blue-600/90 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar Mensagem
                </button>
                
                {status === "success" && (
                  <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-green-700 text-center font-medium">
                      ✅ Mensagem enviada com sucesso! Entrarei em contacto em breve.
                    </p>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                    <p className="text-red-700 text-center font-medium">
                      ❌ Verifica os dados (mensagem deve ter pelo menos 10 caracteres).
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      📧
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Email</div>
                      <a 
                        href="mailto:ola@fabiole.com" 
                        className="text-[#1E90FF] hover:text-[#1E90FF]/80 font-semibold transition-colors"
                      >
                        ola@fabiole.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      📱
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Telefone</div>
                      <a 
                        href="tel:+351912345678" 
                        className="text-[#1E90FF] hover:text-[#1E90FF]/80 font-semibold transition-colors"
                      >
                        +351 912 345 678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      ⏰
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Horário</div>
                      <div className="text-gray-800 font-semibold">
                        Segunda a Sexta: 7h - 22h
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Instagram"
                  >
                    📸
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="TikTok"
                  >
                    🎵
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Localização</h3>
                <div className="aspect-video w-full rounded-lg border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📍</div>
                    <div>Mapa em breve</div>
                    <div className="text-sm">Lisboa, Portugal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Não Esperes Mais!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A tua transformação começa hoje. Marca já a tua primeira sessão gratuita
          </p>
          <a 
            href="tel:+351912345678" 
            className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📞 Ligar Agora
          </a>
        </div>
      </section>
    </main>
  );
}


