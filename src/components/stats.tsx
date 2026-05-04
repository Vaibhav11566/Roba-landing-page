"use client";

import { motion } from "framer-motion";
import { Package, Zap, Brain } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "3",
    label: "Products",
    sub: "Expanding ecosystem",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.1)",
    tag: "GROWING PORTFOLIO",
  },
  {
    icon: Zap,
    value: "1",
    label: "Live Now",
    sub: "Taskly — available today",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    tag: "AVAILABLE TODAY",
  },
  {
    icon: Brain,
    value: "100%",
    label: "AI-Native",
    sub: "Built from the ground up",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.1)",
    tag: "MAXIMUM EFFICIENCY",
  },
];

export function Stats() {
  return (
    <section className="section-divider" style={{ background: "var(--section-alt)" }}>
      <div className="page-container section-padding">
        <div className="card-grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: [0, 0.15, 0.3][i] }}
              className="glass-card flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-1"
                style={{ background: s.bg }}>
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <div>
                <div className="stat-num tracking-tight">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{s.sub}</div>
              </div>
              <span className="stat-tag mt-1"
                style={{ color: s.color }}>
                {s.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
