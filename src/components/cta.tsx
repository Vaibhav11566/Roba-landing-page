"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section-padding section-divider">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f0f23 100%)",
            border: "1px solid rgba(129,140,248,0.15)",
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 20,
            padding: "56px 48px",
          }}
        >
          {/* Glow blobs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

          <div className="relative z-10">
            <span className="section-label">
              Ready to evolve?
            </span>
            <h2 className="section-heading mt-2" style={{ color: "white" }}>
              Ready to evolve your{" "}
              <span className="gradient-text">workforce?</span>
            </h2>
            <p className="section-desc max-w-lg mx-auto mb-10">
              Join forward-thinking professionals using Roba.ai products to work smarter —
              not harder.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="https://tasklymanager-pied.vercel.app/" target="_blank" rel="noopener noreferrer">
                Get Early Access <ArrowRight size={14} />
              </Button>
              <Button href="#contact" variant="secondary">
                <MessageCircle size={14} /> Talk to Founder
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
