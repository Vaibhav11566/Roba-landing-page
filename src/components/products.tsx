"use client";

import { motion } from "framer-motion";
import {
  CheckSquare, Users, CreditCard, Calendar, FolderOpen,
  Sparkles, FileText, Briefcase, Ticket, ExternalLink,
  Cpu, Globe, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1 } }),
};

const tasklyFeatures = [
  { icon: CheckSquare, label: "Tasks" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Clients" },
  { icon: CreditCard, label: "Payments" },
  { icon: Calendar, label: "Meetings" },
];

const miniFeatures = [
  { icon: Cpu, title: "AI at the Core", desc: "Every action is AI-assisted — from task priorities to client follow-ups." },
  { icon: Globe, title: "Works Everywhere", desc: "Web-first, mobile-friendly. Your workspace travels with you." },
  { icon: ShieldCheck, title: "Secure by Default", desc: "Your client data and finances stay private and encrypted." },
];

export function Products() {
  return (
    <section id="products" className="section-padding section-divider">
      <div className="page-container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <span className="section-label">
            Our Products
          </span>
          <h2 className="section-heading mt-2">
            AI-first. <span className="gradient-text">Always.</span>
          </h2>
          <p className="section-desc max-w-lg">
            Every product starts with AI at the core — not bolted on after the fact.
          </p>
        </motion.div>

        {/* Main grid — large left + right stacked */}
        <div className="card-grid md:grid-cols-5" style={{ gap: 20, alignItems: "stretch" }}>

          {/* Large left card — Taskly */}
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-3 glass-card overflow-hidden"
            style={{ minHeight: 480, padding: 0, display: "flex", flexDirection: "column" }}
          >
            {/* Dark screenshot area */}
            <div className="relative" style={{ background: "linear-gradient(145deg, #0d0d1a 0%, #111128 100%)", padding: 28 }}>
              {/* Mini stats grid */}
              <div className="grid grid-cols-2 gap-3"
                style={{ paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 0 }}>
                {[
                  { label: "Tasks", val: "12" }, { label: "Revenue", val: "$4.2k" },
                  { label: "Clients", val: "8" }, { label: "Meetings", val: "3" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg p-3"
                    style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.1)" }}>
                    <div className="text-white font-bold text-lg">{s.val}</div>
                    <div className="text-white/40 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              {/* Task list */}
              <div style={{ gap: 0, display: "flex", flexDirection: "column" }}>
                {["Design review — Client A ✓", "Send invoice #047 ✓", "API integration call →"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs"
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.7)",
                    }}>
                    <CheckSquare size={11} style={{ color: "#818cf8" }} />{t}
                  </div>
                ))}
              </div>
              {/* AI suggestion box */}
              <div className="flex items-center gap-2 rounded-lg"
                style={{ marginTop: 16, padding: "12px 16px", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <Sparkles size={11} style={{ color: "#818cf8" }} />
                <span className="text-xs" style={{ color: "#818cf8" }}>AI: Follow up with Client B — invoice overdue 3 days</span>
              </div>
            </div>

            {/* Card text — pushed to bottom */}
            <div style={{ marginTop: "auto", padding: 28 }}>
              <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.12)" }}>
                  <CheckSquare size={17} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Taskly</h3>
                  <span className="badge-coming-soon"
                    style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80" }}>
                    ● Live
                  </span>
                </div>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)", marginBottom: 14 }}>
                The AI-powered OS for freelancers. Tasks, projects, clients, payments, and meetings — all in one intelligent workspace.
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginBottom: 20 }}>
                {tasklyFeatures.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs"
                    style={{ background: "var(--section-alt)", border: "1px solid var(--border)" }}>
                    <Icon size={11} style={{ color: "var(--accent)" }} />{label}
                  </div>
                ))}
              </div>
              <Button href="https://tasklymanager-pied.vercel.app/" target="_blank" rel="noopener noreferrer" size="sm">
                Try Taskly <ExternalLink size={12} />
              </Button>
            </div>
          </motion.div>

          {/* Right stacked — CareerCraft + Ticketing */}
          <div className="md:col-span-2 flex flex-col" style={{ gap: 16, height: "100%" }}>

            {/* CareerCraft */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card flex-1"
              style={{ padding: 24, borderRadius: 14 }}
            >
              <div className="flex items-center" style={{ gap: 12, marginBottom: 10 }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(192,132,252,0.12)" }}>
                  <Briefcase size={17} style={{ color: "#c084fc" }} />
                </div>
                <h3 className="font-bold">CareerCraft</h3>
              </div>
              <span className="badge-coming-soon"
                style={{ background: "rgba(192,132,252,0.1)", border: "1px solid rgba(192,132,252,0.2)", color: "#c084fc", display: "block", marginBottom: 12 }}>
                Coming Soon
              </span>
              <p className="text-sm" style={{ color: "var(--muted)", marginBottom: 14, lineHeight: 1.65 }}>
                Your AI career co-pilot — smart resumes, auto job applications, and career intelligence.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {["AI resume builder", "Auto job apply with AI", "Career intelligence", "Interview prep"].map((f) => (
                  <li key={f} className="flex items-center text-xs" style={{ gap: 8, padding: "5px 0" }}>
                    <FileText size={11} style={{ color: "#c084fc" }} />{f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 14 }}>
                <Button size="sm">
                  <Sparkles size={11} /> Join Waitlist
                </Button>
              </div>
            </motion.div>

            {/* Ticketing Tool */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-card flex-1"
              style={{ padding: 24, borderRadius: 14 }}
            >
              <div className="flex items-center" style={{ gap: 12, marginBottom: 10 }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(244,114,182,0.12)" }}>
                  <Ticket size={17} style={{ color: "#f472b6" }} />
                </div>
                <h3 className="font-bold">Ticketing Tool</h3>
              </div>
              <span className="badge-coming-soon"
                style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)", color: "#f472b6", display: "block", marginBottom: 12 }}>
                Coming Soon
              </span>
              <p className="text-sm" style={{ color: "var(--muted)", marginBottom: 14, lineHeight: 1.65 }}>
                AI-powered issue tracking and support management for modern teams. Details coming soon.
              </p>
              <div style={{ marginTop: 14 }}>
                <Button size="sm">
                  <Sparkles size={11} /> Notify Me
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mini feature cards */}
        <div className="card-grid grid-cols-1 sm:grid-cols-3" style={{ gap: 16, marginTop: 20 }}>
          {miniFeatures.map((f, i) => (
            <motion.div key={f.title} custom={i + 3} initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
              className="glass-card"
              style={{ padding: 24, borderRadius: 14 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(129,140,248,0.1)", marginBottom: 14 }}>
                <f.icon size={16} style={{ color: "var(--accent)" }} />
              </div>
              <h4 className="font-semibold" style={{ fontSize: 16, marginBottom: 8 }}>{f.title}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted)" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
