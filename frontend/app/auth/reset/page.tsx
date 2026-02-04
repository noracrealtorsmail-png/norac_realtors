"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";

export default function ResetPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center p-6">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

            {/* Absolute Back Button */}
            <div className="absolute top-8 left-8 z-[100]">
                <Link
                    href="/auth/login"
                    className="flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-md border border-border/40 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl"
                >
                    <ArrowLeft size={14} /> Back to Sign In
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-card/20 backdrop-blur-xl border border-border/40 p-10 md:p-16 rounded-[3rem] shadow-2xl space-y-8"
            >
                <div className="flex justify-center">
                    <img src="/assets/logo/logo-2-removebg.png" className="w-16 h-16 transition-transform group-hover:scale-110" alt="Logo" />
                </div>

                {!submitted ? (
                    <>
                        <div className="space-y-3 text-center">
                            <h2 className="text-4xl font-black tracking-tighter uppercase text-foreground">Reset Access</h2>
                            <p className="text-muted-foreground font-medium italic">Enter your secure email to initiate recovery.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Verified Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                                    <input
                                        type="email"
                                        placeholder="recovery@company.com"
                                        className="w-full bg-background/40 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold text-foreground"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setSubmitted(true)}
                                className="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                Send Instructions <ArrowRight size={18} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center space-y-8 py-4">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center mb-6">
                            <Mail size={40} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">Link Dispatched</h3>
                            <p className="text-muted-foreground font-medium italic">Please check your inbox. If you don't receive it within 5 minutes, verify your email address.</p>
                        </div>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-primary font-black uppercase tracking-widest text-xs hover:underline"
                        >
                            Resend Security Link
                        </button>
                    </div>
                )}
            </motion.div>
        </main>
    );
}
