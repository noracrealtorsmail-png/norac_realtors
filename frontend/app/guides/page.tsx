"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MapPin, School, Landmark, Hospital, ShoppingBag, ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const guides = [
    {
        name: "Westlands",
        tagline: "The Commercial Pulse",
        image: "https://images.unsplash.com/photo-1549724114-f58c738e411b?q=80&w=800",
        desc: "A vibrant mix of corporate headquarters, luxury high-rises, and world-class nightlife.",
        amenities: ["Shopping Malls", "Business Hubs", "International Schools"],
        priceIndex: "$$$",
        stats: { listings: "1,200+", growth: "+12%" }
    },
    {
        name: "Karen",
        tagline: "Green Luxury & Heritage",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        desc: "Serene landscapes, equestrian clubs, and the city's most expansive residential estates.",
        amenities: ["Country Clubs", "Nature Trails", "Art Galleries"],
        priceIndex: "$$$$",
        stats: { listings: "450+", growth: "+8%" }
    },
    {
        name: "Kilimani",
        tagline: "Middle-Class Modernity",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        desc: "Fast-developing residential hub popular with expatriates and young professionals.",
        amenities: ["Daycares", "Boutique Cafes", "Gyms"],
        priceIndex: "$$",
        stats: { listings: "2,800+", growth: "+15%" }
    },
    {
        name: "Nyali",
        tagline: "Coastal Prestige",
        image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=800",
        desc: "Premium beachfront suburb offering white sands and modern coastal living in Mombasa.",
        amenities: ["Beaches", "Golf Courses", "Resorts"],
        priceIndex: "$$$",
        stats: { listings: "320+", growth: "+10%" }
    }
];

export default function AreaGuidesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6 max-w-3xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-xs">Locality Insights</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Neighborhood <br /><span className="text-primary italic">Guides</span></h1>
                        <p className="text-muted-foreground text-xl font-medium italic">Discover where life happens. Detailed intelligence on schools, transport, and lifestyle for Kenya's top residential areas.</p>
                    </motion.div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {guides.map((guide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col rounded-[3rem] overflow-hidden bg-card/20 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all shadow-xl"
                        >
                            <div className="relative h-[400px] overflow-hidden">
                                <Image
                                    src={guide.image}
                                    alt={guide.name}
                                    fill
                                    unoptimized={true}
                                    className="object-cover group-hover:scale-105 transition-transform duration-[4s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                <div className="absolute top-8 right-8 flex gap-2">
                                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"><Share2 size={16} /></button>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 text-white space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">{guide.tagline}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/20 text-[10px] font-black">{guide.priceIndex} Market</span>
                                    </div>
                                    <h3 className="text-5xl font-black tracking-tighter uppercase">{guide.name}</h3>
                                    <p className="text-white/60 font-medium leading-relaxed italic line-clamp-2">{guide.desc}</p>
                                </div>
                            </div>

                            <div className="p-10 space-y-8">
                                <div className="grid grid-cols-3 gap-2">
                                    {guide.amenities.map((amenity, j) => (
                                        <div key={j} className="flex flex-col items-center p-4 rounded-2xl bg-secondary/10 border border-border/40">
                                            {j === 0 && <ShoppingBag size={18} className="text-primary mb-2" />}
                                            {j === 1 && <School size={18} className="text-primary mb-2" />}
                                            {j === 2 && <Hospital size={18} className="text-primary mb-2" />}
                                            <span className="text-[9px] font-black uppercase tracking-tight text-center">{amenity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between py-6 border-y border-border/40">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Available Units</span>
                                        <span className="text-2xl font-black italic">{guide.stats.listings}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Annual Growth</span>
                                        <span className="text-2xl font-black italic text-primary">{guide.stats.growth}</span>
                                    </div>
                                </div>

                                <button className="w-full py-5 bg-foreground text-background text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3">
                                    Full Neighborhood Report <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="relative h-[500px] rounded-[4rem] overflow-hidden border border-border shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
                        alt="Map Visualization"
                        fill
                        unoptimized={true}
                        className="object-cover opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 space-y-6">
                        <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 flex items-center justify-center text-primary animate-pulse">
                            <MapPin size={40} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Interactive <span className="text-primary">Ecosystem</span> Map</h2>
                        <p className="max-w-xl text-muted-foreground font-medium italic">Explore live property distributions and amenity clusters across the country in literal real-time.</p>
                        <button className="px-10 py-5 bg-foreground text-background font-black uppercase tracking-widest text-xs rounded-full">Launch Map Explorer</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
