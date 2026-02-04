"use client";

import React from "react";
import {
    Building2,
    Search,
    Plus,
    Filter,
    Eye,
    Edit3,
    Trash2,
    TrendingUp,
    MapPin
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RealtorListings() {
    const listings = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
            title: "The Glass Mansion",
            price: "185M",
            location: "Muthaiga",
            status: "Published",
            views: "1,240",
            leads: "42"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
            title: "Sky Horizon Penthouse",
            price: "45M",
            location: "Kileleshwa",
            status: "Pending",
            views: "320",
            leads: "12"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200",
            title: "Savannah Edge",
            price: "65M",
            location: "Runda",
            status: "Sold",
            views: "2,800",
            leads: "115"
        }
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="My Inventory"
                subtitle="Create, edit and optimize your property listings for maximum conversion."
                action={
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                        <Plus size={18} /> Add New Listing
                    </button>
                }
            />

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 p-4 rounded-3xl bg-card/20 border border-border/40 backdrop-blur-md">
                <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-muted/40 rounded-2xl">
                    <Search size={18} className="text-muted-foreground" />
                    <input type="text" placeholder="Search by name, location or ID..." className="bg-transparent border-none outline-none text-sm w-full" />
                </div>
                <div className="flex gap-2">
                    <button className="px-5 py-2 rounded-2xl border border-border/40 flex items-center gap-2 text-xs font-bold hover:bg-muted transition-colors">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="px-5 py-2 rounded-2xl border border-border/40 flex items-center gap-2 text-xs font-bold hover:bg-muted transition-colors">
                        Sort: Newest
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {listings.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-card/20 border border-border/40 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-xl hover:border-primary/20 transition-all duration-500"
                    >
                        <div className="w-full lg:w-48 h-48 lg:h-auto relative overflow-hidden flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                unoptimized={true}
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20 select-none ${item.status === 'Published' ? 'bg-emerald-500/80 text-white' :
                                    item.status === 'Pending' ? 'bg-amber-500/80 text-white' : 'bg-rose-500/80 text-white'
                                }`}>
                                {item.status}
                            </div>
                        </div>

                        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div className="md:col-span-4 space-y-1">
                                <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors uppercase">{item.title}</h3>
                                <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                                    <MapPin size={12} className="text-primary" />
                                    {item.location}, Nairobi
                                </div>
                            </div>

                            <div className="md:col-span-3">
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Price Guide</span>
                                <span className="text-xl font-black text-foreground">KES {item.price}</span>
                            </div>

                            <div className="md:col-span-3 flex gap-8">
                                <div>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Views</span>
                                    <div className="flex items-center gap-2">
                                        <Eye size={16} className="text-primary" />
                                        <span className="font-bold">{item.views}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Leads</span>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} className="text-emerald-500" />
                                        <span className="font-bold">{item.leads}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 flex justify-end gap-3 font-sans">
                                <button className="p-3 rounded-2xl bg-muted hover:bg-primary hover:text-white transition-all border border-border/40 group/btn">
                                    <Edit3 size={18} />
                                </button>
                                <button className="p-3 rounded-2xl bg-muted hover:bg-rose-500 hover:text-white transition-all border border-border/40">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
