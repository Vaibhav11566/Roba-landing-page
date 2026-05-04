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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
      style={{
        backgroundColor: theme === "dark" ? "rgba(6,6,10,0.8)" : "rgba(255,255,255,0.8)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <a href="#" className="text-lg font-bold tracking-tight gradient-text">
        Roba.ai
      </a>

      <div className="flex items-center gap-1">
        {["Products", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hidden sm:block text-sm px-3 py-1.5 rounded-lg transition-colors hover:opacity-100"
            style={{ color: "var(--muted)" }}
          >
            {item}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-lg transition-all hover:scale-110"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </motion.nav>
  );
}
