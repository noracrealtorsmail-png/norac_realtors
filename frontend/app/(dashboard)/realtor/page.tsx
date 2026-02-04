"use client";

import React from "react";
import {
    Building2,
    TrendingUp,
    Users,
    Wallet,
    ArrowUpRight,
    MoreVertical,
    Mail,
    Phone
} from "lucide-react";
import { StatCard, SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function RealtorDashboard() {
    const recentLeads = [
        { name: "Sarah Johnson", property: "The Glass Mansion", status: "Hot Lead", time: "10 mins ago" },
        { name: "David Kimathi", property: "Azure Villas", status: "Viewing Scheduled", time: "2 hours ago" },
        { name: "Amanda Lee", property: "Sky Horizon", status: "Interested", time: "1 day ago" },
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="Realtor Performance"
                subtitle="Manage your listings and track your conversion funnel."
                action={
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-card border border-border text-foreground font-bold rounded-2xl hover:bg-muted transition-all">Reports</button>
                        <button className="px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">Add Listing</button>
                    </div>
                }
            />

            {/* Realtor Primary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Inventory" value="KES 4.2B" icon={Wallet} trend={{ value: "12%", isPositive: true }} color="bg-blue-500" />
                <StatCard title="Active Listings" value="28" icon={Building2} trend={{ value: "+3", isPositive: true }} />
                <StatCard title="Total Leads" value="142" icon={Users} trend={{ value: "5.2%", isPositive: true }} color="bg-purple-500" />
                <StatCard title="Conversion Rate" value="8.4%" icon={TrendingUp} trend={{ value: "0.5%", isPositive: true }} color="bg-emerald-500" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                {/* Performance Graph Mockup */}
                <div className="xl:col-span-8 p-8 rounded-[2rem] bg-card/20 border border-border/40 min-h-[400px]">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Listing Performance</h3>
                        <select className="bg-transparent border-none text-muted-foreground font-bold text-xs uppercase tracking-widest outline-none cursor-pointer">
                            <option>Last 30 Days</option>
                            <option>Last 6 Months</option>
                        </select>
                    </div>

                    <div className="h-64 flex items-end gap-3 md:gap-6 px-2">
                        {[60, 40, 80, 55, 95, 70, 85, 45, 100, 75, 60, 90].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                <div className="relative w-full h-full flex flex-col justify-end">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${height}%` }}
                                        transition={{ duration: 1, delay: i * 0.05, ease: "circOut" }}
                                        className={`w-full rounded-t-lg bg-gradient-to-t ${i % 2 === 0 ? "from-primary to-purple-500" : "from-secondary/40 to-primary/40"} group-hover:from-primary transition-all relative cursor-pointer`}
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            {height}%
                                        </div>
                                    </motion.div>
                                </div>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Leads */}
                <div className="xl:col-span-4 p-8 rounded-[2rem] bg-card/20 border border-border/40">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Fresh Leads</h3>
                        <MoreVertical size={20} className="text-muted-foreground" />
                    </div>

                    <div className="space-y-6">
                        {recentLeads.map((lead, i) => (
                            <div key={i} className="flex flex-col gap-3 p-4 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors border border-transparent hover:border-border cursor-pointer group">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{lead.name}</h4>
                                    <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/10 rounded-full">{lead.status}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">Property: {lead.property}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex gap-2">
                                        <div className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary"><Mail size={14} /></div>
                                        <div className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary"><Phone size={14} /></div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground font-medium">{lead.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 mt-8 border border-dashed border-border rounded-xl text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary transition-all">
                        GO TO LEAD CENTER
                    </button>
                </div>
            </div>
        </div>
    );
}
