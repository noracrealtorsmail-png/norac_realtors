"use client";

import React, { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Search, HelpCircle, BookOpen, MessageSquare, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How do I verify the ownership of a listed property?",
        a: "Every listing on Norac marked with the 'Verified' badge has undergone a preliminary title search. We recommend further independent legal verification which our partner lawyers can facilitate."
    },
    {
        q: "What are the common mortgage rates for first-time buyers in Kenya?",
        a: "As of 2024, rates typically range between 12% and 14%, depending on the lender and the Kenya Mortgage Refinance Company (KMRC) eligibility. Use our Mortgage Calculator for estimates."
    },
    {
        q: "Does Norac charge a fee for searching properties?",
        a: "Searching and viewing property details on Norac is completely free for users. Fees only apply to realtors for listing and premium marketing placements."
    },
    {
        q: "How can I become a verified partner agency?",
        a: "Agencies must provide valid license documentation and proof of physical office presence. You can apply via the Agency portal in our footer."
    }
];

export default function HelpPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden bg-foreground text-background">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Help <br /><span className="text-primary">Ecosystem</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Intelligence and support for your property journey.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto p-2 rounded-[2.5rem] bg-card/10 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Search size={20} className="text-primary" />
                            <input type="text" placeholder="Search for answers (e.g. Mortgage, Verification)..." className="bg-transparent border-none outline-none w-full font-bold text-white" />
                        </div>
                        <button className="md:px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-3xl">Search Help</button>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-12 italic">Frequently Asked <span className="text-primary">Questions</span></h2>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-lg font-black uppercase tracking-tight">{faq.q}</h3>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    className="text-primary"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-6 text-muted-foreground font-medium italic leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: BookOpen, title: "Self Service", desc: "Detailed guides on property acquisitions and legal data." },
                        { icon: MessageSquare, title: "Chat Support", desc: "Talk to our specialized consultants via WhatsApp or Live Chat." },
                        { icon: HelpCircle, title: "Ticket System", desc: "Submit a formal inquiry for complex property resolutions." }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                            <p className="text-muted-foreground font-medium italic mb-8">{item.desc}</p>
                            <button className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">Launch Channel <ArrowRight size={14} /></button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
