"use client";

import React from "react";
import {
    Users,
    Search,
    ShieldCheck,
    UserPlus,
    MoreHorizontal,
    Mail,
    MoreVertical,
    CheckCircle,
    XCircle,
    Shield
} from "lucide-react";
import { SectionHeader } from "@/components/dashboard/shared";
import { motion } from "framer-motion";

export default function AdminUsers() {
    const users = [
        { name: "John Doe", email: "john@example.com", role: "User", status: "Active", joined: "Jan 12, 2026" },
        { name: "Alice Mwangi", email: "alice@norac.com", role: "Realtor", status: "Active", joined: "Oct 05, 2025" },
        { name: "Robert Chen", email: "rob@invest.com", role: "User", status: "Banned", joined: "Dec 20, 2025" },
        { name: "Elena Sterling", email: "elena@norac.com", role: "Admin", status: "Active", joined: "May 15, 2024" },
    ];

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'Admin': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
            case 'Realtor': return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
            default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
        }
    };

    return (
        <div className="space-y-10">
            <SectionHeader
                title="User Management"
                subtitle="Manage roles, permissions and account statuses for all platform members."
                action={
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                        <UserPlus size={18} /> Invite User
                    </button>
                }
            />

            <div className="bg-card/20 backdrop-blur-xl border border-border/40 rounded-[2.5rem] overflow-hidden">
                <div className="p-8 border-b border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-96">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, email or role..."
                            className="w-full bg-muted/40 border-none outline-none py-4 pl-12 pr-4 rounded-xl text-sm"
                        />
                    </div>

                    <div className="flex gap-4">
                        {['All', 'Admin', 'Realtor', 'User'].map((f) => (
                            <button key={f} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] border transition-all ${f === 'All' ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-muted/40 text-muted-foreground border-border/40 hover:bg-muted'
                                }`}>
                                {f}s
                            </button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border/40 bg-muted/20">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">User Profile</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Role</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Joined</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border-b border-border/10 hover:bg-muted/30 transition-colors"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-muted to-border flex items-center justify-center font-black text-foreground">
                                                {u.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground">{u.name}</div>
                                                <div className="text-xs text-muted-foreground">{u.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border ${getRoleColor(u.role)}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            {u.status === 'Active' ? <CheckCircle size={14} className="text-emerald-500" /> : <XCircle size={14} className="text-rose-500" />}
                                            <span className={`text-xs font-bold ${u.status === 'Active' ? 'text-emerald-500' : 'text-rose-500'}`}>{u.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-medium text-muted-foreground">{u.joined}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all"><Shield size={16} /></button>
                                            <button className="p-3 bg-muted rounded-xl hover:bg-rose-500 hover:text-white transition-all"><XCircle size={16} /></button>
                                            <button className="p-3 text-muted-foreground"><MoreVertical size={16} /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-8 border-t border-border/40 flex justify-center">
                    <button className="text-primary font-black text-[10px] uppercase tracking-widest hover:underline px-6 py-2">Load More Users</button>
                </div>
            </div>
        </div>
    );
}
