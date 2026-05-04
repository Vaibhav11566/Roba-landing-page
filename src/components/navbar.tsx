"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor:
          theme === "dark" ? "rgba(7,7,12,0.85)" : "rgba(255,255,255,0.85)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="page-container flex items-center justify-between py-3.5">
        <a href="#" className="text-lg font-bold tracking-tight gradient-text">
          Roba.ai
        </a>

        <div className="hidden sm:flex items-center gap-1">
          {["Products", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
              style={{ color: "var(--muted)" }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
