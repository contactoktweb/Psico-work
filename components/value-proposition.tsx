"use client";

import { motion } from "framer-motion";

export function ValueProposition({ data }: { data?: any }) {
    if (!data) return null;

    const { heading, description } = data;

    return (
        <section className="py-24 bg-primary text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mb-6"
                >
                    {heading || "¿Buscas equilibrio?"}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-primary-foreground/90 text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed tracking-wide font-serif italic"
                >
                    {description}
                </motion.p>

                <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
            </div>
        </section>
    );
}
