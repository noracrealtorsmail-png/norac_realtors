"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Briefcase, Landmark, Rocket, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const openings = [
    { title: "Senior Real Estate Analyst", location: "Nairobi", type: "Full-Time" },
    { title: "Frontend Engineering Lead", location: "Remote / Nairobi", type: "Full-Time" },
    { title: "Luxury Property Consultant", location: "Mombasa", type: "Commission Based" },
    { title: "Client Integrity Officer", location: "Nairobi", type: "Contract" }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Elevate Your <br /><span className="text-primary italic">Ambition</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Build the future of real estate technology with the most innovative team in East Africa.</p>
                    </motion.div>
                </div>
            </section>

            {/* Culture */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                            alt="Team Collaboration"
                            fill
                            unoptimized={true}
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black uppercase tracking-tight">The Norac <span className="text-primary">Culture</span></h2>
                        <p className="text-muted-foreground text-xl font-medium italic leading-relaxed">We promote a culture of radical transparency, extreme ownership, and mathematical precision in everything we build.</p>
                        <ul className="space-y-4">
                            {["Competitive Global Compensation", "Professional Development Equity", "Flexible High-Performance Environment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center"><CheckCircle2 size={12} /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="space-y-12">
                    <h2 className="text-3xl font-black uppercase tracking-tight text-center italic">Open <span className="text-primary">Positions</span></h2>
                    <div className="space-y-4">
                        {openings.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
                            >
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                        <span className="flex items-center gap-2"><Landmark size={12} /> {job.location}</span>
                                        <span className="flex items-center gap-2"><Briefcase size={12} /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="w-fit px-8 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:shadow-lg transition-all">Apply Now</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
