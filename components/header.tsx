"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  logo?: string;
  menuItems?: {
    label: string;
    sectionId: string;
  }[];
}

export function Header({ logo, menuItems = [] }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fallback items if Sanity data is missing or empty
  const navLinks = menuItems?.length > 0 ? menuItems : [
    { label: "Inicio", sectionId: "inicio" },
    { label: "Servicios", sectionId: "servicios" },
    { label: "Empresas", sectionId: "empresas" },
    { label: "Contacto", sectionId: "contacto" },
  ];

  const logoSrc = logo || "/images/logo-new.webp";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24 transition-all duration-300">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 p-3 min-h-[44px]">
            <div className="relative w-72 h-20 lg:w-[450px] lg:h-32">
              <Image
                src={logoSrc}
                alt="PSICO WORK Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={`#${item.sectionId.replace(/^#/, '')}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contacto">Reservar Cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={`#${item.sectionId.replace(/^#/, '')}`}
                    className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                    Reservar Cita
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
