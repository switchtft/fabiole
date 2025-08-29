import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-3">Fabio Le</h3>
          <p className="text-white/70 text-sm max-w-xs">Personal training presencial e online. Resultados reais, plano personalizado.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-[--color-primary] text-white/80" href="/">Home</Link></li>
            <li><Link className="hover:text-[--color-primary] text-white/80" href="/sobre">Sobre</Link></li>
            <li><Link className="hover:text-[--color-primary] text-white/80" href="/servicos">Serviços</Link></li>
            <li><Link className="hover:text-[--color-primary] text-white/80" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Redes sociais</h4>
          <div className="flex gap-4">
            <a className="text-white/80 hover:text-[--color-secondary]" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a className="text-white/80 hover:text-[--color-secondary]" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
            <a className="text-white/80 hover:text-[--color-secondary]" href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Fabio Le. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}


