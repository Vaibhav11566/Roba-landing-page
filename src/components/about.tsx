"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Zap } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "AI-First",
    desc: "Every product is built ground-up with AI — not added as an afterthought.",
    color: "#6366f1",
  },
  {
    icon: Code2,
    title: "Real Problems",
    desc: "We build what we need ourselves. If we use it daily, others will too.",
    color: "#a855f7",
  },
  {
    icon: Zap,
    title: "Ship Fast",
    desc: "Solo founder speed with senior engineer quality. Ideas to production fast.",
    color: "#ec4899",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
      style={{ background: "var(--card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              About
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Built by a developer,
              <br />
              <span className="gradient-text">for real workflows.</span>
            </h2>
            <div className="space-y-4" style={{ color: "var(--muted)" }}>
              <p>
                Hey, I&apos;m <strong style={{ color: "var(--foreground)" }}>Vaibhav</strong> —
                Founder of Roba.ai and a full-stack Gen AI developer. I started Roba.ai
                with a simple belief: the best software is built by people who
                actually feel the problem.
              </p>
              <p>
                Taskly was born because I was tired of juggling Notion, Trello,
                PayPal, and Calendly just to run my freelance work. So I built
                one AI-powered tool that does it all.
              </p>
              <p>
                Every product under Roba.ai follows the same principle —
                <strong style={{ color: "var(--foreground)" }}> ground-up Gen AI</strong>,
                built for the problems modern workers actually face.
              </p>
            </div>
          </motion.div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ background: `${p.color}20` }}
                >
                  <p.icon size={20} style={{ color: p.color }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
