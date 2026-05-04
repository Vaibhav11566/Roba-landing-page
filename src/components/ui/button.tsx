"use client";

import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
  type?: "button" | "submit";
}

const sizes = {
  md: "px-[20px] py-[10px] text-[14px]",
  sm: "px-5 py-2.5 text-[14px]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer btn-animated";

const variantStyle = {
  primary: {
    background: "rgb(196, 181, 253)",
    color: "rgb(59, 7, 100)",
    borderRadius: "4px",
    borderWidth: "medium",
    borderStyle: "none",
    borderColor: "currentcolor",
    borderImage: "initial",
  } as React.CSSProperties,
  secondary: {
    background: "rgb(196, 181, 253)",
    color: "rgb(59, 7, 100)",
    borderRadius: "4px",
    borderWidth: "medium",
    borderStyle: "none",
    borderColor: "currentcolor",
    borderImage: "initial",
  } as React.CSSProperties,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  target,
  rel,
  className = "",
  type = "button",
}: ButtonProps) {
  const style = variantStyle[variant];
  const cls = `${base} ${sizes[size]} ${className}`;

  const hoverIn = (el: HTMLElement) => {
    el.style.background = "#a78bfa";
  };
  const hoverOut = (el: HTMLElement) => {
    el.style.background = "rgb(196, 181, 253)";
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        style={style}
        onMouseEnter={(e) => hoverIn(e.currentTarget)}
        onMouseLeave={(e) => hoverOut(e.currentTarget)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      style={style}
      onMouseEnter={(e) => hoverIn(e.currentTarget)}
      onMouseLeave={(e) => hoverOut(e.currentTarget)}
    >
      {children}
    </button>
  );
}
