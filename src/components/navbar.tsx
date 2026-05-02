"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        background: "var(--background)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: theme === "dark" ? "rgba(5,5,8,0.85)" : "rgba(255,255,255,0.85)",
      }}
    >
      <a href="#" className="text-xl font-bold tracking-tight gradient-text">
        Roba.ai
      </a>

      <div className="flex items-center gap-6">
        <a
          href="#products"
          className="text-sm hidden sm:block"
          style={{ color: "var(--muted)" }}
        >
          Products
        </a>
        <a
          href="#about"
          className="text-sm hidden sm:block"
          style={{ color: "var(--muted)" }}
        >
          About
        </a>
        <a
          href="#contact"
          className="text-sm hidden sm:block"
          style={{ color: "var(--muted)" }}
        >
          Contact
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-colors"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </motion.nav>
  );
}
