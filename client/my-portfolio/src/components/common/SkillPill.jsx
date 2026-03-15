// ────────────────────────────────────────
//  SkillPill.jsx  –  Skill tag badge
// ────────────────────────────────────────

/**
 * Props:
 *  label – skill name text
 *  color – hex accent color (background tint + border + text)
 */

export default function SkillPill({ label, color = "#E85D04" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 13px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: 600,
        fontFamily: "'DM Sans', sans-serif",
        background: `${color}18`,
        color: color,
        border: `1px solid ${color}35`,
        margin: "3px",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}
