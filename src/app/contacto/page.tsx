"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactoPageInner() {
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
                      onClick={() => (window.location.href = "/servicos")}
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

              {/* FormSubmit Form */}
              <form
                action="https://formsubmit.co/fabiole.pt@gmail.com"
                method="POST"
                className="space-y-6"
              >
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

                {/* Hidden Fields */}
                {selectedService && <input type="hidden" name="service" value={selectedService} />}
                {trainingFrequency && <input type="hidden" name="frequency" value={trainingFrequency} />}
                {trainingDuration && <input type="hidden" name="duration" value={trainingDuration} />}
                <input type="hidden" name="_next" value="https://www.fabiole.com/contacto" />
                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E90FF] to-blue-600 hover:from-[#1E90FF]/90 hover:to-blue-600/90 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contacto</h2>

                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-[#1E90FF] text-2xl" />
                  <a href="tel:+351912345678" className="text-lg text-gray-700 hover:text-[#1E90FF] transition">
                    +351 964 553 301
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-[#1E90FF] text-2xl" />
                  <a href="mailto:fabiole.pt@gmail.com" className="text-lg text-gray-700 hover:text-[#1E90FF] transition">
                    fabiole.pt@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-[#1E90FF] text-2xl" />
                  <span className="text-lg text-gray-700">S. Félix da Marinha: Estrada de Brito, 851 | 4410-206</span>
                  <span className="text-lg text-gray-700">Vila Nova de Gaia: Rua Arcos do Sardão, 22 | 4430-272</span>
                </div>
              </div>

              {/* Social Media */}
<div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg"> <h3 className="text-xl font-bold text-gray-800 mb-4">Redes Sociais</h3> <div className="flex gap-4"> <a href="https://www.instagram.com/pt_fabiole" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="Instagram" > <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> </svg> </a> <a href="https://www.facebook.com/fabiole13" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="Facebook" > <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> </svg> </a> <a href="https://www.linkedin.com/in/fabio-le" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="LinkedIn" > <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> </svg> </a> <a href="https://www.youtube.com/channel/UCaVEJUlceBfmF-6GxKYeqhQ" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="YouTube" > <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> </svg> </a> <a href="https://chat.whatsapp.com/Bzf2RZ500Ef2lOEcuu6m2S" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg" aria-label="WhatsApp" > <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg> </a> </div> </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-blue-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Não Esperes Mais!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A tua transformação começa hoje. Marca já a tua primeira sessão!
          </p>
          <a
            href="tel:+351912345678"
            className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ligar Agora
          </a>
        </div>
      </section>
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
