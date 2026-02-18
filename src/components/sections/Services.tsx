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

import { useTranslations } from "next-intl";

const ServicesList = () => {
    const t = useTranslations("Services");
    return [
        {
            title: t("items.consulting.title"),
            icon: Users,
            description: t("items.consulting.description"),
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
        },
        {
            title: t("items.development.title"),
            icon: TrendingUp,
            description: t("items.development.description"),
            color: "text-violet-400",
            bg: "bg-violet-400/10",
        },
        {
            title: t("items.account.title"),
            icon: Settings,
            description: t("items.account.description"),
            color: "text-blue-400",
            bg: "bg-blue-400/10",
        },
        {
            title: t("items.contracts.title"),
            icon: FileText,
            description: t("items.contracts.description"),
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
        },
        {
            title: t("items.selling.title"),
            icon: Zap,
            description: t("items.selling.description"),
            color: "text-amber-400",
            bg: "bg-amber-400/10",
        },
        {
            title: t("items.governance.title"),
            icon: ShieldCheck,
            description: t("items.governance.description"),
            color: "text-rose-400",
            bg: "bg-rose-400/10",
        },
    ];
};

export const Services = () => {
    const t = useTranslations("Services");
    const services = ServicesList();
    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
                        {t("badge")}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">
                        {t("title")} <span className="gradient-text">{t("titleAccent")}</span>
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
