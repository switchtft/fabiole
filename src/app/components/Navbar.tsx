"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#1E90FF] shadow-lg">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-white font-semibold text-lg hover:opacity-90" aria-label="Ir para Home">
          Fábio Lé
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium hover:text-[#FF6B35] focus:outline-none transition-colors ${
                    isActive ? "text-[#FF6B35] font-bold" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}


