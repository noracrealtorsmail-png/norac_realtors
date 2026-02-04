"use client";

import React from "react";
import {
    Users,
    Search,
    MessageSquare,
    Phone,
    Mail,
    MoreVertical,
    Star,
    Download
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function RealtorLeads() {
    const leads = [
        { name: "Sarah Johnson", property: "The Glass Mansion", status: "Hot", budget: "KES 180M", source: "Website", lastContact: "10 mins ago" },
        { name: "David Kimathi", property: "Azure Villas", status: "Interested", budget: "KES 140M", source: "Instagram", lastContact: "2 hours ago" },
        { name: "Amanda Lee", property: "Sky Horizon", status: "Cold", budget: "KES 40M", source: "Referral", lastContact: "1 day ago" },
        { name: "Peter Parker", property: "The Glass Mansion", status: "Viewing", budget: "KES 200M", source: "Website", lastContact: "3 hours ago" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Hot': return 'bg-rose-500 text-white';
            case 'Interested': return 'bg-amber-500 text-white';
            case 'Viewing': return 'bg-emerald-500 text-white';
            default: return 'bg-muted text-muted-foreground';
        }
    };

    return (
        <div className="space-y-10">
            <SectionHeader
                title="Lead Pipeline"
                subtitle="Manage and convert your property inquiries into successful sales."
                action={
                    <button className="flex items-center gap-2 px-6 py-3 bg-muted border border-border text-foreground font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-card transition-all">
                        <Download size={18} /> Export CSV
                    </button>
                }
            />

            <div className="bg-card/20 backdrop-blur-xl border border-border/40 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-96">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, budget or source..."
                            className="w-full bg-muted/40 border-none outline-none py-3 pl-12 pr-4 rounded-xl text-sm"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Sort by:</span>
                        <select className="bg-muted px-4 py-2 rounded-xl text-xs font-bold border-none outline-none">
                            <option>Newest Lead</option>
                            <option>Highest Budget</option>
                            <option>Status</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/40 bg-muted/20">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Prospect</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Interest</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Budget</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border-b border-border/20 hover:bg-primary/5 transition-colors cursor-pointer group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center font-black text-primary border border-primary/20">
                                                {lead.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground group-hover:text-primary transition-colors">{lead.name}</div>
                                                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Via {lead.source} • {lead.lastContact}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-medium">{lead.property}</td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 rounded-lg bg-muted text-xs font-bold">{lead.budget}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] ${getStatusColor(lead.status)}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 rounded-lg hover:bg-primary hover:text-white transition-all text-muted-foreground"><MessageSquare size={16} /></button>
                                            <button className="p-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all text-muted-foreground"><Phone size={16} /></button>
                                            <button className="p-2 rounded-lg hover:bg-muted font-bold text-muted-foreground"><MoreVertical size={16} /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
