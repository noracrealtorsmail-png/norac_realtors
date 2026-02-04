"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Layers, MapPin, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
        title: "The Norac Heights",
        status: "Under Construction",
        completion: "Q4 2027",
        location: "Kileleshwa, Nairobi",
        units: "120 Units",
        yield: "12% Expected Yield",
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
        title: "Azure Marina Phase II",
        status: "Pre-Launch",
        completion: "Q2 2028",
        location: "Nyali, Mombasa",
        units: "45 Villas",
        yield: "15% Expected Yield",
    },
    {
        image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200",
        title: "Eco-Logic Corporate Hub",
        status: "Finishing Touches",
        completion: "Q3 2026",
        location: "Westlands, Nairobi",
        units: "80 Offices",
        yield: "10% Expected Yield",
    }
];

export default function DevelopmentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">The Future <span className="text-primary">Developments</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Strategic real estate projects redefining the Kenyan urban landscape.</p>
                    </motion.div>
                </div>
            </section>

            {/* Development Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-16">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col lg:flex-row gap-12 items-center"
                        >
                            <div className="w-full lg:w-1/2 aspect-video relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    fill
                                    unoptimized={true}
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute top-8 left-8 p-1 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                    <div className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl">
                                        {proj.status}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        <Layers size={14} /> Future Living
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{proj.title}</h2>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                                        <MapPin size={16} className="text-primary" /> {proj.location}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 border-y border-border/40 py-8">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block">Completion</span>
                                        <div className="flex items-center gap-2 font-bold text-lg">
                                            <Calendar size={18} className="text-primary" /> {proj.completion}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest block">Investment</span>
                                        <div className="flex items-center gap-2 font-bold text-lg">
                                            <TrendingUp size={18} className="text-emerald-500" /> {proj.yield}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-black text-foreground">{proj.units}</div>
                                    <button className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-all group/btn">
                                        Register Interest <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6 mb-20 bg-primary/5 rounded-[4rem] mx-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Become an <span className="text-primary">Equity</span> Partner</h2>
                    <p className="text-muted-foreground text-lg font-medium">Invest in the early stages of our flagship developments and secure exclusive high-yield returns.</p>
                    <button className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">Download Investor Prospectus</button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
