"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const projects = [
        {
            title: "The Pinnacle Heights",
            category: "Luxury Penthouse",
            location: "Westlands, Nairobi",
            completion: "Available Now",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm9NfBUr5Es584a-8UkP3bjSfGjBRutFNRK4LdXPj9gtgpFznCyPGONMee2Lz5uMCWxnCFsa4BaHIBCilCAvGM-uGzTmWzJ8YmeoU8Ns1elNrI83ihj4hxXilaVUz0ZdniiJnhK1OAHLSYwN7pz73mf7ag2gbLMbTpYy2QiHvtTOYGybkSbF1SW7D4dIVjKShR8vCgCFUxSF7SLLVNGM1o3JAMeq3lUdOsemTc2BtrkBlXxNaCA0b3qfVmFejmoLmvg8wVAbKnxSg",
            span: "md:col-span-2"
        },
        {
            title: "Azure Marina Villas",
            category: "Beachfront Living",
            location: "Nyali, Mombasa",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwkddiTKZYRAbayAyGJX7LOWCColG_O47aI99LHnvPCh-RoivMwoo9vBtOYJZVKFBvMOu-ogQGRea7D6tOu-apwJ6xQE6mYJhoLzhP7rpbD7YmjWBCb8oxBZQWeRP6YpCu8XvH7zmR2VF8ysS22Xhra06pMN2AMvwqeb1vRnZyg7sRO6BqMclYdZ7ghMaB793ypz_JdY7XLf8f56dMJfInqOcDq5lhGjIMIRw2-KGgnBWdnp7DDZKghKNTRZ6xkHlA01VrDYaahNA",
            span: "md:row-span-2"
        },
        {
            title: "Eco-Logic Estate",
            category: "Suburban Family",
            location: "Karen • Sustainable Tech",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7BSyIn5BlWWHK1QWzhmUV3D8Wtd4oAf-lBbF9mx-wwBG79nY82H7Z2h0qk5Ir-EhQkJbpvx100U_xCDrYh6-9BUy6lDUcaRGxDV19el7XUzy2GFzqypgf2rkCq8eF15LBMO-m5ABVfrdzAhUHaI7w9TiGhTOB8rYj5NzKB_WTtQk8rZ8SeN5RRl2fLdhfaNl7q6Wp0UVN3HLwHKeiofb7H23aWxp05DtaPohfNNvGEuJBZgeyCwGMbx6hxddwMPUhMIdU8YvUJxM",
            span: ""
        },
        {
            title: "Savannah Suites",
            category: "Modern Apartments",
            location: "Kilimani • Smart Home",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9IUWRrsBpwWA39KtvgvgCT79KdHLamaPXwnTQYqrZ4tIVKXZBE91rd-A_gvCaNHftXNDA9Kn1m70NT0HzBX1h-Umpdtp3vUetoMb4AGh3WIsDA994b_a8Fm8EdFjAPdKdCnuMhQY80WMbyKmKBkvlIAfeiOIJcnlo58iTQTD6SnrqDhI17mBMdXDO1AgOEByp0eemgrhSJNM-zN4j9ShvtVXDLLn9T1Xkkt6p7zRCR7VEvKBiMu_IZSY3Tu_a3FtfdRkucpr4dwM",
            span: ""
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section ref={sectionRef} className="py-12 px-6 bg-background relative overflow-hidden">
            {/* Background Parallax Element */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-border/40 pb-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-foreground">Listings</span>
                        </h2>
                        <p className="text-muted-foreground text-lg font-light">
                            Discover our curated selection of properties designed for elevated living.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-brand-primary/90 text-white font-bold text-sm uppercase tracking-wider py-3 px-6 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                                    View Property
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                    <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-16"
                >
                    <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-border hover:border-brand-primary rounded-full transition-all duration-300">
                        <span className="text-foreground text-sm font-bold uppercase tracking-widest group-hover:text-brand-primary transition-colors">Load More Properties</span>
                        <svg className="w-5 h-5 text-foreground group-hover:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
