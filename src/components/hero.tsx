"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
      {/* bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 tracking-wide"
          style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)", color: "var(--accent)" }}
        >
          <Sparkles size={12} />
          Gen AI Products Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          Building{" "}
          <span className="gradient-text">AI-powered</span>
          <br />tools for the
          <br />modern workforce.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          We build Gen AI products that solve real problems — from how
          freelancers run their business to how professionals grow their careers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#products"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm"
          >
            Explore Products <ArrowRight size={15} />
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all hover:scale-105"
            style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-20 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { value: "3", label: "Products" },
            { value: "1", label: "Live Now" },
            { value: "100%", label: "AI-Native" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
