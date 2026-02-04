"use client";

import React, { useState, useEffect } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Calculator, DollarSign, Percent, Calendar, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MortgageCalculator() {
    const [price, setPrice] = useState(25000000);
    const [downPayment, setDownPayment] = useState(5000000);
    const [interestRate, setInterestRate] = useState(13);
    const [years, setYears] = useState(20);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        const principal = price - downPayment;
        const r = interestRate / 100 / 12;
        const n = years * 12;

        if (r === 0) {
            setMonthlyPayment(principal / n);
        } else {
            const payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setMonthlyPayment(payment);
        }
    }, [price, downPayment, interestRate, years]);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Mortgage <br /><span className="text-primary">Intelligence</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Calculate your investment potential with our precision financial tools.</p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Input Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 p-10 rounded-[3rem] bg-card/20 backdrop-blur-xl border border-border/40 shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Calculator size={24} />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight">Parameters</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Property Price (KES)</label>
                                    <span className="text-sm font-black text-primary">{price.toLocaleString()}</span>
                                </div>
                                <div className="relative group">
                                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full bg-background/50 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="1000000"
                                    max="500000000"
                                    step="1000000"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full accent-primary h-1 bg-border/40 rounded-full appearance-none mt-4"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Down Payment (KES)</label>
                                    <span className="text-sm font-black text-primary">{downPayment.toLocaleString()}</span>
                                </div>
                                <div className="relative group">
                                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="number"
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="w-full bg-background/50 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Interest Rate (%)</label>
                                        <span className="text-sm font-black text-primary">{interestRate}%</span>
                                    </div>
                                    <div className="relative group">
                                        <Percent size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(Number(e.target.value))}
                                            className="w-full bg-background/50 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Loan Term (Years)</label>
                                        <span className="text-sm font-black text-primary">{years} Years</span>
                                    </div>
                                    <div className="relative group">
                                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                        <input
                                            type="number"
                                            value={years}
                                            onChange={(e) => setYears(Number(e.target.value))}
                                            className="w-full bg-background/50 border border-border/60 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-bold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Result Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3.5rem] bg-foreground text-background shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none" />

                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Estimated Payment</p>
                            <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
                                <span className="text-2xl align-top mr-2">KES</span>
                                {Math.round(monthlyPayment).toLocaleString()}
                            </h3>
                            <p className="text-xl opacity-60 italic font-medium">Per month for {years} years</p>

                            <div className="mt-12 pt-12 border-t border-white/10 space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Total Principal</span>
                                    <span className="text-lg font-black italic">KES {(price - downPayment).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Total Reimbursement</span>
                                    <span className="text-lg font-black italic">KES {Math.round(monthlyPayment * years * 12).toLocaleString()}</span>
                                </div>
                            </div>

                            <button className="w-full mt-12 py-6 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-3xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-4">
                                Pre-Qualify Now <ArrowRight size={18} />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 flex items-center gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-foreground">
                                <Briefcase size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black uppercase tracking-tight">Need expert advice?</h4>
                                <p className="text-sm text-muted-foreground font-medium">Speak with our certified financial consultants for localized mortgage rates in Kenya.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="p-10 rounded-[2.5rem] bg-muted/30 border border-border/40">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Financial Disclaimer</p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">The calculations provided by the Norac Realtors Mortgage Calculator are estimations for informational purposes only and do not constitute a financial commitment or offer from any lending institution. Actual interest rates and loan terms may vary based on creditworthiness, government regulations in Kenya (CBK), and individual lender policies. Please consult with a qualified financial advisor before making any investment decisions.</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
