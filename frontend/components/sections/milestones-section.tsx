"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const MilestonesSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const leaders = [
        {
            name: "James Sterling",
            role: "Founder & CEO",
            description: "With over 25 years in high-end real estate, James leads Norac with a philosophy of client-centric luxury and investment security.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHX9ulp2-b1HkT57ME1i6zJdzVhfE459L9P0auNxdp4IapJzkb_aBQx8sKHlVDbA9PakIeaAnA2hGrQqfeMpY7GHz90uVTReC3wMnVeAfaTMPMqpdrkM9DsPsFQ4PFWsccSPxrc4zAKSx1gWTmtD4Gjm_mRh9nMMK33Mqg1YPL75TNbLN_JjEI0DotflH57VaZ6WRaSCsCHPM7LN9h_VJyM0VFwfNVM9kejA53CzMUmEmI5PEZ4weV4MoUd3ectiTpPc7pz0-hFY"
        },
        {
            name: "Elena Vance",
            role: "Head of Property Design",
            description: "Elena curates our luxury portfolio, ensuring every listing meets our stringent standards for habitable art and architectural significance.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSuvbYr3Ufl26VXH0ruuDDr0loER981JyvNkQ4_y-FTBZhvKvhOB6bLNKMB9loUlWfNh5S7XTMCXxTrDwm9IK3IJMm-HH3uLaNLjjzThEWd2OAQBgjZYPEH0Xo2qB_IO_4-7gnB2R5J_v2Cj4rPC6pSVAM0QUPoYBbnKH8CMJdoXpql7FcAmttdHUZi4j_JYzkP55tAqv87YbcxbJqN6mUSMgAU1hxw7C64qU7CGrs6TaGnpKZKQcmEsOAr22t04O7lpK6A743BnI"
        },
        {
            name: "Marcus Chen",
            role: "Director of International Markets",
            description: "Marcus connects global investors with prime Kenyan opportunities, facilitating seamless cross-border property acquisitions.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkOjLKK0NdaOteJBjQth1J7K7y6oDdVXnQdcdmZ3afvRzktnvsn7ZIB2A2tTSKue1wR1bfj_7pidJvVrTcjVky6fNHu8nrUL5uzgyRU9BuXzdJGdPaH3gaNXD_T5gpOnZUlSCsdjeh0Ta3sX9isnEvjVmDjFaaoqKS8xZCMWO6nRCCz-2onrheN3miYTIohJxYos6AGKNIcR9T__Dic041MV3Cm1HeAP2hAdED0k1-42RIIUViNpq_gCcpfmLqnFVoSplW053izms"
        }
    ];

    return (
        <section ref={containerRef} className="py-12 px-6 bg-background relative overflow-hidden">
            {/* Background radial gradient */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Milestones</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">A history built on solid foundations and visionary leaps.</p>
                </motion.div>

                {/* Bento Grid History */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px] mb-8">
                    {/* Item 1: Large Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-border"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvandBc38fIfui6vF0VRjjJrvhw4U0Y-SjRQ4cMcWK9SmeOv-BGEFaJukfQbk2W7ersz6oZ4kCq8zn7QleVv_X85yGk1LpiWJTC3BytX4erPfWCzVXUWnKVejj_WjTUfiE96DMjCvruvejEdBs8JYBUtDlTmL3ZanIudw0YaZusBQOLIiA3e5txsmb_DG_Nb1tML-9dFUxYspfzGuDel66tDyVqP9YVYydVb7KZLMSRSSn_0LlCLDHobWB01aNG6sBAPKJmYMpQP0"
                            alt="Original Blueprints"
                            fill
                            unoptimized={true}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2 block">Our Heritage</span>
                            <h3 className="text-3xl font-bold text-white">Market Presence</h3>
                            <p className="text-gray-300 mt-2 text-sm">Founded on the principle of bridging the gap between luxury and accessibility in the property market.</p>
                        </div>
                    </motion.div>

                    {/* Item 2: Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center group hover:bg-brand-primary/20 transition-all duration-300"
                    >
                        <h3 className="text-5xl font-bold text-foreground mb-2">1,200+</h3>
                        <p className="text-muted-foreground text-sm uppercase tracking-widest">Active Listings</p>
                    </motion.div>

                    {/* Item 3: Typography Art */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 bg-card/10 border border-border rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute -right-4 -top-4 text-9xl font-bold text-foreground/5 select-none pointer-events-none">25</div>
                        <h3 className="text-2xl font-bold text-foreground relative z-10">Years of<br />Excellence</h3>
                        <p className="text-muted-foreground text-xs mt-2 relative z-10">Delivering quality consistently since the late 90s.</p>
                    </motion.div>

                    {/* Item 4: Flagship Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl border border-border"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK2u_b6IjalPPDp8GXEt4EwSWRAqmflurdgRSNX_fdRv_fGErcTIW47Q44vVc7nSbQe_wIQunnyxKAmI1-l-cGcRVATNh4VDuldi4KnWW66HrQeYTLvSTjfw7Z1tXwNcWQW2xAiLgy6SWK1svHy-aApOfUn7A5JxSdYQEitz_D1SqVsYbYxyub_A2QlHWe-U23DULH01msq1kFWlTStYp5A0i0DOfb9lBgkw63wKznJjO--M_GhRLwb8JGbF1jcJRCKcql8SPWdjk"
                            alt="The Apex Tower"
                            fill
                            unoptimized={true}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold text-white">The Apex Tower</h3>
                            <p className="text-gray-200 text-sm">Our crowning achievement in sustainable luxury.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Leadership Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">The Visionaries</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Meet the minds engineering the future of real estate.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col gap-6 group hover:border-brand-primary/50 transition-all duration-300"
                        >
                            <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-muted relative">
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    unoptimized={true}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">{leader.name}</h3>
                                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">{leader.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {leader.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;
