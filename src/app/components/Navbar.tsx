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
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-gray-700">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-white font-semibold text-lg hover:opacity-90" aria-label="Ir para Home">
          Fabio Le
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium hover:text-blue-400 focus:outline-none ${
                    isActive ? "text-blue-400" : "text-gray-300"
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


