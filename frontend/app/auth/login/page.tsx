"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck, ArrowLeft } from "lucide-react";
import Image from "next/image";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/user");
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="min-h-screen bg-background relative overflow-hidden flex flex-col"
        >
            {/* Absolute Back Button */}
            <div className="absolute top-8 left-8 z-[100]">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-md border border-border/40 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl"
                >
                    <ArrowLeft size={14} /> Back to Home
                </Link>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Left: Cinematic Branding - Hardcoded Dark */}
                <div className="hidden lg:flex lg:w-1/2 relative p-20 flex-col justify-between overflow-hidden bg-[#050505]">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
                            alt="Architecture"
                            fill
                            unoptimized={true}
                            className="object-cover opacity-40 grayscale hover:scale-110 transition-transform duration-[10s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/20 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <Link href="/" className="flex items-center gap-3 group">
                            <img src="/assets/logo/logo-2-removebg.png" className="w-12 h-12 brightness-0 invert" alt="Logo" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white tracking-tighter uppercase">NORAC</span>
                                <span className="text-[10px] tracking-[0.4em] text-primary font-bold -mt-1 uppercase">REALTORS</span>
                            </div>
                        </Link>
                    </div>

                    <div className="relative z-10 space-y-6 max-w-lg">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl font-black text-white tracking-tighter leading-none uppercase"
                        >
                            Access The <br /><span className="text-primary italic">Intelligence.</span>
                        </motion.h1>
                        <p className="text-white/60 text-lg font-medium leading-relaxed italic">
                            Manage your global real estate portfolio with precision engineering and verified market data.
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-8 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-primary" /> SOC2 Compliant
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock size={14} className="text-primary" /> End-to-End Encryption
                        </div>
                    </div>
                </div>

                {/* Right: Login Form */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 relative bg-background">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-md space-y-10"
                    >
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tighter uppercase text-foreground">Sign In</h2>
                            <p className="text-muted-foreground font-medium">Welcome back to the Norac ecosystem.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@company.com"
                                            required
                                            className="w-full bg-card/40 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold text-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</label>
                                        <Link href="/auth/reset" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Forgot?</Link>
                                    </div>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            required
                                            className="w-full bg-card/40 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold text-foreground"
                                        />
                                    </div>
                                </div>
                            </div>

                            {error && <p className="text-rose-500 text-xs font-bold uppercase tracking-widest ml-1">{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Verifying..." : "Enter Portal"} <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/40"></span></div>
                            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                                <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-4 bg-card/40 border border-border/60 rounded-2xl hover:bg-muted transition-all text-xs font-bold text-foreground">
                                <Chrome size={18} /> Google
                            </button>
                            <button className="flex items-center justify-center gap-3 py-4 bg-card/40 border border-border/60 rounded-2xl hover:bg-muted transition-all text-xs font-bold text-foreground">
                                <Github size={18} /> GitHub
                            </button>
                        </div>

                        <p className="text-center text-sm font-medium text-muted-foreground">
                            Don't have an account? <Link href="/auth/signup" className="text-primary font-black uppercase tracking-widest text-xs hover:underline ml-1">Join Norac</Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
