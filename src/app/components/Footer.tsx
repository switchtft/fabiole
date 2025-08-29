import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-700 bg-black">
      <div className="container py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-3">Fabio Le</h3>
          <p className="text-gray-300 text-sm max-w-xs">Personal training presencial e online. Resultados reais, plano personalizado.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-blue-400 text-gray-300" href="/">Home</Link></li>
            <li><Link className="hover:text-blue-400 text-gray-300" href="/sobre">Sobre</Link></li>
            <li><Link className="hover:text-blue-400 text-gray-300" href="/servicos">Serviços</Link></li>
            <li><Link className="hover:text-blue-400 text-gray-300" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Redes sociais</h4>
          <div className="flex gap-4">
            <a className="text-gray-300 hover:text-orange-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a className="text-gray-300 hover:text-orange-500" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a className="text-gray-300 hover:text-orange-500" href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Fabio Le. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}


