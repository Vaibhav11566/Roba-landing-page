"use client";

import { motion } from "framer-motion";
import { Cpu, Code2, Zap } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "AI-First", desc: "Every product built ground-up with AI — never added after.", color: "#818cf8", bg: "rgba(129,140,248,0.1)" },
  { icon: Code2, title: "Real Problems", desc: "We build what we need ourselves. Dog-fooding is the standard.", color: "#c084fc", bg: "rgba(192,132,252,0.1)" },
  { icon: Zap, title: "Ship Fast", desc: "Solo founder speed with senior engineer quality.", color: "#f472b6", bg: "rgba(244,114,182,0.1)" },
];

export function About() {
  return (
    <section id="about" className="section-padding section-divider" style={{ background: "var(--section-alt)" }}>
      <div className="page-container">
        <div className="grid md:grid-cols-2 items-center" style={{ gap: 60 }}>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="section-label">
              About
            </span>
            <h2 className="section-heading mt-2">
              Built by a developer,<br />
              <span className="gradient-text">for real workflows.</span>
            </h2>
            <div className="space-y-3" style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)" }}>
              <p>
                Hey, I&apos;m <strong style={{ color: "var(--foreground)" }}>Vaibhav</strong> — Founder of Roba.ai
                and a full-stack Gen AI developer. I started Roba.ai with one belief: the best software is built
                by people who actually feel the problem.
              </p>
              <p>
                Taskly was born because I was tired of juggling Notion, Trello, PayPal, and Calendly just to
                run my freelance work. So I built one AI-powered tool that handles it all.
              </p>
              <p>
                Every Roba.ai product follows the same rule —
                <strong style={{ color: "var(--foreground)" }}> ground-up Gen AI</strong>, built for problems
                modern workers actually face.
              </p>
            </div>
          </motion.div>

          <div className="card-stack">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: p.bg }}>
                  <p.icon size={17} style={{ color: p.color }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{p.title}</h4>
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
