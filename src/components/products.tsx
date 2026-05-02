"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  Users,
  CreditCard,
  Calendar,
  FolderOpen,
  Sparkles,
  FileText,
  Briefcase,
  Ticket,
  ExternalLink,
  Clock,
} from "lucide-react";

const tasklyFeatures = [
  { icon: CheckSquare, label: "Task Management" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Clients" },
  { icon: CreditCard, label: "Payments" },
  { icon: Calendar, label: "Meetings" },
];

const tasklyTestimonials = [
  {
    text: "Finally an app that handles everything in one place. The AI features save me hours every week.",
    author: "Freelance Developer",
  },
  {
    text: "Taskly replaced 4 different tools I was using. Game changer for my freelance business.",
    author: "UI/UX Designer",
  },
];

const careerCraftFeatures = [
  "AI-powered resume builder",
  "Auto job apply with AI",
  "Career intelligence & tracking",
  "Interview preparation assistant",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Products() {
  return (
    <section id="products" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <span
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Our Products
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          AI-first. Always.
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Every product we build starts with AI at the core — not bolted on
          after.
        </p>
      </motion.div>

      {/* Taskly — Live */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="glow-card rounded-2xl p-8 md:p-10 mb-8"
        style={{ background: "var(--card)" }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(99,102,241,0.15)" }}
              >
                <CheckSquare size={24} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Taskly</h3>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#22c55e",
                  }}
                >
                  ● LIVE
                </span>
              </div>
            </div>

            <p
              className="text-lg mb-2 font-medium"
              style={{ color: "var(--foreground)" }}
            >
              The AI-powered OS for freelancers
            </p>
            <p className="mb-6" style={{ color: "var(--muted)" }}>
              Stop juggling 5 different apps. Taskly brings your tasks,
              projects, clients, payments, and meetings into one intelligent
              workspace — powered by AI.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tasklyFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                >
                  <Icon size={14} style={{ color: "var(--accent)" }} />
                  {label}
                </div>
              ))}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "var(--accent)",
                }}
              >
                <Sparkles size={14} />
                AI Integrated
              </div>
            </div>

            <a
              href="https://tasklymanager-pied.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              }}
            >
              Try Taskly
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Testimonials */}
          <div className="md:w-72 space-y-3">
            {tasklyTestimonials.map((t, i) => (
              <div
                key={i}
                className="p-4 rounded-xl text-sm"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p style={{ color: "var(--foreground)" }}>"{t.text}"</p>
                <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Coming Soon grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* CareerCraft */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glow-card rounded-2xl p-8"
          style={{ background: "var(--card)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="p-2 rounded-xl"
              style={{ background: "rgba(168,85,247,0.15)" }}
            >
              <Briefcase size={22} style={{ color: "#a855f7" }} />
            </div>
            <div>
              <h3 className="text-xl font-bold">CareerCraft</h3>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  color: "#a855f7",
                }}
              >
                <Clock size={10} className="inline mr-1" />
                COMING SOON
              </span>
            </div>
          </div>

          <p className="mb-5" style={{ color: "var(--muted)" }}>
            Your AI career co-pilot — build smarter resumes and let AI apply to
            jobs for you.
          </p>

          <ul className="space-y-2 mb-6">
            {careerCraftFeatures.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--foreground)" }}
              >
                <FileText size={14} style={{ color: "#a855f7" }} />
                {f}
              </li>
            ))}
          </ul>

          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
              color: "#a855f7",
            }}
          >
            <Sparkles size={14} />
            Join Waitlist
          </button>
        </motion.div>

        {/* Ticketing Tool */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glow-card rounded-2xl p-8 flex flex-col justify-between"
          style={{ background: "var(--card)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(236,72,153,0.15)" }}
              >
                <Ticket size={22} style={{ color: "#ec4899" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ticketing Tool</h3>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(236,72,153,0.15)",
                    color: "#ec4899",
                  }}
                >
                  <Clock size={10} className="inline mr-1" />
                  COMING SOON
                </span>
              </div>
            </div>

            <p className="mb-6" style={{ color: "var(--muted)" }}>
              AI-powered ticketing and support — smarter issue tracking for
              teams and products. More details coming soon.
            </p>
          </div>

          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "rgba(236,72,153,0.15)",
              border: "1px solid rgba(236,72,153,0.3)",
              color: "#ec4899",
            }}
          >
            <Sparkles size={14} />
            Notify Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
