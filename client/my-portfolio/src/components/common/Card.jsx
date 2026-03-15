// ────────────────────────────────────────
//  Card.jsx  –  Reusable Card Component
// ────────────────────────────────────────

import { useState } from "react";

/**
 * Props:
 *  variant   – "default" | "bordered" | "raised" | "accent" | "flat"
 *  accent    – hex color used for accent top-border
 *  hoverable – adds lift + shadow on hover
 *  padding   – override inner padding e.g. "24px 32px"
 *  style     – extra inline styles
 *  children  – card content
 */

export default function Card({
  variant = "default",
  accent = "#E85D04",
  hoverable = false,
  padding = "28px",
  style: extraStyle = {},
  children,
}) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    default: {
      background: "#FFFFFF",
      border: "1px solid #E8E0D4",
      borderRadius: "16px",
      boxShadow:
        hovered && hoverable
          ? "0 12px 40px rgba(26,21,16,0.12)"
          : "0 2px 12px rgba(26,21,16,0.06)",
    },
    bordered: {
      background: "#FFFFFF",
      border: "1.5px solid #D5CBBE",
      borderRadius: "16px",
      boxShadow: "none",
    },
    raised: {
      background: "#FFFFFF",
      border: "none",
      borderRadius: "18px",
      boxShadow:
        hovered && hoverable
          ? "0 20px 60px rgba(26,21,16,0.16)"
          : "0 6px 24px rgba(26,21,16,0.10)",
    },
    accent: {
      background: "#FFFFFF",
      border: "1px solid #E8E0D4",
      borderTop: `3px solid ${accent}`,
      borderRadius: "16px",
      boxShadow:
        hovered && hoverable
          ? "0 12px 40px rgba(26,21,16,0.12)"
          : "0 2px 12px rgba(26,21,16,0.06)",
    },
    flat: {
      background: "#F7F3ED",
      border: "none",
      borderRadius: "14px",
      boxShadow: "none",
    },
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding,
        transform: hoverable && hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.22s ease",
        ...variants[variant],
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}
