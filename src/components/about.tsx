"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Zap } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "AI-First", desc: "Every product built ground-up with AI — not added after.", color: "#818cf8", bg: "rgba(129,140,248,0.12)" },
  { icon: Code2, title: "Real Problems", desc: "We build what we need ourselves. If we use it, others will too.", color: "#c084fc", bg: "rgba(192,132,252,0.12)" },
  { icon: Zap, title: "Ship Fast", desc: "Solo founder speed with senior engineer quality.", color: "#f472b6", bg: "rgba(244,114,182,0.12)" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)", color: "var(--accent)" }}>
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-6 leading-tight tracking-tight">
              Built by a developer,<br />
              <span className="gradient-text">for real workflows.</span>
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Hey, I&apos;m <span className="font-semibold" style={{ color: "var(--foreground)" }}>Vaibhav</span> —
                Founder of Roba.ai and a full-stack Gen AI developer. I started Roba.ai
                with one belief: the best software is built by people who actually feel the problem.
              </p>
              <p>
                Taskly was born because I was tired of juggling Notion, Trello, PayPal, and
                Calendly just to run my freelance work. So I built one AI-powered tool that does it all.
              </p>
              <p>
                Every Roba.ai product follows the same rule —
                <span className="font-semibold" style={{ color: "var(--foreground)" }}> ground-up Gen AI</span>,
                built for problems modern workers actually face.
              </p>
            </div>
          </motion.div>

          {/* Right — pillars */}
          <div className="space-y-3">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card flex items-start gap-4 p-5 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: p.bg }}>
                  <p.icon size={18} style={{ color: p.color }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm">{p.title}</h4>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
