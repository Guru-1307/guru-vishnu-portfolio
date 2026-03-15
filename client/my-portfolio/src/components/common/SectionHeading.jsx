// ──────────────────────────────────────────────
//  SectionHeading.jsx  –  Reusable section title
// ──────────────────────────────────────────────

/**
 * Props:
 *  children – heading text
 *  subtitle – optional smaller sub-text below heading
 *  accent   – hex color for the left decorative bar
 */

export default function SectionHeading({
  children,
  subtitle,
  accent = "#E85D04",
}) {
  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Title row with accent bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: subtitle ? "8px" : "0",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "3px",
            background: accent,
            borderRadius: "3px",
            flexShrink: 0,
          }}
        />
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#1A1510",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {children}
        </h2>
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          style={{
            marginLeft: "54px",
            fontSize: "14px",
            color: "#8C7B6A",
            marginTop: "4px",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
