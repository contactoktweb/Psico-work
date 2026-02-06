"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  data?: {
    carouselImages: string[];
    label?: string;
    title?: {
      line1: string;
      highlight1: string;
      connector: string;
      highlight2: string;
    };
    description?: string;
    buttons?: {
      label: string;
      url: string;
    }[];
  };
}

export function Hero({ data }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Fallback data
  const images = data?.carouselImages?.length ? data.carouselImages : [
    "/images/hero_soft_wellness.webp",
    "/images/hero_corporate_wellness.webp",
    "/images/hero_clinical_psychology.webp",
  ];

  const title = data?.title || {
    line1: "Bienestar Integral para",
    highlight1: "Personas",
    connector: "&",
    highlight2: "Empresas",
  };

  const buttons = data?.buttons?.length ? data.buttons : [
    { label: "Nuestros Servicios", url: "#servicios" },
    { label: "Contactar", url: "#contacto" },
  ];

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="inicio" className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-32 pb-32">
      {/* Background Image Carousel */}
      {/* static LCP Image (First Slide) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images[0]}
          alt={data?.label || "Bienestar y Psicología Profesional"}
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
        {images.length > 1 && currentImage !== 0 && (
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={images[currentImage]}
              alt={data?.label || "Bienestar y Psicología Profesional"}
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
        <div
          className="max-w-3xl mr-auto text-left animate-in fade-in slide-in-from-left-8 duration-700 fill-mode-forwards"
        >
          {/* Minimalist Label */}
          <div
            className="flex items-center justify-start gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-forwards"
          >
            <div className="h-[1px] w-12 bg-accent opacity-80" />
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase opacity-90">
              {data?.label || "Salud Mental y Bienestar"}
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10 text-balance font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-forwards"
          >
            {title.line1} <br />
            <span className="text-secondary italic font-normal">{title.highlight1}</span> <span className="font-serif italic font-light text-accent text-6xl md:text-8xl align-middle mr-2 ml-1">{title.connector}</span> <span className="text-secondary italic font-normal">{title.highlight2}.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 mb-14 font-sans font-light leading-loose max-w-xl mr-auto tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-forwards"
          >
            {data?.description || "Psicología Clínica, Organizacional y Gestión del Talento Humano. Transformamos vidas y potenciamos entornos laborales."}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-start items-center sm:items-start animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-forwards"
          >
            {buttons.map((btn, index) => (
              <Button
                key={index}
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white rounded-none h-14 px-12 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-white/20 shadow-2xl hover:-translate-y-1"
              >
                <Link href={btn.url}>
                  {btn.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
