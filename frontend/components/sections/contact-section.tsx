"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContactSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section ref={sectionRef} className="py-12 px-6 bg-background relative overflow-hidden">
            {/* Decorative background glow */}
            <motion.div
                style={{ y }}
                className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col gap-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight">
                                Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Perfect Space</span>
                            </h2>
                            <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                Connect with our local real estate experts for bespoke property solutions, viewing appointments, and market valuations.
                            </p>
                        </div>

                        {/* Glassmorphic Form */}
                        <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl relative overflow-hidden group">
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-muted-foreground">Full Name</span>
                                        <input
                                            className="bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-muted-foreground">Email Address</span>
                                        <input
                                            className="bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                                            placeholder="john@norac.co"
                                            type="email"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-muted-foreground">Inquiry Type</span>
                                    <select className="bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer appearance-none">
                                        <option className="bg-background" value="">Select Topic</option>
                                        <option className="bg-background" value="buying">Buying Property</option>
                                        <option className="bg-background" value="selling">Selling Property</option>
                                        <option className="bg-background" value="renting">Renting Property</option>
                                        <option className="bg-background" value="management">Property Management</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-muted-foreground">Message</span>
                                    <textarea
                                        className="bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your requirements..."
                                        rows={4}
                                    ></textarea>
                                </div>

                                <button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                                    Send Inquiry
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                            <a href="mailto:concierge@norac.co.ke" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                concierge@norac.co.ke
                            </a>
                            <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-foreground transition-colors">
                                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                +254 700 000 000
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Global Offices */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <div className="flex items-center justify-between pb-4 border-b border-border">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                Global Offices
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Nairobi Card */}
                            <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden group cursor-pointer border border-border hover:border-primary/50 transition-all duration-500">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsP49RVDHpORKHXpdOBNvzAZAypdEZboWlsTSn2-xmKAiMGUFt9phyYAEZqdCrKCmfHuIhcl3M2ECPDvc2rwhBJ1MEuvXg4RirZQUmqXbSPQtVJjNms8G3rWWWBoPRQhsPtw0sywluaECWj4Tc9SMnpW_qTgIsRmeJw1EfK4sD2ucq1JXOW7qjzE06aKSCowbtMGXE9neIkQFYgdUwFmoXIAIK_ak9jA1Wl5j3_QyDUR0ltEBGTO37q-XPhxnCvcFPk_w478Wenc0"
                                    alt="Nairobi Headquarters"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground mb-4 inline-block">Headquarters</span>
                                            <h3 className="text-3xl font-bold text-white mb-2">Nairobi, Kenya</h3>
                                            <p className="text-gray-200 text-sm max-w-sm">The Mirage Tower 2, Penthouse Suite.<br />Chiromo Road, Westlands.</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* London Card */}
                            <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 group hover:border-primary/50 transition-all duration-300">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">EMEA HUB</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">London</h3>
                                <p className="text-muted-foreground text-sm mb-6">One Canada Square, Canary Wharf.<br />London, E14 5AB.</p>
                                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Get Directions
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Dubai Card */}
                            <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 group hover:border-primary/50 transition-all duration-300">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">MENA REGION</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Dubai</h3>
                                <p className="text-muted-foreground text-sm mb-6">Boulevard Plaza Tower 1.<br />Downtown Dubai.</p>
                                <a href="#" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Get Directions
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
