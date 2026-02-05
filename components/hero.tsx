"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/images/hero_soft_wellness.webp",
    "/images/hero_corporate_wellness.webp",
    "/images/hero_clinical_psychology.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-32 pb-32">
      {/* Background Image Carousel */}
      {/* Background Image Carousel */}
      {/* static LCP Image (First Slide) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[0]}
          alt="Bienestar y Psicología Profesional"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Background Image Carousel (Overlays the static one) */}
      <AnimatePresence mode="wait">
        {currentImage !== 0 && (
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Bienestar y Psicología Profesional"
              fill
              className="object-cover object-center"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mr-auto text-left"
        >
          {/* Minimalist Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-start gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-accent opacity-80" />
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase opacity-90">
              Salud Mental y Bienestar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10 text-balance font-light"
          >
            Bienestar Integral para <br />
            <span className="text-secondary italic font-normal">Personas</span> <span className="font-serif italic font-light text-accent text-6xl md:text-8xl align-middle mr-2 ml-1">&</span> <span className="text-secondary italic font-normal">Empresas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-14 font-sans font-light leading-loose max-w-xl mr-auto tracking-wide"
          >
            Psicología Clínica, Organizacional y Gestión del Talento Humano. Transformamos vidas y potenciamos entornos laborales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 justify-start items-center sm:items-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white rounded-none h-14 px-12 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-white/20 shadow-2xl hover:-translate-y-1"
            >
              <Link href="#servicios">
                Nuestros Servicios
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white rounded-none h-14 px-12 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-white/20 shadow-2xl hover:-translate-y-1"
            >
              <Link href="#contacto">Contactar</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
