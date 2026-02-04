"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight, MapPin } from "lucide-react";
import React, { useState, useRef, useCallback } from "react";

const listings = [
    {
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200", // Luxury Villa
        title: "The Glass Mansion",
        price: "KES 185,000,000",
        location: "Muthaiga, Nairobi",
        beds: 6,
        baths: 7,
        sqft: "12,000 sqft",
        tag: "For Sale",
        color: "from-secondary/20 to-accent/20"
    },
    {
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200", // Modern Apartment
        title: "Sky Horizon Penthouse",
        price: "KES 45,000,000",
        location: "Kileleshwa, Nairobi",
        beds: 4,
        baths: 4,
        sqft: "4,500 sqft",
        tag: "To Let",
        color: "from-muted/20 to-secondary/20"
    },
    {
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200", // Modern Townhouse
        title: "Savannah Edge Townhouse",
        price: "KES 65,000,000",
        location: "Runda, Nairobi",
        beds: 4,
        baths: 5,
        sqft: "5,800 sqft",
        tag: "For Sale",
        color: "from-accent/20 to-primary/10"
    }
];

// Triple the items for seamless loop: [C, A, B, C, A, B, C, A]
// We animate from -33.33% (second set start) to 0% (first set start)

export function FeaturedListingsSection() {
    const [isPaused, setIsPaused] = useState(false);
    const [fetchedListings, setFetchedListings] = useState<any[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await fetch('/api/home/featured');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setFetchedListings(data);
                }
            } catch (err) {
                console.error("Failed to fetch featured listings:", err);
            }
        };
        fetchListings();
    }, []);

    const listingsToDisplay = fetchedListings.length > 0 ? fetchedListings : listings;
    const extendedListings = [...listingsToDisplay, ...listingsToDisplay, ...listingsToDisplay];

    const resumeAnimation = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 2000); // 2 second delay before resuming
    }, []);

    const pauseAnimation = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsPaused(true);
    }, []);

    const handleInteraction = () => {
        pauseAnimation();
        resumeAnimation();
    };

    return (
        <section className="py-12 relative overflow-hidden bg-background">
            {/* Background decorative elements for light mode */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -z-10 animate-pulse" />

            <div className="container mx-auto px-6 relative z-10 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Exclusive Opportunities</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_auto] animate-shimmer">
                            Featured Properties
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Discover our curated selection of premium real estate opportunities in Kenya, from luxury villas to commercial hubs.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 rounded-full transition-all duration-500 flex items-center gap-3 group font-bold shadow-lg shadow-primary/5 hover:shadow-primary/20">
                        View All Listings <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>

            {/* Endless Looping Marquee */}
            <div
                className="relative w-full overflow-hidden py-4"
                onMouseEnter={pauseAnimation}
                onMouseLeave={resumeAnimation}
                onClick={handleInteraction}
                onTouchStart={handleInteraction}
            >
                <motion.div
                    className="flex gap-10 px-4"
                    animate={{
                        x: isPaused ? undefined : ["-33.3333%", "0%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    style={{
                        width: "fit-content",
                    }}
                >
                    {extendedListings.map((listing, index) => (
                        <div
                            key={index}
                            className="w-[300px] sm:w-[380px] md:w-[480px] flex-shrink-0 group rounded-3xl overflow-hidden bg-card/60 backdrop-blur-xl border border-border/40 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1 sm:px-4 sm:py-1.5 bg-background/80 backdrop-blur-md text-foreground text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] rounded-full border border-border/50 shadow-sm">
                                    {listing.tag}
                                </div>
                                <Image
                                    src={listing.image}
                                    alt={listing.title}
                                    fill
                                    unoptimized={true}
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 480px"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${listing.color} opacity-40 group-hover:opacity-20 transition-opacity`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 right-8">
                                    <p className="text-2xl sm:text-3xl font-black text-foreground">{listing.price}</p>
                                </div>
                            </div>

                            <div className="p-6 sm:p-10 space-y-4 sm:space-y-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {listing.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin size={16} className="text-primary/60" />
                                        <span className="text-sm font-medium">{listing.location}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-border/30">
                                    {listing.beds > 0 ? (
                                        <div className="flex flex-col gap-1 items-start">
                                            <div className="flex items-center gap-2">
                                                <Bed size={18} className="text-primary" />
                                                <span className="text-lg font-bold text-foreground">{listing.beds}</span>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Beds</span>
                                        </div>
                                    ) : <div />}

                                    {listing.baths > 0 ? (
                                        <div className="flex flex-col gap-1 items-start border-l border-border/30 pl-4">
                                            <div className="flex items-center gap-2">
                                                <Bath size={18} className="text-primary" />
                                                <span className="text-lg font-bold text-foreground">{listing.baths}</span>
                                            </div>
                                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Baths</span>
                                        </div>
                                    ) : <div />}

                                    <div className="flex flex-col gap-1 items-start border-l border-border/30 pl-4">
                                        <div className="flex items-center gap-2">
                                            <Square size={18} className="text-primary" />
                                            <span className="text-lg font-bold text-foreground">{listing.sqft.split(' ')[0]}</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Sq Ft</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button className="w-full py-4 rounded-2xl bg-foreground text-background font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 group/btn">
                                        Details
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Edge fading gradients */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/40 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}

