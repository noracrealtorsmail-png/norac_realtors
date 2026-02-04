"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Home, TrendingUp, Shield } from "lucide-react";

const VisionSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

    // Parallax transforms - more dramatic movement
    const gridY = useTransform(smoothProgress, [0, 1], [-100, 100]);
    const shard1Y = useTransform(smoothProgress, [0, 1], [-20, -120]);
    const shard2Y = useTransform(smoothProgress, [0, 1], [20, -80]);
    const lineHeight = useTransform(smoothProgress, [0.05, 0.95], ["0%", "100%"]);
    const lineOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    const features = [
        {
            title: "LUXURY ARCHITECTURE",
            id: "01",
            description: "Curating homes that are masterpieces of modern design and unparalleled comfort.",
            icon: <Home className="w-8 h-8 text-blue-400" />
        },
        {
            title: "MARKET INSIGHT",
            id: "02",
            description: "Leveraging data and deep local expertise to identify high-yield investment opportunities.",
            icon: <TrendingUp className="w-8 h-8 text-purple-400" />
        },
        {
            title: "CLIENT INTEGRITY",
            id: "03",
            description: "Transparent, secure, and professional property transactions built on absolute trust.",
            icon: <Shield className="w-8 h-8 text-cyan-400" />
        }
    ];

    return (
        <div ref={sectionRef} className="relative w-full min-h-[100vh] bg-background overflow-hidden py-10 mt-0">
            {/* --- BACKGROUND ELEMENTS --- */}

            {/* Moving Grid Floor (Parallax) */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    y: gridY,
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            ></motion.div>

            {/* Floating Geometric Shards (Background) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Large Purple Shard */}
                    <motion.path
                        d="M-10 20 L40 10 L30 50 L-10 60 Z"
                        fill="url(#shardGrad1)"
                        className="opacity-10"
                        style={{ y: shard1Y }}
                    />
                    {/* Blue Shard Right */}
                    <motion.path
                        d="M80 40 L110 30 L110 80 L70 90 Z"
                        fill="url(#shardGrad2)"
                        className="opacity-10"
                        style={{ y: shard2Y }}
                    />
                    <defs>
                        <linearGradient id="shardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="shardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* --- MAIN CONTENT CONTAINER --- */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-6 relative"
                >
                    <div className="absolute -inset-20 bg-primary/20 blur-[120px] rounded-full"></div>
                    <span className="text-primary font-bold tracking-[0.5em] uppercase text-sm mb-6 block drop-shadow-sm">Perspective</span>
                    <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-[var(--vision-gradient-text)] relative z-10 tracking-tight leading-[1.1]">
                        THE NORAC REALTORS <br /> VISION
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-primary/40 mx-auto mt-8 rounded-full shadow-lg shadow-primary/20"></div>
                </motion.div>

                {/* --- SCROLL TIMELINE & CARDS --- */}
                <div className="relative w-full flex flex-col items-center">

                    {/* Central Glowing Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-border/20 -translate-x-1/2 overflow-hidden rounded-full">
                        <motion.div
                            className="w-full bg-[var(--vision-line-gradient)] shadow-[0_0_20px_rgba(139,107,194,1)]"
                            style={{ height: lineHeight, opacity: lineOpacity }}
                        ></motion.div>
                    </div>

                    {features.map((item, index) => (
                        <FeatureCard key={index} item={item} index={index} />
                    ))}

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8"
                >
                    <button className="relative px-8 py-3 rounded-full overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white opacity-10 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white font-bold tracking-wider">EXPLORE PROGRAMS</span>
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

const FeatureCard = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`
                group relative w-full md:w-[45%] mb-8 flex items-center pl-16 md:pl-0
                ${index % 2 === 0 ? 'md:mr-auto md:pr-16 md:flex-row' : 'md:ml-auto md:pl-16 md:flex-row-reverse'}
            `}
        >
            {/* Connector Dot */}
            <motion.div
                initial={{ scale: 0, backgroundColor: "var(--muted)" }}
                whileInView={{ scale: 1, backgroundColor: "var(--primary)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className={`
                absolute top-1/2 w-4 h-4 rounded-full border-2 border-background z-20 shadow-[0_0_10px_currentColor]
                left-[24px]
                ${index % 2 === 0 ? 'md:left-auto md:right-[-42px]' : 'md:left-[-42px]'}
            `}></motion.div>

            {/* Content Card */}
            <div className="
                relative w-full p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-md
                hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_0_30px_rgba(139,107,194,0.2)]
                transition-all duration-300 group-hover:-translate-y-2
            ">
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg"></div>

                <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-xs text-blue-400 border border-blue-400/30 px-2 py-1 rounded">
                        {item.id}
                    </span>
                    <div className="p-2 bg-secondary rounded-lg text-foreground">
                        {item.icon}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-colors">
                    {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed font-light">
                    {item.description}
                </p>
            </div>

        </motion.div>
    )
}

export default VisionSection;
