"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Landmark, Target, Users, ShieldCheck, Heart, ArrowRight, Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <span className="text-primary font-black uppercase tracking-[1em] text-[10px]">The Norac Legacy</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Architecting <br /><span className="text-primary">Trust</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">More than a marketplace. We are a data-driven ecosystem redefining real estate in East Africa.</p>
                    </motion.div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { icon: Target, title: "Precision", desc: "Data-driven valuations and strategic market timing for every asset." },
                        { icon: ShieldCheck, title: "Integrity", desc: "Absolute transparency in every transaction, verified by local legal standards." },
                        { icon: Globe, title: "Global Reach", desc: "Connecting Kenyan architectural excellence with international capital." }
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
                                <val.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{val.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed italic">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="relative h-[600px] rounded-[4rem] overflow-hidden group">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200"
                        alt="Workspace"
                        fill
                        unoptimized={true}
                        className="object-cover group-hover:scale-105 transition-transform duration-[10s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center p-12 md:p-24">
                        <div className="max-w-2xl space-y-8 text-white">
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Solving The <br /><span className="text-primary italic">Complexity</span></h2>
                            <p className="text-xl md:text-2xl font-medium opacity-80 leading-relaxed italic">"Our mission is to eliminate the opacity of the property market using engineering precision and ethical brokerage standards."</p>
                            <div className="flex items-center gap-6 pt-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-primary">2,500+</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Verified Listings</span>
                                </div>
                                <div className="w-px h-12 bg-white/20" />
                                <div className="flex flex-col">
                                    <span className="text-4xl font-black text-primary">$450M+</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Portfolio Value</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
