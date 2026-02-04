"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Cookie <span className="text-primary italic">Statement</span></h1>
                        <p className="text-muted-foreground text-lg uppercase font-bold tracking-[0.3em]">Optimizing Your Digital Experience</p>
                    </motion.div>

                    <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground font-medium leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">Understanding Pixels & Cookies</h2>
                            <p>Norac Realtors uses cookies to remember your property filters, dashboard theme preferences, and investment search history. This ensures that every time you return, the experience is personalized to your niche interests within the Kenyan real estate market.</p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">Cookie Classifications</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-card/20 border border-border/40">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Essential</h3>
                                    <p className="text-sm">Necessary for the dashboard login and secure property inquiries. Cannot be disabled.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-card/20 border border-border/40">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Performance</h3>
                                    <p className="text-sm">Anonymous data that helps us understand which developments are trending.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-card/20 border border-border/40">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Preference</h3>
                                    <p className="text-sm">Remembers your preferred currency, language, and property yield filters.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-card/20 border border-border/40">
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Interactive</h3>
                                    <p className="text-sm">Enables the 3D property models and interactive yield charts on the dashboard.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">Your Control</h2>
                            <p>You can manage your cookie preferences through your dashboard settings or browser controls. Please note that disabling essential cookies may impact your ability to interact with our real-time inventory systems.</p>
                        </section>

                        <div className="pt-10 flex justify-center">
                            <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:shadow-xl transition-all">Reset Cookie Preferences</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
