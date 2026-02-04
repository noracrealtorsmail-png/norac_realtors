"use client";

import React from "react";
import {
    Users,
    ShieldCheck,
    Database,
    Activity,
    AlertTriangle,
    ArrowUpRight,
    UserCheck,
    Globe
} from "lucide-react";
import { StatCard, SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function AdminDashboard() {
    const moderationQueue = [
        { title: "Review: Royal Palm Villa", type: "Listing", agent: "Alice N.", priority: "High" },
        { title: "Verify: John Properties", type: "Realtor", agent: "Pending", priority: "Medium" },
        { title: "Withdrawal Request: 45k", type: "Payment", agent: "Marcus C.", priority: "Low" },
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="Command Center"
                subtitle="Full visibility into the Norac Realtors ecosystem."
                action={
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold ring-1 ring-emerald-500/20 animate-pulse">
                            <Globe size={14} /> SYS_ONLINE
                        </div>
                        <button className="px-6 py-3 bg-card border border-border text-foreground font-bold rounded-2xl hover:bg-muted transition-all flex items-center gap-2">
                            <Database size={18} /> Backup
                        </button>
                    </div>
                }
            />

            {/* Admin Global Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Platform Users" value="12.4k" icon={Users} trend={{ value: "14%", isPositive: true }} color="bg-indigo-500" />
                <StatCard title="Verified Realtors" value="382" icon={UserCheck} trend={{ value: "+22", isPositive: true }} color="bg-brand-primary" />
                <StatCard title="Total Listings" value="1,840" icon={Database} trend={{ value: "5.2%", isPositive: true }} color="bg-amber-500" />
                <StatCard title="System Activity" value="99.9%" icon={Activity} trend={{ value: "Stable", isPositive: true }} color="bg-emerald-500" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                {/* Moderation Queue */}
                <div className="xl:col-span-5 p-8 rounded-[2rem] bg-card/20 border border-border/40">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold uppercase tracking-tight">Priority Tasks</h3>
                        <ShieldCheck size={20} className="text-primary" />
                    </div>

                    <div className="space-y-4">
                        {moderationQueue.map((item, i) => (
                            <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl bg-muted/20 border border-border group cursor-pointer hover:bg-muted/40 transition-all">
                                <div className="flex items-center justify-between">
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${item.priority === 'High' ? 'text-rose-500' :
                                            item.priority === 'Medium' ? 'text-amber-500' : 'text-emerald-500'
                                        }`}>
                                        {item.priority} PRIORITY
                                    </span>
                                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                                <div className="flex justify-between items-center text-xs text-muted-foreground mt-2">
                                    <span>Category: {item.type}</span>
                                    <span>Assigned to: {item.agent}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 mt-6 bg-foreground text-background font-black rounded-xl text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                        Open Full Queue
                    </button>
                </div>

                {/* System Health / Logs */}
                <div className="xl:col-span-7 space-y-8">
                    <div className="p-8 rounded-[2rem] bg-card/20 border border-border/40 flex-1">
                        <h3 className="text-xl font-bold uppercase tracking-tight mb-8">Platform Health</h3>
                        <div className="space-y-6">
                            {[
                                { label: "API Response Time", val: "42ms", health: 98 },
                                { label: "Server CPU Load", val: "12%", health: 88 },
                                { label: "Database Latency", val: "8ms", health: 95 }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-muted-foreground">{stat.label}</span>
                                        <span className="font-black text-foreground">{stat.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.health}%` }}
                                            className={`h-full bg-gradient-to-r ${stat.health > 90 ? "from-emerald-500 to-teal-400" : "from-amber-500 to-orange-400"} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-primary/10 border border-primary/20 relative overflow-hidden group cursor-pointer">
                        <div className="flex flex-col gap-2 relative z-10">
                            <AlertTriangle size={32} className="text-amber-500 mb-2 animate-bounce" />
                            <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Security Audit</h3>
                            <p className="text-muted-foreground text-sm max-w-md">3 failed login attempts blocked from HK-region in the last 15 minutes. No breaches detected.</p>
                            <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter group-hover:gap-4 transition-all">
                                Review Logs <ArrowUpRight size={14} />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-24 h-24 rounded-full border-4 border-amber-500/20 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full border-2 border-amber-500/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
