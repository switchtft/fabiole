"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactoPageInner() {
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
            {/* ... resto do teu código mantém-se igual ... */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* ... idem ... */}
    </main>
  );
}

// Wrapper com Suspense para evitar erro no build
export default function ContactoPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ContactoPageInner />
    </Suspense>
  );
}
