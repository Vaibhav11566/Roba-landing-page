"use client";

export function Footer() {
  const companyLinks = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Taskly", href: "https://tasklymanager-pied.vercel.app/" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Status", href: "#" },
  ];

  return (
    <footer className="section-divider">
      <div className="page-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="flex flex-col md:flex-row md:items-start justify-between" style={{ gap: 40 }}>

          {/* Left — branding */}
          <div className="max-w-xs">
            <div className="text-xl font-bold gradient-text mb-2">Roba.ai</div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Next-generation AI products for the modern workforce. Founder. Speed. Intelligence.
            </p>
            <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
              © {new Date().getFullYear()} Roba.ai — All rights reserved.
            </p>
          </div>

          {/* Right — link columns */}
          <div className="flex gap-10">
            <div>
              <h5 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                Company
              </h5>
              <ul className="space-y-2.5">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}
                      className="text-sm transition-colors hover:opacity-100"
                      style={{ color: "var(--muted)" }}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                Legal
              </h5>
              <ul className="space-y-2.5">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm transition-colors hover:opacity-100" style={{ color: "var(--muted)" }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
