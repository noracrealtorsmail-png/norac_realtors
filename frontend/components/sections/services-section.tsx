"use client";

import { motion } from "framer-motion";
import { Home, Search, Heart, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Luxury Listings",
        description: "Explore our exclusive portfolio of ultra-luxury homes and apartments in prime locations.",
    },
    {
        icon: Search,
        title: "Property Management",
        description: "Full-service management solutions for landlords, from tenant screening to maintenance.",
    },
    {
        icon: Heart,
        title: "Real Estate Advisory",
        description: "Expert guidance for property investments, market trends, and valuation services.",
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
                        Our Expertise
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Delivering comprehensive solutions across the luxury property and investment spectrum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-card/50 border border-border hover:bg-card/80 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                                Learn more <ArrowRight size={16} className="ml-2" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
