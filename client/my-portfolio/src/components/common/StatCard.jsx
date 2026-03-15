// ───────────────────────────────────────────
//  StatCard.jsx  –  Metric highlight card
// ───────────────────────────────────────────

import Card from "./Card";

/**
 * Props:
 *  value – metric display value e.g. "85%+"
 *  label – description label e.g. "Test Coverage"
 *  color – accent hex color for the value text
 */

export default function StatCard({ value, label, color = "#E85D04" }) {
  return (
    <Card
      variant="flat"
      hoverable
      padding="20px 24px"
      style={{ flex: 1, minWidth: "90px", textAlign: "center" }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px",
          fontWeight: 700,
          color,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "6px",
          fontSize: "10px",
          color: "#9C8B7A",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {label}
      </div>
    </Card>
  );
}
