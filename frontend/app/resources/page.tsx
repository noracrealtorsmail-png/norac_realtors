"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
    FileText,
    BookOpen,
    Map,
    Download,
    ArrowUpRight,
    TrendingDown,
    ChevronRight,
    Search
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const guideItems = [
    { title: "The 2026 Kenyan Property Market Report", type: "Insight", icon: Map, color: "bg-blue-500" },
    { title: "Luxury Home Buying Guide for Expats", type: "Guide", icon: BookOpen, color: "bg-primary" },
    { title: "Tax Laws and Real Estate in East Africa", type: "Legal", icon: FileText, color: "bg-purple-500" },
    { title: "Smart Home Tech Trends in 2026", type: "Innovation", icon: TrendingDown, color: "bg-emerald-500" }
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"><span className="text-primary">Resource</span> Center</h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Intelligence, data, and guides to navigate the Kenyan property ecosystem.</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Insight */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-16 rounded-[4rem] bg-card/20 border border-border/40 backdrop-blur-xl flex flex-col lg:flex-row gap-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent -z-10" />

                    <div className="lg:w-1/2 space-y-6">
                        <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full">New Release</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Mastering The <br />Coastal <span className="text-primary">Investment</span></h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">Our comprehensive guide to high-yield beachfront developments in Watamu, Diani, and Nyali. Includes ROI projections for 2026-2030.</p>
                        <button className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-all group">
                            Access Guide <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200"
                            alt="Insight"
                            fill
                            unoptimized={true}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Quick Links */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-12">Knowledge Base</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-foreground">
                    {guideItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2.5rem] bg-card/10 border border-border/40 hover:bg-card/40 transition-all cursor-pointer group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.color}/10 flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} className="text-primary" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-2">{item.type}</span>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                            <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
                                Read More <ChevronRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Subscription */}
            <section className="py-24 px-6 mb-20">
                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[4rem] bg-foreground text-background text-center space-y-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase relative z-10">Stay <span className="text-primary italic">Ahead</span> Of The Market</h2>
                    <p className="text-background/80 text-lg font-medium relative z-10">Get weekly luxury market insights delivered straight to your inbox.</p>
                    <div className="max-w-md mx-auto flex flex-col md:flex-row gap-3 relative z-10">
                        <input type="email" placeholder="Email address..." className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-primary font-bold placeholder:text-white/40" />
                        <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:shadow-2xl transition-all">Join Pulse</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
