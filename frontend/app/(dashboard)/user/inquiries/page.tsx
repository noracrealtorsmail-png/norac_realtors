"use client";

import React from "react";
import {
    MessageSquare,
    Clock,
    MapPin,
    CheckCircle2,
    ChevronRight,
    MoreVertical
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function UserInquiries() {
    const inquiries = [
        {
            id: 1,
            property: "The Glass Mansion",
            agent: "James Sterling",
            status: "In Progress",
            lastMessage: "The owner is open to a viewing this Saturday...",
            time: "1 hour ago",
            unread: true
        },
        {
            id: 2,
            property: "Sky Horizon Penthouse",
            agent: "Elena Vance",
            status: "Closed",
            lastMessage: "Thank you for your interest. The property is currently off-market.",
            time: "2 days ago",
            unread: false
        },
        {
            id: 3,
            property: "Savannah Edge",
            agent: "Marcus Chen",
            status: "In Progress",
            lastMessage: "I've sent the prospectus to your email.",
            time: "3 days ago",
            unread: false
        }
    ];

    return (
        <div className="space-y-10">
            <SectionHeader
                title="My Inquiries"
                subtitle="Track your communication with Norac agents and property owners."
            />

            <div className="space-y-4">
                {inquiries.map((inq, i) => (
                    <motion.div
                        key={inq.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`group p-6 rounded-[2rem] border transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center cursor-pointer ${inq.unread ? "bg-primary/5 border-primary/20 shadow-lg shadow-primary/5" : "bg-card/20 border-border/40 hover:bg-card/40"
                            }`}
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors ${inq.unread ? "bg-primary text-white border-primary" : "bg-background text-muted-foreground border-border/40"
                            }`}>
                            <MessageSquare size={24} />
                        </div>

                        <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-bold uppercase tracking-tight">{inq.property}</h3>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted/50 border border-border/40 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                    <CheckCircle2 size={10} className={inq.status === 'Closed' ? 'text-rose-500' : 'text-emerald-500'} />
                                    {inq.status}
                                </div>
                                {inq.unread && <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[8px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20">NEW MESSAGE</span>}
                            </div>

                            <p className={`text-sm ${inq.unread ? "text-foreground font-semibold" : "text-muted-foreground font-medium"} line-clamp-1`}>
                                {inq.lastMessage}
                            </p>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest pt-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[7px] text-primary">A</span>
                                    Agent: {inq.agent}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} className="text-primary" />
                                    {inq.time}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 w-full md:w-auto">
                            <button className="flex-1 md:flex-none py-3 px-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                                RESUME CHAT <ChevronRight size={14} />
                            </button>
                            <button className="p-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
