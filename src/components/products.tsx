"use client";

import { motion } from "framer-motion";
import {
  CheckSquare, Users, CreditCard, Calendar, FolderOpen,
  Sparkles, FileText, Briefcase, Ticket, ExternalLink,
} from "lucide-react";

const tasklyFeatures = [
  { icon: CheckSquare, label: "Tasks" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Clients" },
  { icon: CreditCard, label: "Payments" },
  { icon: Calendar, label: "Meetings" },
];

const careerFeatures = [
  "AI resume builder",
  "Auto job apply with AI",
  "Career intelligence",
  "Interview prep assistant",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Products() {
  return (
    <section id="products" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)", color: "var(--accent)" }}>
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-3 tracking-tight">
            AI-first. <span className="gradient-text">Always.</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Every product starts with AI at the core — not bolted on after the fact.
          </p>
        </motion.div>

        {/* Taskly — Live */}
        <motion.div custom={0} initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp}
          className="glass-card rounded-2xl p-8 md:p-10 mb-6"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(99,102,241,0.15)" }}>
                <CheckSquare size={22} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Taskly</h3>
                <span className="badge-live text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Live
                </span>
              </div>
            </div>
            <a href="https://tasklymanager-pied.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shrink-0">
              Try Taskly <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-lg mb-1">The AI-powered OS for freelancers</p>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
                Stop juggling 5 different apps. Taskly brings your tasks, projects, clients,
                payments, and meetings into one intelligent workspace — all powered by AI.
              </p>
              <div className="flex flex-wrap gap-2">
                {tasklyFeatures.map(({ icon: Icon, label }) => (
                  <div key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}>
                    <Icon size={12} style={{ color: "var(--accent)" }} />
                    {label}
                  </div>
                ))}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "var(--accent)" }}>
                  <Sparkles size={11} /> AI Integrated
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-3">
              {[
                { text: "Finally an app that handles everything in one place. The AI features save me hours every week.", by: "Freelance Developer" },
                { text: "Taskly replaced 4 different tools I was using. Game changer for my freelance business.", by: "UI/UX Designer" },
              ].map((t, i) => (
                <div key={i} className="p-4 rounded-xl text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)" }}>
                  <p className="leading-relaxed" style={{ color: "var(--foreground)" }}>"{t.text}"</p>
                  <p className="mt-2 text-xs font-medium" style={{ color: "var(--muted)" }}>— {t.by}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coming Soon — 2 cards */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* CareerCraft */}
          <motion.div custom={1} initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-2xl p-7"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(168,85,247,0.15)" }}>
                  <Briefcase size={20} style={{ color: "#c084fc" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CareerCraft</h3>
                  <span className="badge-soon text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--muted)" }}>
              Your AI career co-pilot — build smarter resumes and let AI apply to jobs for you.
            </p>
            <ul className="space-y-2 mb-6">
              {careerFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <FileText size={13} style={{ color: "#c084fc" }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.25)", color: "#c084fc" }}>
              <Sparkles size={13} /> Join Waitlist
            </button>
          </motion.div>

          {/* Ticketing Tool */}
          <motion.div custom={2} initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
            className="glass-card rounded-2xl p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(244,114,182,0.15)" }}>
                <Ticket size={20} style={{ color: "#f472b6" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ticketing Tool</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mt-0.5"
                  style={{ background: "rgba(244,114,182,0.12)", border: "1px solid rgba(244,114,182,0.25)", color: "#f472b6" }}>
                  Coming Soon
                </span>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
              AI-powered ticketing and support management — smarter issue tracking
              built for modern teams and products. Details coming soon.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 w-fit"
              style={{ background: "rgba(244,114,182,0.12)", border: "1px solid rgba(244,114,182,0.25)", color: "#f472b6" }}>
              <Sparkles size={13} /> Notify Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
