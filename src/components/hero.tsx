"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckSquare, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroLineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function MockupCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className="relative w-full max-w-md ml-auto rounded-2xl overflow-hidden"
      style={{
        background: "rgba(15,15,25,0.95)",
        border: "1px solid rgba(129,140,248,0.2)",
        boxShadow: "0 24px 80px rgba(99,102,241,0.2), 0 0 0 1px rgba(129,140,248,0.1)",
      }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-white/30 font-mono">taskly — dashboard</span>
      </div>

      {/* Mock content */}
      <div className="p-5 space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Tasks", value: "12" },
            { label: "Clients", value: "8" },
            { label: "Revenue", value: "$4.2k" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-3 text-center"
              style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.12)" }}>
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {[
            { text: "Design review — Client A", done: true },
            { text: "Send invoice #047", done: true },
            { text: "API integration meeting", done: false },
            { text: "Deploy v2 update", done: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <CheckSquare size={13} style={{ color: t.done ? "#818cf8" : "rgba(255,255,255,0.2)" }} />
              <span className="text-xs" style={{ color: t.done ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.8)" }}>
                {t.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <Calendar size={11} /> <span>3 meetings today</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            <Users size={11} /> <span>8 active clients</span>
          </div>
        </div>

        {/* AI badge */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
          style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <Sparkles size={12} style={{ color: "#818cf8" }} />
          <span className="text-xs" style={{ color: "#818cf8" }}>AI suggest: Follow up with Client B re: payment</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden grid-bg" style={{ minHeight: "90vh" }}>
      {/* glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.12) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(168,85,247,0.08) 0%, transparent 65%)" }} />

      <div className="page-container relative z-10 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
              className="section-label"
              style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <Sparkles size={11} /> Gen AI Products Company
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
              className="section-heading"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              <motion.span variants={heroLineVariant} style={{ display: "block" }}>
                Building
              </motion.span>
              <motion.span variants={heroLineVariant} style={{ display: "block" }}>
                <span className="gradient-text">AI-powered</span>
              </motion.span>
              <motion.span variants={heroLineVariant} style={{ display: "block" }}>
                tools for the modern workforce
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
              className="section-desc max-w-md"
            >
              We build Gen AI products that solve real problems — from how
              freelancers run their business to how professionals grow their careers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-3"
            >
              <Button href="#products">
                Explore Products <ArrowRight size={15} />
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Right — mockup */}
          <div className="hidden md:block">
            <MockupCard />
          </div>
        </div>
      </div>
    </section>
  );
}
