"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-dark">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-bold tracking-widest uppercase mb-4">
                        Welcome to IP Technology
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
                        INNOVATE. <br />
                        OPTIMIZE. <br />
                        <span className="gradient-text">FUTURE-PROOF.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Your strategic partner for next-generation tech solutions. We help
                        businesses navigate the digital landscape with expertise and vision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-primary text-white rounded-full text-lg font-bold hover:glow transition-all flex items-center gap-2 group">
                            Get Started <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 glass text-white rounded-full text-lg font-bold hover:bg-white/5 transition-all">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10"
                >
                    {[
                        { label: "Experience", value: "15+" },
                        { label: "Happy Clients", value: "100+" },
                        { label: "Successful Projects", value: "150+" },
                        { label: "Contracts", value: "200+" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-500 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
            >
                <ArrowDown className="text-slate-500 w-6 h-6" />
            </motion.div>
        </section>
    );
};
