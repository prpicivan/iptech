"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

export const Contact = () => {
    const t = useTranslations("Contact");
    return (
        <section id="contact" className="py-24 bg-dark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
                            {t("badge")}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                            {t("title")} <br />
                            <span className="gradient-text">{t("titleAccent")}</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            {t("description")}
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, text: "Ulica Pavla Radića 70, 10000 Zagreb" },
                                { icon: Mail, text: "contact@iptech.hr" },
                                { icon: Phone, text: "+385 (0)1 3016 453" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-lg">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 mt-12">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 px-1">{t("form.fullName")}</label>
                                    <input
                                        type="text"
                                        placeholder={t("form.fullNamePlaceholder")}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-400 px-1">{t("form.email")}</label>
                                    <input
                                        type="email"
                                        placeholder={t("form.emailPlaceholder")}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-400 px-1">{t("form.subject")}</label>
                                <input
                                    type="text"
                                    placeholder={t("form.subjectPlaceholder")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-400 px-1">{t("form.message")}</label>
                                <textarea
                                    rows={4}
                                    placeholder={t("form.messagePlaceholder")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white resize-none"
                                />
                            </div>
                            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:glow transition-all">
                                {t("form.send")}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
