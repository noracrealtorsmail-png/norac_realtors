"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Check, Building2, UserCircle2, Briefcase, ArrowLeft, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignupPage() {
    const router = useRouter();
    const [role, setRole] = useState("USER");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const roles = [
        { id: "USER", name: "Homebuyer", icon: UserCircle2, desc: "Find your dream home" },
        { id: "REALTOR", name: "Realtor", icon: Briefcase, desc: "List and manage assets" },
        { id: "INVESTOR", name: "Investor", icon: Building2, desc: "Equity partner portal" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Signup failed");
                return;
            }

            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                router.push("/auth/login");
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
                {/* Left: Cinematic Branding */}
                <div className="hidden lg:flex lg:w-1/2 relative p-20 flex-col justify-between overflow-hidden bg-[#050505]">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
                            alt="Modern Living"
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
                            <div className="flex flex-col text-white">
                                <span className="text-2xl font-black tracking-tighter uppercase leading-none">NORAC</span>
                                <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-70">REALTORS</span>
                            </div>
                        </Link>
                    </div>

                    <div className="relative z-10 space-y-6 max-w-lg text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl font-black tracking-tighter leading-none uppercase"
                        >
                            Join The <br /><span className="text-primary italic">Standard.</span>
                        </motion.h1>
                        <p className="text-white/60 text-lg font-medium leading-relaxed italic">
                            Step into the future of real estate technology. Get early access to the most exclusive developments in Africa.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4">
                        {[
                            "Personalized Dashboard Tracking",
                            "Direct Concierge Access",
                            "Advanced ROI Analytics"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                                <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/20"><Check size={12} /></div>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Signup Form */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 relative bg-background">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-md space-y-10"
                    >
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tighter uppercase text-foreground">Create Account</h2>
                            <p className="text-muted-foreground font-medium">Join the elite network of Norac Realtors.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-3 gap-3">
                                {roles.map((r) => (
                                    <button
                                        key={r.id}
                                        type="button"
                                        onClick={() => setRole(r.id)}
                                        className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 group ${role === r.id ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5' : 'bg-card/40 border-border/40 hover:bg-muted'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${role === r.id ? 'bg-primary text-white' : 'bg-background border border-border group-hover:border-primary/40'}`}>
                                            <r.icon size={18} />
                                        </div>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${role === r.id ? 'text-primary' : 'text-muted-foreground'}`}>{r.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Alex Thompson"
                                            required
                                            className="w-full bg-card/40 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold text-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Work Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="alex@company.com"
                                            required
                                            className="w-full bg-card/40 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold text-foreground"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Password</label>
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

                            <div className="space-y-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {loading ? "Creating..." : `Create ${role.toLowerCase()} account`} <ArrowRight size={18} />
                                </button>

                                <p className="text-center text-[10px] text-muted-foreground font-medium leading-relaxed px-4">
                                    By creating an account, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Integrity</Link>.
                                </p>
                            </div>
                        </form>

                        <p className="text-center text-sm font-medium text-muted-foreground pt-4">
                            Already on Norac? <Link href="/auth/login" className="text-primary font-black uppercase tracking-widest text-xs hover:underline ml-1">Sign In</Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
