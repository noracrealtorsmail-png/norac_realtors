"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Search, MapPin, Key, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const rentals = [
    {
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
        title: "Empire Executive Suite",
        price: "KES 250,000 /mo",
        location: "Westlands, Nairobi",
        tag: "Commercial",
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
        title: "Skyline Studio",
        price: "KES 85,000 /mo",
        location: "Kilimani, Nairobi",
        tag: "Residential",
    },
    {
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200",
        title: "Leafy Suburb Townhouse",
        price: "KES 350,000 /mo",
        location: "Karen, Nairobi",
        tag: "Residential",
    }
];

export default function RentPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Search Header */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Find Your <span className="text-primary">Space</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto">Premium rentals for lifestyle, business, and everything in between.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto p-2 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 shadow-2xl flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <MapPin size={20} className="text-primary" />
                            <input type="text" placeholder="Preferred location..." className="bg-transparent border-none outline-none w-full font-bold" />
                        </div>
                        <div className="h-px md:h-12 w-full md:w-px bg-border/40" />
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Key size={20} className="text-primary" />
                            <select className="bg-transparent border-none outline-none w-full font-bold">
                                <option>Rent Duration</option>
                                <option>Short Term</option>
                                <option>Long Term</option>
                            </select>
                        </div>
                        <button className="md:px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-3xl hover:shadow-lg hover:shadow-primary/20 transition-all">Find Space</button>
                    </motion.div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-black tracking-tight uppercase border-l-4 border-primary pl-4">Prime Rentals</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rentals.map((prop, i) => (
                        <Link key={i} href="/buy/1" className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group bg-card/20 border border-border/40 rounded-[2.5rem] overflow-hidden hover:bg-card/40 transition-colors"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={prop.image}
                                        alt={prop.title}
                                        fill
                                        unoptimized={true}
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="p-8 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">{prop.tag}</span>
                                        <div className="flex items-center gap-1 text-muted-foreground text-xs font-bold uppercase"><MapPin size={12} /> {prop.location.split(',')[0]}</div>
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">{prop.title}</h3>
                                    <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-4">
                                        <p className="text-xl font-black text-foreground">{prop.price}</p>
                                        <button className="p-3 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"><ArrowRight size={18} /></button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
