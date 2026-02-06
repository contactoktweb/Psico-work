"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, Send, CheckCircle } from "lucide-react";



export function Contact({ data, globalSettings }: { data?: any, globalSettings?: any }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Extract contact info from global settings
  const phone = globalSettings?.phoneNumber || "321 241 1585";
  const email = globalSettings?.contactEmail || "psangievargas@gmail.com";

  // Dynamic Contact Info Array
  const contactInfo = [
    {
      icon: User,
      label: "Profesional",
      value: "Angie Vargas", // Could be dynamic if added to schema, keeping hardcoded for now or derived
    },
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const { tagline, title, description } = data || {};

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] bg-secondary w-12 opacity-60" />
                <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase block font-sans">
                  {tagline || "Contáctanos"}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight">
                {title?.line1 || "Estamos listos para"} <span className="italic font-normal text-secondary">{title?.highlight || "escucharte."}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 pt-4"
            >
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-primary mb-1">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block group hover:bg-white/50 p-4 -mx-4 rounded-xl transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="p-4 -mx-4">
                    {content}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-none shadow-lg shadow-black/5 border border-border/40 p-8 md:p-12 relative overflow-hidden"
            >
              {/* Shine effect - Subtle */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="min-h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                    ¡Mensaje Enviado Exitosamente!
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Gracias por ponerte en contacto con nosotros. Nuestro equipo revisará tu mensaje y te responderá a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-bold text-xs uppercase tracking-wider">Nombre Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Juan Pérez"
                        required
                        className="bg-background h-12 border-input focus:border-secondary rounded-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-bold text-xs uppercase tracking-wider">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="juan@empresa.com"
                        required
                        className="bg-background h-12 border-input focus:border-secondary rounded-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary font-bold text-xs uppercase tracking-wider">Empresa (Opcional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      className="bg-background h-12 border-input focus:border-secondary rounded-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-bold text-xs uppercase tracking-wider">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      required
                      className="bg-background resize-none border-input focus:border-secondary rounded-none transition-colors py-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-secondary hover:bg-primary/90 h-14 text-sm font-bold tracking-[0.2em] uppercase rounded-sm border border-transparent hover:border-secondary transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
