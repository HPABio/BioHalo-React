"use client";

import React from "react";
import { motion } from "framer-motion";

interface CoatingFocusSectionProps {
    className?: string;
    stats?: any[];
}

export const CoatingFocusSection = ({ className = "", stats = [] }: CoatingFocusSectionProps) => {
    return (
        <section className={`w-full py-24 bg-black relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-poppins bg-gradient-to-br from-mintAccent via-tealAccent to-blue-900 bg-clip-text text-transparent mb-6" style={{ lineHeight: 1.2 }}>
                        Pioneering Surface Modifying Ingredients <br /> for Coatings
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
                        We develop innovative bio-based alternatives to replace harmful PFAS
                        chemicals in high-performance coatings, starting with maritime antifouling applications.
                    </p>
                </motion.div>

                {stats.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gray-900/40 border border-tealAccent/20 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center text-center hover:border-tealAccent/50 transition-colors"
                            >
                                <div className="flex items-baseline mb-4">
                                    <span className="text-3xl text-mintAccent font-light mr-1">{stat.prefix}</span>
                                    <span className="text-6xl font-bold bg-gradient-to-br from-tealAccent to-blue-500 bg-clip-text text-transparent">
                                        {stat.number}
                                    </span>
                                    <span className="text-2xl text-gray-500 ml-1">{stat.suffix}</span>
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tealAccent/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};
