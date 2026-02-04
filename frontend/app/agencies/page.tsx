"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Building2, Search, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const agencies = [
    {
        name: "Horizon Estates",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200",
        cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        listings: 124,
        agents: 18,
        rating: 4.9,
        specialization: "Luxury Residential • Westlands",
        verified: true
    },
    {
        name: "Prime Commercial",
        logo: "https://images.unsplash.com/photo-1549724114-f58c738e411b?q=80&w=200",
        cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
        listings: 86,
        agents: 12,
        rating: 4.7,
        specialization: "Corporate Leasing • Upper Hill",
        verified: true
    },
    {
        name: "Heritage Homes",
        logo: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=200",
        cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        listings: 240,
        agents: 34,
        rating: 4.8,
        specialization: "Gated Communities • Karen",
        verified: true
    },
    {
        name: "Savannah Realty",
        logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200",
        cover: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=800",
        listings: 45,
        agents: 8,
        rating: 4.6,
        specialization: "Beachfront Properties • Mombasa",
        verified: false
    }
];

export default function AgenciesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Partner <br /><span className="text-primary">Agencies</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Direct access to Kenya's most reputable real estate firms and verified brokers.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto p-2 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 shadow-2xl flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Search size={20} className="text-primary" />
                            <input type="text" placeholder="Agency Name or Specialized Area..." className="bg-transparent border-none outline-none w-full font-bold" />
                        </div>
                        <button className="md:px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-3xl">Filter Agencies</button>
                    </motion.div>
                </div>
            </section>

            {/* Agencies Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {agencies.map((agency, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[3rem] overflow-hidden bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all shadow-xl"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={agency.cover}
                                    alt={agency.name}
                                    fill
                                    unoptimized={true}
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute -bottom-6 left-10 w-20 h-20 rounded-2xl bg-white p-1 shadow-2xl z-10 overflow-hidden">
                                    <Image
                                        src={agency.logo}
                                        alt="Logo"
                                        fill
                                        unoptimized={true}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="pt-10 p-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-2xl font-black uppercase tracking-tight">{agency.name}</h3>
                                            {agency.verified && (
                                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                                    <Star size={10} fill="currentColor" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{agency.specialization}</p>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-black text-foreground">
                                        <Star size={16} className="text-primary fill-primary" /> {agency.rating}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-border/40">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                                            <Building2 size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black">{agency.listings}</span>
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Listings</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                                            <Users size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-black">{agency.agents}</span>
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Agents</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">View Profile</button>
                                    <button className="flex-1 py-4 bg-card/40 border border-border/40 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-muted transition-all">All Properties</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="p-16 rounded-[4rem] bg-foreground text-background flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] pointer-events-none" />
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">List Your <br /><span className="text-primary italic">Organization</span></h2>
                        <p className="text-muted-foreground font-medium max-w-xl">Join Kenya's most elite real estate ecosystem and showcase your portfolio to local and global investors.</p>
                        <button className="flex items-center gap-3 py-5 px-10 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-3xl shadow-xl shadow-primary/20 ring-4 ring-primary/10">Become a Partner Agency <ArrowRight size={18} /></button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
