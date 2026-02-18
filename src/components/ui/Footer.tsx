"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-dark pt-16 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Rocket className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold tracking-tight text-white line-clamp-1">
                                IP Technology
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
                            Empowering businesses through cutting-edge technology and strategic consulting.
                            Built for the future, delivered today.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {["Home", "Services", "About", "Contact", "Privacy Policy"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <div className="text-slate-500 text-sm space-y-2">
                            <p>IP Tehnologije</p>
                            <p>Obrt za računalne djelatnosti</p>
                            <p>OIB: 30160453873</p>
                            <p>Owner: Ivan Prpić</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} IP Technology. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-sm">
                        Designed with excellence in Zagreb, Croatia.
                    </p>
                </div>
            </div>
        </footer>
    );
};
