"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: {
        value: string;
        isPositive: boolean;
    };
    color?: string;
}

export function StatCard({ title, value, icon: Icon, trend, color = "bg-primary" }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/40 shadow-xl overflow-hidden relative group"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 ${color}/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500`} />

            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl ${color}/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-primary" />
                </div>
                {trend && (
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${trend.isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                        {trend.isPositive ? '+' : ''}{trend.value}
                    </div>
                )}
            </div>

            <div className="space-y-1">
                <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{title}</h3>
                <p className="text-3xl font-black text-foreground">{value}</p>
            </div>
        </motion.div>
    );
}

export function SectionHeader({ title, subtitle, action }: { title: string, subtitle?: string, action?: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
                <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">{title}</h2>
                {subtitle && <p className="text-muted-foreground font-medium">{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}
