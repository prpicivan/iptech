"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    TrendingUp,
    Settings,
    FileText,
    Zap,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Business Consulting",
        icon: Users,
        description: "Maximizing efficiency with new processes and recognized best practices.",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
    },
    {
        title: "Business Development",
        icon: TrendingUp,
        description: "Development services for existing and potential Clients or Partners.",
        color: "text-violet-400",
        bg: "bg-violet-400/10",
    },
    {
        title: "Account Management",
        icon: Settings,
        description: "Expert management of Accounts, focusing on upsell and cross-sell growth.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        title: "Contract Management",
        icon: FileText,
        description: "Managing contracts, creating templates, monitoring, and KPI creation.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
    {
        title: "Solution Selling",
        icon: Zap,
        description: "Understanding existing solutions and providing added value to Accounts.",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
    },
    {
        title: "Project Governance",
        icon: ShieldCheck,
        description: "Identifying key stakeholders and processes needed for successful implementation.",
        color: "text-rose-400",
        bg: "bg-rose-400/10",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">
                        Solutions That <span className="gradient-text">Matter.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 group hover:glow transition-all cursor-pointer relative overflow-hidden"
                        >
                            <div className={cn("inline-flex items-center justify-center p-3 rounded-2xl mb-6 transition-transform group-hover:scale-110", service.bg)}>
                                <service.icon className={cn("w-8 h-8", service.color)} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Corner Accent */}
                            <div className={cn("absolute -bottom-2 -right-2 w-12 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity", service.bg)} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
