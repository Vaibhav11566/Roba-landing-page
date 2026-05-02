"use client";

export function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm"
      style={{
        borderTop: "1px solid var(--border)",
        color: "var(--muted)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          © {new Date().getFullYear()}{" "}
          <strong className="gradient-text">Roba.ai</strong> — All rights
          reserved.
        </span>
        <span>Building AI-powered tools for the modern workforce.</span>
      </div>
    </footer>
  );
}
