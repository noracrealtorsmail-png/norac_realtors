"use client";

import React from "react";
import {
    Heart,
    MessageSquare,
    Calendar,
    Search,
    ArrowRight,
    Home,
    Star
} from "lucide-react";
import { StatCard, SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

import { useSession } from "next-auth/react";

export default function UserDashboard() {
    const { data: session } = useSession();
    const userName = session?.user?.name || "Guest";

    const recentActivities = [
        { id: 1, type: "saved", title: "Sky Horizon Penthouse", time: "2 hours ago", icon: Heart, color: "text-rose-500" },
        { id: 2, type: "inquiry", title: "The Glass Mansion Inquiry", time: "5 hours ago", icon: MessageSquare, color: "text-blue-500" },
        { id: 3, type: "tour", title: "Viewing: Savannah Edge", time: "Yesterday", icon: Calendar, color: "text-purple-500" },
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title={`Welcome Back, ${userName}`}
                subtitle="Here's what's happening with your property search."
                action={
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                        <Search size={18} />
                        Search New Properties
                    </button>
                }
            />

            {/* Overview Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Saved Properties" value="12" icon={Heart} trend={{ value: "2 new", isPositive: true }} />
                <StatCard title="Active Inquiries" value="4" icon={MessageSquare} trend={{ value: "1 update", isPositive: true }} />
                <StatCard title="Scheduled Tours" value="2" icon={Calendar} color="bg-purple-500" />
                <StatCard title="Reward Points" value="2,450" icon={Star} color="bg-amber-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Recent Activity */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Calendar size={20} className="text-primary" />
                            Recent Activity
                        </h3>
                        <button className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>

                    <div className="space-y-4">
                        {recentActivities.map((act) => (
                            <motion.div
                                key={act.id}
                                whileHover={{ x: 5 }}
                                className="p-5 rounded-2xl bg-card/20 border border-border/40 flex items-center gap-4 group cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border/40 group-hover:border-primary transition-colors`}>
                                    <act.icon size={20} className={act.color} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{act.title}</h4>
                                    <p className="text-xs text-muted-foreground">{act.time}</p>
                                </div>
                                <ArrowRight size={18} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recommended For You */}
                <div className="lg:col-span-5 space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Home size={20} className="text-primary" />
                        Recommended For You
                    </h3>

                    <div className="p-1 rounded-3xl bg-gradient-to-tr from-primary/20 to-purple-500/20 group cursor-pointer overflow-hidden">
                        <div className="bg-background rounded-[22px] overflow-hidden">
                            <div className="h-48 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Property"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-bold text-primary">BEST MATCH</div>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-xl font-bold">Azure Marina Villa</h4>
                                    <span className="text-primary font-black">KES 145M</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">Based on your recent search for beachfront properties in Mombasa.</p>
                                <button className="w-full py-3 bg-muted group-hover:bg-primary group-hover:text-white transition-colors rounded-xl text-sm font-bold">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
