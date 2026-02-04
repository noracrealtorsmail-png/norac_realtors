"use client";

import React from "react";
import {
    Settings,
    Globe,
    Shield,
    Database,
    Mail,
    Palette,
    Bell,
    Save
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function AdminSettings() {
    const sections = [
        { title: "General", icon: Globe, desc: "Global site configuration and languages." },
        { title: "Security", icon: Shield, desc: "2FA, API keys and access control." },
        { title: "Design", icon: Palette, desc: "Theme tokens and brand assets." },
        { title: "Database", icon: Database, desc: "Storage, backups and indexing." },
        { title: "Notifications", icon: Bell, desc: "Email and push alert templates." },
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="Admin Settings"
                subtitle="Global platform controls and system-wide configurations."
                action={
                    <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                        <Save size={18} /> Save All Changes
                    </button>
                }
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Navigation */}
                <div className="lg:col-span-4 space-y-3">
                    {sections.map((s, i) => (
                        <div key={i} className={`p-6 rounded-[2rem] border transition-all cursor-pointer group ${i === 0 ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" : "bg-card/20 border-border/40 hover:bg-card/40"
                            }`}>
                            <div className="flex items-center gap-4 mb-2">
                                <s.icon size={24} className={i === 0 ? "text-white" : "text-primary"} />
                                <h3 className="text-xl font-black uppercase tracking-tight">{s.title}</h3>
                            </div>
                            <p className={`text-xs ${i === 0 ? "text-white/80" : "text-muted-foreground"} font-medium`}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Settings Panel */}
                <div className="lg:col-span-8 p-10 rounded-[2.5rem] bg-card/20 backdrop-blur-xl border border-border/40 space-y-10">
                    <div className="space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">System Overrides</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Platform Name</label>
                                <input type="text" defaultValue="Norac Realtors" className="w-full bg-muted/40 border border-border/40 rounded-xl px-5 py-4 font-bold text-foreground focus:ring-2 focus:ring-primary outline-none" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Support Email</label>
                                <input type="text" defaultValue="internal@norac.com" className="w-full bg-muted/40 border border-border/40 rounded-xl px-5 py-4 font-bold text-foreground focus:ring-2 focus:ring-primary outline-none" />
                            </div>
                        </div>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-center justify-between p-6 rounded-2xl bg-muted/20 border border-border/20">
                                <div className="space-y-1">
                                    <span className="font-bold">Maintenance Mode</span>
                                    <p className="text-xs text-muted-foreground">Block all non-admin access to the platform.</p>
                                </div>
                                <div className="w-12 h-6 bg-muted rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-muted-foreground rounded-full" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-6 rounded-2xl bg-primary/5 border border-primary/20">
                                <div className="space-y-1">
                                    <span className="font-bold">Automatic Backups</span>
                                    <p className="text-xs text-muted-foreground">Daily snapshot of the core property database.</p>
                                </div>
                                <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-border/40 space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary">Region Settings</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-muted/40 text-center border border-border/40">
                                <span className="block text-xl">🇰🇪</span>
                                <span className="text-[10px] font-black uppercase mt-1 block">Kenya (Main)</span>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/20 text-center border border-border/10 opacity-50 grayscale">
                                <span className="block text-xl">🇺🇬</span>
                                <span className="text-[10px] font-black uppercase mt-1 block">Uganda</span>
                            </div>
                            <div className="p-4 rounded-xl bg-muted/20 text-center border border-border/10 opacity-50 grayscale">
                                <span className="block text-xl">🇹🇿</span>
                                <span className="text-[10px] font-black uppercase mt-1 block">Tanzania</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
