// ─────────────────────────────────────────
//  Button.jsx  –  Reusable Button Component
// ─────────────────────────────────────────

import { useState } from "react";

/**
 * Props:
 *  variant  – "primary" | "secondary" | "ghost" | "outline" | "pill"
 *  size     – "sm" | "md" | "lg"
 *  icon     – JSX element shown before label
 *  href     – turns button into <a> tag
 *  onClick  – click handler
 *  active   – boolean, highlights active/selected state
 *  children – label text
 */

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  href,
  onClick,
  active = false,
  children,
  style: extraStyle = {},
  ...rest
}) {
  const [hovered, setHovered] = useState(false);

  const sizes = {
    sm: {
      padding: "5px 14px",
      fontSize: "11px",
      borderRadius: "8px",
      gap: "5px",
    },
    md: {
      padding: "9px 20px",
      fontSize: "13px",
      borderRadius: "10px",
      gap: "7px",
    },
    lg: {
      padding: "13px 28px",
      fontSize: "15px",
      borderRadius: "12px",
      gap: "9px",
    },
  };

  const variants = {
    primary: {
      background: hovered ? "#C94E00" : "#E85D04",
      color: "#FFF8F0",
      border: "none",
      boxShadow: hovered ? "0 6px 20px #E85D0455" : "0 2px 8px #E85D0430",
    },
    secondary: {
      background: hovered ? "#1f3640" : "#264653",
      color: "#F4F1EB",
      border: "none",
      boxShadow: hovered ? "0 6px 20px #26465355" : "none",
    },
    ghost: {
      background: hovered ? "#F0EBE3" : "transparent",
      color: "#1A1510",
      border: "none",
      boxShadow: "none",
    },
    outline: {
      background: hovered ? "#FFF3EA" : "transparent",
      color: active ? "#E85D04" : "#1A1510",
      border: active ? "1.5px solid #E85D04" : "1.5px solid #D5CBBE",
      boxShadow: "none",
    },
    pill: {
      background: active ? "#E85D04" : hovered ? "#E8E0D4" : "#EDE8DF",
      color: active ? "#fff" : "#5A4A3A",
      border: "none",
      boxShadow: active ? "0 4px 14px #E85D0430" : "none",
    },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    transition: "all 0.18s ease",
    textDecoration: "none",
    letterSpacing: "0.01em",
    ...sizes[size],
    ...variants[variant],
    ...extraStyle,
  };

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={baseStyle}
        {...rest}
      >
        {icon && (
          <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
        )}
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={baseStyle}
      {...rest}
    >
      {icon && (
        <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
      )}
      {children}
    </button>
  );
}
