"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Send
} from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Marketplace",
            links: [
                { name: "Buy Property", href: "/buy" },
                { name: "Rent Property", href: "/rent" },
                { name: "Real Estate Agencies", href: "/agencies" },
                { name: "Find an Agent", href: "/agents" },
                { name: "New Developments", href: "/developments" },
            ],
        },
        {
            title: "Intelligence",
            links: [
                { name: "Neighborhood Guides", href: "/guides" },
                { name: "Mortgage Calculator", href: "/calculators/mortgage" },
                { name: "Property Resources", href: "/resources" },
                { name: "Help & FAQ", href: "/help" },
                { name: "Request Valuation", href: "/services" },
            ],
        },
        {
            title: "Organisation",
            links: [
                { name: "About Norac", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Our Services", href: "/services" },
                { name: "Contact Hub", href: "/contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
            ],
        },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", name: "Facebook" },
        { icon: Twitter, href: "#", name: "Twitter" },
        { icon: Instagram, href: "#", name: "Instagram" },
        { icon: Linkedin, href: "#", name: "LinkedIn" },
    ];

    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-3 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 relative overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
                                <img src="/assets/logo/logo-2-removebg.png" alt="Norac Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black tracking-tighter text-foreground leading-none">NORAC</span>
                                <span className="text-xs tracking-[0.4em] text-primary font-bold">REALTORS</span>
                            </div>
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Redefining luxury living and investment excellence. Delivering world-class real estate solutions across Kenya.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {footerLinks.slice(0, 3).map((section) => (
                            <div key={section.title}>
                                <h4 className="text-foreground font-bold uppercase tracking-widest text-[10px] mb-6 px-1 border-l border-primary">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors flex items-center group gap-1 text-[13px]"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-[10px] mb-6 px-1 border-l border-primary">
                            Stay Updated
                        </h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <button className="absolute right-1 top-1 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                            Join our newsletter for exclusive insights.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-2 space-y-4 pt-12 lg:pt-0">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin size={16} className="text-primary" />
                            <span className="text-[12px]">Westlands, Nairobi, Kenya</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Phone size={16} className="text-primary" />
                            <span className="text-[12px]">+254 716 400 000</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail size={16} className="text-primary" />
                            <span className="text-[12px]">info@norac.co.ke</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-sm font-medium">
                        © {currentYear} Norac Realtors. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        {footerLinks[3].links.map((link) => (
                            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
