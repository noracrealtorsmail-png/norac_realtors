"use client";

import React, { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import {
    MapPin,
    Bed,
    Bath,
    Square,
    CheckCircle2,
    Calendar,
    ShieldCheck,
    Share2,
    Heart,
    ArrowRight,
    Phone,
    Mail,
    MessageSquare,
    Calculator
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useParams } from "next/navigation";

export default function PropertyDetail() {
    const params = useParams();
    const [property, setProperty] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);

    React.useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`/api/listing/${params.id}`);
                const data = await res.json();
                if (res.ok) {
                    // Extract fields from DB model
                    const formatted = {
                        ...data,
                        beds: data.beds,
                        baths: data.baths,
                        sqft: data.sqft?.toLocaleString() || "N/A",
                        price: data.priceDisplay || `KES ${data.price.toLocaleString()}`,
                        images: JSON.parse(data.images),
                        features: JSON.parse(data.amenities || "[]"),
                        agent: {
                            name: data.agent?.user?.name || "Norac Agent",
                            role: "Realtor",
                            image: data.agent?.user?.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
                        }
                    };
                    setProperty(formatted);
                }
            } catch (err) {
                console.error("Error fetching property:", err);
            } finally {
                setLoading(false);
            }
        };
        if (params.id) fetchProperty();
    }, [params.id]);

    if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-primary font-black uppercase tracking-widest animate-pulse">Loading Asset...</div>;
    if (!property) return <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-black uppercase italic">Asset Not Found</h1>
        <Link href="/buy" className="px-8 py-3 bg-primary text-white font-bold rounded-full">Back to Marketplace</Link>
    </div>;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Breadcrumbs / Actions */}
            <div className="pt-32 pb-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/buy" className="hover:text-primary transition-colors">Buy</Link>
                    <span>/</span>
                    <span className="text-foreground">{property.title}</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-card/40 border border-border/40 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all"><Share2 size={14} /> Share</button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-card/40 border border-border/40 rounded-full text-[10px] font-black uppercase tracking-widest hover:text-primary transition-all"><Heart size={14} /> Favorite</button>
                </div>
            </div>

            {/* Image Gallery */}
            <section className="px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-3 relative rounded-[3rem] overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src={property.images[activeImage]}
                            alt="Main Property View"
                            fill
                            unoptimized={true}
                            className="object-cover transition-transform duration-[4s] group-hover:scale-105"
                        />
                    </motion.div>
                    <div className="flex flex-row lg:flex-col gap-6">
                        {property.images.map((img: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setActiveImage(i)}
                                className={`relative flex-1 rounded-3xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === i ? 'border-primary ring-4 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <Image src={img} alt={`View ${i}`} fill unoptimized={true} className="object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content & Sidebar */}
            <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
                            <MapPin size={12} /> {property.location}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">{property.title}</h1>
                        <div className="flex flex-wrap items-center gap-8 py-8 border-y border-border/40">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary"><Bed size={24} /></div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black">{property.beds}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Beds</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary"><Bath size={24} /></div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black">{property.baths}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Baths</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary"><Square size={24} /></div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-black">{property.sqft}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Sq Ft</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-black uppercase tracking-tight italic">Description</h2>
                        <p className="text-muted-foreground text-xl leading-relaxed font-medium italic">{property.description}</p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-black uppercase tracking-tight italic">Amenities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {property.features.map((f: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/40">
                                    <CheckCircle2 size={16} className="text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Inquiry Card */}
                    <div className="p-10 rounded-[3rem] bg-foreground text-background shadow-2xl space-y-8 sticky top-32">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Listed Price</p>
                            <h3 className="text-4xl font-black italic">{property.price}</h3>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10">
                            <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-xl">
                                <Image src={property.agent.image} alt="Agent" fill unoptimized={true} className="object-cover" />
                            </div>
                            <div>
                                <h4 className="text-lg font-black uppercase tracking-tight text-white">{property.agent.name}</h4>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{property.agent.role}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3">
                                <MessageSquare size={18} /> Schedule Viewing
                            </button>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"><Phone size={14} /> Call</button>
                                <button className="py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest"><Mail size={14} /> Email</button>
                            </div>
                        </div>

                        <Link href="/calculators/mortgage" className="flex items-center justify-between p-6 rounded-[2rem] bg-card/10 border border-white/5 hover:border-primary/40 transition-all group">
                            <div className="flex items-center gap-3 text-white">
                                <Calculator size={20} className="text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Mortgage Estimate</span>
                            </div>
                            <ArrowRight size={14} className="text-white opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </aside>
            </section>

            <Footer />
        </main>
    );
}
