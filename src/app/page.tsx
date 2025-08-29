"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fabiobanner.png"
            alt="Fábio Lé Personal Trainer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1E90FF]/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">FÁBIO LÉ</span>
              <br />
              <span className="text-4xl md:text-5xl text-white drop-shadow-lg">PERSONAL TRAINER</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Transforma o teu corpo, transforma a tua vida. 
              <br />
              <span className="text-[#FF6B35] font-semibold">Resultados que se notam por dentro e por fora.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contacto" 
                className="btn-primary text-lg px-8 py-4 bg-[#1E90FF] hover:bg-[#1E90FF]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Marca já a tua sessão
              </Link>
              <Link 
                href="/servicos" 
                className="btn-secondary text-lg px-8 py-4 bg-[#FF6B35] hover:bg-[#FF6B35]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Os Meus <span className="text-[#1E90FF]">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Planos personalizados para diferentes objetivos e níveis de fitness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Treinos Presenciais",
                desc: "Sessões 1:1 com acompanhamento personalizado no ginásio ou ao ar livre.",
                icon: "💪",
                color: "from-[#1E90FF] to-blue-600"
              },
              {
                title: "Treinos Online",
                desc: "Planos remotos com acompanhamento semanal e ajustes personalizados.",
                icon: "🏃‍♂️",
                color: "from-[#FF6B35] to-orange-600"
              },
              {
                title: "Planos Alimentares",
                desc: "Nutrição alinhada ao teu objetivo de treino e estilo de vida.",
                icon: "🥗",
                color: "from-green-500 to-emerald-600"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.desc}</p>
                <div className="text-center">
                  <Link 
                    href="/servicos" 
                    className="text-[#1E90FF] hover:text-[#1E90FF]/80 font-semibold transition-colors"
                  >
                    Saber mais →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Sobre <span className="text-[#1E90FF]">Mim</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sou um personal trainer apaixonado por fitness e transformação. 
                Com anos de experiência, ajudo pessoas a alcançarem os seus objetivos 
                através de treinos personalizados e acompanhamento dedicado.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E90FF] mb-2">5+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">100+</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
                  <div className="text-gray-600">Suporte</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fabio1.png"
                  alt="Fábio Lé Personal Trainer"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E90FF]/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              O Que Dizem os <span className="text-[#1E90FF]">Meus Clientes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "O Fábio transformou completamente a minha abordagem ao fitness. Resultados incríveis em apenas 3 meses!",
                name: "Maria Silva",
                result: "Perdeu 15kg"
              },
              {
                text: "Acompanhamento excepcional e planos personalizados. Recomendo a 100%!",
                name: "João Santos",
                result: "Ganhou 8kg músculo"
              },
              {
                text: "Finalmente encontrei alguém que me entende e adapta os treinos à minha rotina.",
                name: "Ana Costa",
                result: "Melhorou 40% força"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-blue-200 pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-[#FF6B35] text-sm font-medium">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-blue-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Transformar o Teu Corpo?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junta-te aos meus clientes satisfeitos e começa hoje mesmo a tua transformação
            </p>
            <Link 
              href="/contacto" 
              className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Marca a Tua Primeira Sessão
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
