"use client";

import React from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Search, Filter, MapPin, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const listings = [
    {
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
        title: "The Glass Mansion",
        price: "KES 185,000,000",
        location: "Muthaiga, Nairobi",
        tag: "Luxury Villa",
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
        title: "Sky Horizon Penthouse",
        price: "KES 45,000,000",
        location: "Kileleshwa, Nairobi",
        tag: "Penthouse",
    },
    {
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200",
        title: "Savannah Edge",
        price: "KES 65,000,000",
        location: "Runda, Nairobi",
        tag: "Townhouse",
    }
];

export default function BuyPage() {
    const [fetchedListings, setFetchedListings] = React.useState<any[]>([]);

    React.useEffect(() => {
        const fetchListings = async () => {
            try {
                // For now use a general listings API or reuse home/featured but with more
                const res = await fetch('/api/home/featured');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setFetchedListings(data);
                }
            } catch (err) {
                console.error("Failed to fetch listings:", err);
            }
        };
        fetchListings();
    }, []);

    const listingsToDisplay = fetchedListings.length > 0 ? fetchedListings : listings;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* Search Header */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Find Your <span className="text-primary">Ownership</span></h1>
                        <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto italic">Explore Kenya's most exclusive residential and commercial properties available for sale.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto p-2 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 shadow-2xl flex flex-col md:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Search size={20} className="text-primary" />
                            <input type="text" placeholder="Location, neighborhood or project..." className="bg-transparent border-none outline-none w-full font-bold" />
                        </div>
                        <div className="h-px md:h-12 w-full md:w-px bg-border/40" />
                        <div className="flex-1 flex items-center gap-4 px-6 py-4">
                            <Building2 size={20} className="text-primary" />
                            <select className="bg-transparent border-none outline-none w-full font-bold">
                                <option>Property Type</option>
                                <option>Villa</option>
                                <option>Apartment</option>
                            </select>
                        </div>
                        <button className="md:px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-3xl hover:shadow-lg hover:shadow-primary/20 transition-all">Search</button>
                    </motion.div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-black tracking-tight uppercase">Featured For Sale</h2>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all uppercase tracking-widest">
                        Price: High to Low <Filter size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {listingsToDisplay.map((prop, i) => (
                        <Link
                            key={prop.id || i}
                            href={`/buy/${prop.id || '1'}`}
                            className="group cursor-pointer block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
                                    <Image
                                        src={prop.image}
                                        alt={prop.title}
                                        fill
                                        unoptimized={true}
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute top-6 left-6 px-4 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                        {prop.tag}
                                    </div>
                                    <div className="absolute bottom-10 left-8 right-8 text-white space-y-2">
                                        <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                            <MapPin size={12} /> {prop.location}
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tight leading-none group-hover:text-primary transition-colors">{prop.title}</h3>
                                        <p className="text-xl font-bold opacity-80">{prop.price}</p>
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
