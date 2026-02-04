"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    User,
    Building2,
    Heart,
    MessageSquare,
    Settings,
    LogOut,
    Menu,
    X,
    ShieldCheck,
    TrendingUp,
    PlusCircle,
    Users,
    Bell,
    Search,
    ChevronRight
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface SidebarItem {
    title: string;
    href: string;
    icon: any;
    roles: string[];
}

const navItems: SidebarItem[] = [
    // User Items
    { title: "User Dashboard", href: "/user", icon: LayoutDashboard, roles: ["user", "realtor", "admin"] },
    { title: "My Favorites", href: "/user/favorites", icon: Heart, roles: ["user", "realtor", "admin"] },
    { title: "Inquiries", href: "/user/inquiries", icon: MessageSquare, roles: ["user", "realtor", "admin"] },

    // Realtor Items
    { title: "Realtor Panel", href: "/realtor", icon: Building2, roles: ["realtor", "admin"] },
    { title: "My Listings", href: "/realtor/listings", icon: PlusCircle, roles: ["realtor", "admin"] },
    { title: "Lead CRM", href: "/realtor/leads", icon: TrendingUp, roles: ["realtor", "admin"] },

    // Admin Items
    { title: "Admin Center", href: "/admin", icon: ShieldCheck, roles: ["admin"] },
    { title: "Manage Users", href: "/admin/users", icon: Users, roles: ["admin"] },
    { title: "Platform Settings", href: "/admin/settings", icon: Settings, roles: ["admin"] },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Mock Role for UI demonstration (User would usually get this from Auth)
    const userRole = pathname.includes("/admin") ? "admin" : pathname.includes("/realtor") ? "realtor" : "user";

    const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans">
            {/* Sidebar Desktop */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="hidden md:flex flex-col bg-card/30 backdrop-blur-xl border-r border-border/40 relative z-50 overflow-hidden"
            >
                <div className="p-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 flex-shrink-0">
                            <span className="text-primary font-black text-xl">N</span>
                        </div>
                        {isSidebarOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                                <span className="font-black text-lg tracking-tighter leading-none">NORAC</span>
                                <span className="text-[8px] tracking-[0.3em] text-primary font-bold">REALTORS</span>
                            </motion.div>
                        )}
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {filteredNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${isActive
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "text-muted-foreground hover:bg-muted"
                                        }`}
                                >
                                    <item.icon size={22} className={isActive ? "text-white" : "group-hover:text-primary transition-colors"} />
                                    {isSidebarOpen && (
                                        <span className="font-medium whitespace-nowrap">{item.title}</span>
                                    )}
                                    {isActive && isSidebarOpen && (
                                        <motion.div layoutId="activeInd" className="ml-auto">
                                            <ChevronRight size={16} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-border/40">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full flex items-center gap-4 px-4 py-3 text-muted-foreground hover:text-foreground transition-all rounded-2xl"
                    >
                        {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
                        {isSidebarOpen && <span className="font-medium">Collapse</span>}
                    </button>
                    <Link href="/">
                        <div className="flex items-center gap-4 px-4 py-3 text-destructive hover:bg-destructive/10 rounded-2xl transition-all mt-2">
                            <LogOut size={22} />
                            {isSidebarOpen && <span className="font-medium">Logout</span>}
                        </div>
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-background relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10 rounded-full" />

                {/* Top Header */}
                <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-border/40 bg-card/10 backdrop-blur-md z-40">
                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-4 bg-muted/30 border border-border/40 rounded-full px-4 py-2 w-full max-w-md">
                        <Search size={18} className="text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search listings, leads or users..."
                            className="bg-transparent border-none outline-none text-sm w-full"
                        />
                    </div>

                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="hidden sm:flex items-center gap-4 mr-4">
                            <div className="h-4 w-px bg-border/40" />
                            <div className="flex flex-col text-right">
                                <span className="text-sm font-bold leading-none">James Sterling</span>
                                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">{userRole}</span>
                            </div>
                        </div>

                        <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
                        </button>
                        <ThemeToggle />
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border border-white/10">
                                <User size={24} className="text-primary" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-10 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] md:hidden"
                    >
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="absolute inset-y-0 left-0 w-[280px] bg-card border-r border-border p-6 shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex flex-col">
                                    <span className="font-black text-2xl tracking-tighter leading-none">NORAC</span>
                                    <span className="text-[10px] tracking-[0.3em] text-primary font-bold">REALTORS</span>
                                </div>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-2">
                                {filteredNavItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                            <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"
                                                }`}>
                                                <item.icon size={22} />
                                                <span className="font-bold">{item.title}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
