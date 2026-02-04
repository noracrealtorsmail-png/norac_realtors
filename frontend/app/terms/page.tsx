"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center md:text-left space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Terms of <span className="text-primary italic">Service</span></h1>
                        <p className="text-muted-foreground text-lg uppercase font-bold tracking-[0.3em]">The Governance of Relationship</p>
                    </motion.div>

                    <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground font-medium leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">01</span>
                                Acceptance of Terms
                            </h2>
                            <p>By accessing the Norac Realtors platform, you enter into a professional agreement to abide by our standards of market integrity and digital decorum. These terms govern your use of our property listing services, dashboard tools, and advisory resources.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">02</span>
                                Listing Accuracy
                            </h2>
                            <p>While Norac strives for absolute precision, all property dimensions, architectural renders, and yield projections are subject to final architectural verification and market volatility. We reserve the right to modify listing details without prior notice to reflect real-time availability.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">03</span>
                                Professional Conduct
                            </h2>
                            <p>Users, Realtors, and Partners must maintain a standard of transparency. Any attempt to misrepresent property details, bypass platform security, or manipulate lead generation algorithms will result in immediate termination of access and potential legal recourse.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs">04</span>
                                Intellectual Property
                            </h2>
                            <p>The "Norac Realtors" brand, 3D assets, proprietary yield-analysis models, and UI design are the exclusive property of Norac. Unauthorized reproduction or reverse engineering of our dashboard systems is strictly prohibited.</p>
                        </section>

                        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-sm font-bold uppercase tracking-widest text-center">
                            Excellence. Integrity. Innovation.
                        </div>

                        <p className="text-xs font-bold uppercase tracking-widest pt-10 text-center">Effective Date: January 28, 2026</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
