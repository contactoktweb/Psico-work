"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle, Twitter, Linkedin, Youtube, Link as LinkIcon } from "lucide-react";

// Icon mapping helper
const getIconByName = (name: string) => {
  const icons: Record<string, any> = {
    Facebook,
    Instagram,
    MessageCircle,
    Twitter,
    Linkedin,
    Youtube
  };
  return icons[name] || LinkIcon;
};

interface FooterProps {
  logo?: string;
  description?: string;
  columns?: {
    title: string;
    links: { label: string; url: string }[];
  }[];
  socialLinks?: {
    platform: string;
    url: string;
    iconName?: string;
  }[];
  copyright?: string;
}

export function Footer({
  logo,
  description,
  columns = [],
  socialLinks = [],
  copyright
}: FooterProps) {

  // Fallback data if Sanity is empty
  const footerCols = columns?.length > 0 ? columns : [
    {
      title: "Servicios",
      links: [
        { label: "Psicoterapia Individual", url: "#servicios" },
        { label: "Terapia de Pareja", url: "#servicios" },
        { label: "Terapia Familiar", url: "#servicios" },
        { label: "Atención Virtual", url: "#servicios" },
      ],
    },
    {
      title: "Empresas",
      links: [
        { label: "Riesgo Psicosocial", url: "#empresas" },
        { label: "SG-SST", url: "#empresas" },
        { label: "Talento Humano", url: "#empresas" },
        { label: "Formación", url: "#empresas" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "Reservar Cita", url: "#contacto" },
        { label: "PSICO WORK PLUS", url: "#contacto" },
        { label: "Ubicación", url: "#contacto" },
      ],
    },
  ];

  const socials = socialLinks?.length > 0 ? socialLinks : [
    { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61587145687911", iconName: "Facebook" },
    { platform: "Instagram", url: "https://www.instagram.com/psicowork_sst/", iconName: "Instagram" },
  ];

  const logoSrc = logo || "/images/logo-new.webp";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 justify-items-center sm:justify-items-start text-center sm:text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="#inicio" className="mb-4 inline-block group">
              <div className="relative opacity-90 group-hover:opacity-100 transition-opacity">
                <Image
                  src={logoSrc}
                  alt="PSICO WORK Logo"
                  width={180}
                  height={55}
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-8 max-w-sm leading-relaxed">
              {description || "Bienestar integral y salud mental para personas y empresas. Tu socio estratégico en psicología clínica y organizacional."}
            </p>
          </div>

          {/* Links Columns */}
          {footerCols.map((column) => (
            <div key={column.title} className="flex flex-col items-center sm:items-start w-full">
              <h4 className="font-serif text-lg font-medium text-primary-foreground mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className="text-primary-foreground/90 hover:text-secondary transition-colors text-sm block py-3"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Icons for Contact Column */}
              {column.title === "Contacto" && (
                <div className="flex gap-4 mt-6 justify-center sm:justify-start">
                  {socials.map((social) => {
                    const IconComponent = getIconByName(social.iconName || social.platform);
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        aria-label={social.platform}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary-foreground/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 border border-primary-foreground/10 hover:border-secondary"
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col items-center text-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            {copyright || `© ${currentYear} PSICO WORK. Todos los derechos reservados.`}
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center gap-1">
            Desarrollado por
            <a
              href="https://www.kytcode.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-white hover:underline font-medium min-h-[44px] inline-flex items-center"
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
