"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587145687911", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/psicowork_sst/", label: "Instagram" },
];

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Psicoterapia Individual", href: "#servicios" },
      { label: "Terapia de Pareja", href: "#servicios" },
      { label: "Terapia Familiar", href: "#servicios" },
      { label: "Atención Virtual", href: "#servicios" },
    ],
  },
  {
    title: "Empresas",
    links: [
      { label: "Riesgo Psicosocial", href: "#empresas" },
      { label: "SG-SST", href: "#empresas" },
      { label: "Talento Humano", href: "#empresas" },
      { label: "Formación", href: "#empresas" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Reservar Cita", href: "#contacto" },
      { label: "PSICO WORK PLUS", href: "#contacto" },
      { label: "Ubicación", href: "#contacto" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="#inicio" className="mb-6 inline-block group">
              <div className="relative w-96 h-24 opacity-90 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm rounded-xl p-2">
                <Image
                  src="/images/logo-new.png"
                  alt="PSICO WORK Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-8 max-w-sm leading-relaxed">
              Bienestar integral y salud mental para personas y empresas.
              Tu socio estratégico en psicología clínica y organizacional.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 border border-primary-foreground/10 hover:border-secondary"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-serif text-lg font-medium text-primary-foreground mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} PSICO WORK. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm flex items-center gap-1.5">
            Desarrollado por{" "}
            <a
              href="https://www.kytcode.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-white hover:underline font-medium"
            >
              K&T
            </a>
            <span className="text-primary-foreground">🤍</span>
          </p>
        </div>
      </div>
    </footer >
  );
}
