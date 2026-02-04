"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Home, Info, Briefcase, Building, Layers, FileText, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ExternalLink, Key, LogOut, LayoutDashboard, User } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useSession, signOut } from 'next-auth/react';

const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Buy', href: '/buy', icon: Building },
    { name: 'Rent', href: '/rent', icon: Key },
    { name: 'Developments', href: '/developments', icon: Layers },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone },
];

const mobileSocials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
];

export function Nav() {
    const { data: session, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl py-4 shadow-xl border-b border-border/40' : 'bg-transparent py-8'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50 group">
                        <div className={`relative transition-all duration-700 ease-in-out ${scrolled ? 'w-10 h-10' : 'w-20 h-20'}`}>
                            <img src="/assets/logo/logo-2-removebg.png" alt="Norac Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(139,107,194,0.4)] group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-black text-foreground tracking-tighter uppercase transition-all duration-700 ${scrolled ? 'text-xl' : 'text-3xl'}`}>Norac</span>
                            {!scrolled && <span className="text-[8px] tracking-[0.4em] text-primary font-bold -mt-1 opacity-70 uppercase">REALTORS</span>}
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-[10px] font-black text-muted-foreground hover:text-foreground transition-all uppercase tracking-[0.2em] group py-2"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <div className="h-6 w-[1.5px] bg-border/40 mx-2"></div>
                        <div className="flex items-center gap-4">
                            {status === "authenticated" ? (
                                <>
                                    <Link
                                        href={session.user?.role === "ADMIN" ? "/admin" : session.user?.role === "REALTOR" ? "/realtor" : "/user"}
                                        className="flex items-center gap-2 px-6 py-3 bg-card border border-border/60 text-foreground text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-muted transition-all"
                                    >
                                        <LayoutDashboard size={14} className="text-primary" />
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="p-3 bg-secondary/10 text-rose-500 rounded-full hover:bg-rose-500 hover:text-white transition-all group"
                                        title="Logout"
                                    >
                                        <LogOut size={16} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/login"
                                        className="text-[10px] font-black text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/auth/signup"
                                        className="px-6 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                                    >
                                        Join Norac
                                    </Link>
                                </>
                            )}
                        </div>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-4 z-50">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-card/40 backdrop-blur-md border border-border/50 text-foreground transition-transform active:scale-95"
                        >
                            <div className="relative w-6 h-6">
                                <motion.span
                                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
                                    className="absolute inset-0 m-auto w-6 h-[2px] bg-foreground rounded-full"
                                />
                                <motion.span
                                    animate={{ opacity: isOpen ? 0 : 1 }}
                                    className="absolute inset-0 m-auto w-6 h-[2px] bg-foreground rounded-full"
                                />
                                <motion.span
                                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
                                    className="absolute inset-0 m-auto w-6 h-[2px] bg-foreground rounded-full"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Side Navigation (Mobile/Tablet Drawer) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/40 backdrop-blur-md z-[110]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-background border-l border-border z-[120] flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10 rounded-full" />

                            <div className="p-8 flex items-center justify-between border-b border-border/40">
                                <div className="flex items-center gap-2">
                                    <img src="/assets/logo/logo-2-removebg.png" alt="Logo" className="w-8 h-8 object-contain" />
                                    <div className="flex flex-col">
                                        <span className="font-black text-xl tracking-tighter leading-none text-foreground">NORAC</span>
                                        <span className="text-[10px] tracking-[0.3em] text-primary font-bold">REALTORS</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-border/40 transition-colors"
                                >
                                    <X size={20} className="text-foreground" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-12 px-8">
                                {/* Auth Buttons Mobile */}
                                <div className="flex flex-col gap-4 mb-10">
                                    {status === "authenticated" ? (
                                        <>
                                            <div className="p-6 rounded-3xl bg-secondary/10 border border-primary/20 flex items-center gap-4 mb-2">
                                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                                                    <User size={24} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-black text-foreground uppercase tracking-wider">{session.user?.name}</span>
                                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{session.user?.role}</span>
                                                </div>
                                            </div>
                                            <Link
                                                href={session.user?.role === "ADMIN" ? "/admin" : session.user?.role === "REALTOR" ? "/realtor" : "/user"}
                                                onClick={() => setIsOpen(false)}
                                                className="w-full py-5 bg-primary text-white text-center text-xs font-black uppercase tracking-[0.3em] rounded-[2rem] flex items-center justify-center gap-3"
                                            >
                                                <LayoutDashboard size={18} /> Access Dashboard
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    signOut();
                                                }}
                                                className="w-full py-5 bg-rose-500/10 text-rose-500 text-center text-xs font-black uppercase tracking-[0.3em] rounded-[2rem] border border-rose-500/20 flex items-center justify-center gap-3"
                                            >
                                                <LogOut size={18} /> Sign Out
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/auth/signup"
                                                onClick={() => setIsOpen(false)}
                                                className="w-full py-5 bg-primary text-white text-center text-xs font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-xl shadow-primary/20"
                                            >
                                                Create Account
                                            </Link>
                                            <Link
                                                href="/auth/login"
                                                onClick={() => setIsOpen(false)}
                                                className="w-full py-5 bg-card border border-border text-foreground text-center text-xs font-black uppercase tracking-[0.3em] rounded-[2rem]"
                                            >
                                                Sign In
                                            </Link>
                                        </>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6">Explore</p>
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-center gap-6 py-4 border-b border-border/20 transition-all"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                    <item.icon size={20} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0">Explore More</span>
                                                </div>
                                                <ChevronRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 space-y-8">
                                    <div className="p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border/40 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Concierge</p>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-foreground group/item">
                                                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover/item:border-primary transition-colors">
                                                    <Phone size={16} className="text-primary" />
                                                </div>
                                                <span className="text-sm font-bold tracking-tight">+254 716 400 000</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-foreground group/item">
                                                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover/item:border-primary transition-colors">
                                                    <Mail size={16} className="text-primary" />
                                                </div>
                                                <span className="text-sm font-bold tracking-tight">info@norac.co.ke</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Connect</p>
                                        <div className="flex items-center gap-4">
                                            {mobileSocials.map((social, i) => (
                                                <Link
                                                    key={i}
                                                    href={social.href}
                                                    className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center bg-card/30 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                                >
                                                    <social.icon size={20} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border-t border-border flex items-center justify-between text-muted-foreground text-[10px] font-black uppercase tracking-widest bg-card/30">
                                <span>Norac Realtors 2026</span>
                                <Link href="/contact" className="flex items-center gap-2 text-primary hover:underline">
                                    Global Inquiry <ExternalLink size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    );
}
