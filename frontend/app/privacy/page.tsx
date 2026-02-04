"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center md:text-left space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Privacy <span className="text-primary italic">Policy</span></h1>
                        <p className="text-muted-foreground text-lg uppercase font-bold tracking-[0.3em]">Precision in Data Integrity</p>
                    </motion.div>

                    <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground font-medium leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">01</span>
                                Information Collection
                            </h2>
                            <p>At Norac Realtors, we collect information that allows us to provide a bespoke real estate experience. This includes personal identifiers (name, email, phone) and property preferences to curate our service to your architectural tastes and investment goals.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">02</span>
                                Usage of Data
                            </h2>
                            <p>Your data is used to optimize our dashboard responses, facilitate direct communication between you and our certified agents, and provide exclusive early access to new developments. We employ advanced encryption to ensure your investment intent remains confidential.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">03</span>
                                Third-Party Integrity
                            </h2>
                            <p>No personal data is sold or licensed to third-party advertisers. Information is only shared with trusted legal and financial partners explicitly involved in your property acquisition process, and only with your verified consent.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">04</span>
                                Digital Security
                            </h2>
                            <p>We utilize enterprise-grade security protocols, including SOC 2 compliant storage and SSL encryption across all dashboard interactions. Our platform is continuously monitored for unauthorized access to protect your portfolio information.</p>
                        </section>

                        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 italic">
                            "Privacy is not a feature at Norac; it is the foundation of high-net-worth relationships."
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest pt-10">Last Updated: January 28, 2026</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
