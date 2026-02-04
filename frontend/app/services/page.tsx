"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
    Briefcase,
    Home,
    TrendingUp,
    ShieldCheck,
    Heart,
    Building2,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Home,
        title: "Luxury Residential",
        desc: "Bespoke acquisition services for villas, penthouses, and high-end estates.",
        features: ["Global Marketing", "Private Viewings", "Pricing Strategy"]
    },
    {
        icon: Building2,
        title: "Commercial Assets",
        desc: "Strategic advisory for office blocks, retail spaces, and mixed-use developments.",
        features: ["Yield Analysis", "Lease Management", "Site Acquisition"]
    },
    {
        icon: TrendingUp,
        title: "Real Estate Advisory",
        desc: "Data-driven insights to maximize your portfolio growth and stability.",
        features: ["Market Reports", "Risk Assessment", "Equity Planning"]
    },
    {
        icon: ShieldCheck,
        title: "Property Management",
        desc: "Ensuring your assets are maintained to the highest luxury standards.",
        features: ["Tenant Vetting", "Maintenance", "Compliance"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Expertise In <br /><span className="text-primary">Excellence</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto">Beyond brokerage. We provide comprehensive ecosystem of solutions for the modern property owner.</p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[3rem] bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <svc.icon size={32} />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{svc.title}</h3>
                            <p className="text-muted-foreground font-medium mb-8 leading-relaxed italic">{svc.desc}</p>
                            <ul className="space-y-3 mb-10">
                                {svc.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-bold opacity-80">
                                        <CheckCircle2 size={16} className="text-primary" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
                                Explore Service <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="p-16 rounded-[4rem] bg-foreground text-background flex flex-col md:flex-row items-center gap-12">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary">
                        <Briefcase size={40} />
                    </div>
                    <div className="flex-1 space-y-4">
                        <p className="text-2xl md:text-4xl font-black tracking-tight uppercase italic leading-none">"At Norac, we don't just sell property; we bridge dreams with reality through calculated engineering and market foresight."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-px bg-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-primary/80">Norac Leadership Team</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
