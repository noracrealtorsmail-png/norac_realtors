"use client"

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollParallaxSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1f] py-20">
            {/* Parallax Background Elements */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]" />
            </motion.div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div style={{ y: yText, opacity }} className="text-center max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-brand-primary">
                            Redefining
                        </span>
                        <br />
                        Excellence
                    </h2>
                    <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        From advanced civil engineering to luxury real estate, we deliver solutions that stand the test of time.
                    </p>

                    <div className="mt-12 flex justify-center gap-6">
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white transition-all duration-300 hover:scale-105">
                            Explore Projects
                        </button>
                        <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(139,107,194,0.5)]">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
