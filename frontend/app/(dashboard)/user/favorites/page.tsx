"use client";

import React from "react";
import {
    Heart,
    MapPin,
    Bed,
    Bath,
    Square,
    Trash2,
    ExternalLink
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UserFavorites() {
    const favoriteProperties = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
            title: "The Glass Mansion",
            price: "KES 185,000,000",
            location: "Muthaiga, Nairobi",
            beds: 6,
            baths: 7,
            sqft: "12,000"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
            title: "Sky Horizon Penthouse",
            price: "KES 45,000,000",
            location: "Kileleshwa, Nairobi",
            beds: 4,
            baths: 4,
            sqft: "4,500"
        }
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="Saved Properties"
                subtitle="Review and manage your curated selection of luxury listings."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-foreground">
                {favoriteProperties.map((prop, i) => (
                    <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-card/20 backdrop-blur-xl border border-border/40 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-xl hover:shadow-primary/5 transition-all duration-500"
                    >
                        <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                            <Image
                                src={prop.image}
                                alt={prop.title}
                                fill
                                unoptimized={true}
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-4 left-4">
                                <button className="p-2 bg-background/80 backdrop-blur-md rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors border border-border/40">
                                    <Heart size={18} fill="currentColor" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 p-8 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{prop.title}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground mt-1 font-medium">
                                            <MapPin size={14} className="text-primary" />
                                            <span className="text-sm">{prop.location}</span>
                                        </div>
                                    </div>
                                    <span className="text-lg font-black text-primary">{prop.price.split(' ')[1]}M</span>
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/40">
                                    <div className="flex flex-col items-center gap-1">
                                        <Bed size={16} className="text-muted-foreground" />
                                        <span className="text-xs font-bold">{prop.beds} Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 border-x border-border/40">
                                        <Bath size={16} className="text-muted-foreground" />
                                        <span className="text-xs font-bold">{prop.baths} Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Square size={16} className="text-muted-foreground" />
                                        <span className="text-xs font-bold">{prop.sqft} ft²</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button className="flex-1 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                    View <ExternalLink size={14} />
                                </button>
                                <button className="p-3 bg-muted hover:bg-rose-500/10 hover:text-rose-500 rounded-xl transition-all border border-border/40">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {favoriteProperties.length === 0 && (
                <div className="py-20 text-center space-y-4">
                    <Heart size={64} className="mx-auto text-muted/20" />
                    <p className="text-muted-foreground font-medium">You haven't saved any properties yet.</p>
                    <button className="text-primary font-bold">Start Browsing</button>
                </div>
            )}
        </div>
    );
}
