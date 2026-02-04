"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { User, Search, MapPin, Phone, Mail, Star, ArrowRight, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const agents = [
    {
        name: "Alex Thompson",
        role: "Principal Broker",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHX9ulp2-b1HkT57ME1i6zJdzVhfE459L9P0auNxdp4IapJzkb_aBQx8sKHlVDbA9PakIeaAnA2hGrQqfeMpY7GHz90uVTReC3wMnVeAfaTMPMqpdrkM9DsPsFQ4PFWsccSPxrc4zAKSx1gWTmtD4Gjm_mRh9nMMK33Mqg1YPL75TNbLN_JjEI0DotflH57VaZ6WRaSCsCHPM7LN9h_VJyM0VFwfNVM9kejA53CzMUmEmI5PEZ4weV4MoUd3ectiTpPc7pz0-hFY",
        listings: 42,
        experience: "12 Years",
        rating: 4.9,
        agency: "Horizon Estates",
        specialization: "Muthaiga & Karen",
        verified: true
    },
    {
        name: "Sarah Kimani",
        role: "Investment Analyst",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSuvbYr3Ufl26VXH0ruuDDr0loER981JyvNkQ4_y-FTBZhvKvhOB6bLNKMB9loUlWfNh5S7XTMCXxTrDwm9IK3IJMm-HH3uLaNLjjzThEWd2OAQBgjZYPEH0Xo2qB_IO_4-7gnB2R5J_v2Cj4rPC6pSVAM0QUPoYBbnKH8CMJdoXpql7FcAmttdHUZi4j_JYzkP55tAqv87YbcxbJqN6mUSMgAU1hxw7C64qU7CGrs6TaGnpKZKQcmEsOAr22t04O7lpK6A743BnI",
        listings: 28,
        experience: "8 Years",
        rating: 4.8,
        agency: "Prime Commercial",
        specialization: "Upper Hill Corporate",
        verified: true
    },
    {
        name: "David Mwangi",
        role: "Luxury Consultant",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkOjLKK0NdaOteJBjQth1J7K7y6oDdVXnQdcdmZ3afvRzktnvsn7ZIB2A2tTSKue1wR1bfj_7pidJvVrTcjVky6fNHu8nrUL5uzgyRU9BuXzdJGdPaH3gaNXD_T5gpOnZUlSCsdjeh0Ta3sX9isnEvjVmDjFaaoqKS8xZCMWO6nRCCz-2onrheN3miYTIohJxYos6AGKNIcR9T__Dic041MV3Cm1HeAP2hAdED0k1-42RIIUViNpq_gCcpfmLqnFVoSplW053izms",
        listings: 54,
        experience: "15 Years",
        rating: 5.0,
        agency: "Heritage Homes",
        specialization: "Beachfront & Off-plan",
        verified: true
    },
    {
        name: "Jessica Lee",
        role: "Property Manager",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
        listings: 110,
        experience: "10 Years",
        rating: 4.7,
        agency: "Savannah Realty",
        specialization: "Kilimani Residential",
        verified: false
    }
];

export default function AgentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <span className="text-primary font-black uppercase tracking-[1em] text-[10px]">The Elite Network</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Find Your <br /><span className="text-primary">Professional</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Connect with Kenya's most successful property brokers, advisors, and consultants.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-4xl p-2 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 shadow-2xl flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Search size={20} className="text-primary" />
                            <input type="text" placeholder="Specialization (e.g. Luxury, Karen, Commercial)..." className="bg-transparent border-none outline-none w-full font-bold" />
                        </div>
                        <button className="md:px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-3xl">Search Agents</button>
                    </motion.div>
                </div>
            </section>

            {/* Agents Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col rounded-[2.5rem] overflow-hidden bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all shadow-xl"
                        >
                            <div className="relative h-72 overflow-hidden bg-muted">
                                <Image
                                    src={agent.image}
                                    alt={agent.name}
                                    fill
                                    unoptimized={true}
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute top-6 right-6">
                                    {agent.verified && (
                                        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-primary shadow-xl">
                                            <ShieldCheck size={18} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black uppercase tracking-tight">{agent.name}</h3>
                                    <p className="text-[10px] font-black py-1 px-3 rounded-full bg-primary/10 text-primary w-fit uppercase tracking-widest">{agent.role}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Briefcase size={14} className="text-primary/60" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{agent.agency}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <MapPin size={14} className="text-primary/60" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{agent.specialization}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/40">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Listings</span>
                                        <span className="text-sm font-black italic">{agent.listings}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Experience</span>
                                        <span className="text-sm font-black italic">{agent.experience}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 py-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:shadow-lg transition-all">Connect</button>
                                    <button className="flex-1 py-4 bg-muted/30 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-muted transition-all">Profile</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Verification Banner */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="p-12 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="space-y-4 max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">Verified <br /><span className="text-primary">Professionalism</span></h2>
                        <p className="text-muted-foreground font-medium italic">Every Norac partner agent undergoes a rigorous vetting process involving regulatory compliance, transaction history, and service integrity.</p>
                    </div>
                    <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl shadow-primary/20 ring-4 ring-primary/10 flex items-center gap-3">Join as an Agent <ArrowRight size={18} /></button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
