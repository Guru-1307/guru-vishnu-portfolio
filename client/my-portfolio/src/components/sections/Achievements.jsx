// ──────────────────────────────────────────────
//  Achievements.jsx  –  Awards section
// ──────────────────────────────────────────────

import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import { achievements } from "../../utils/data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        padding: "80px 48px",
        background: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <SectionHeading
          accent="#D4A017"
          subtitle="Recognition for impactful contributions"
        >
          Achievements
        </SectionHeading>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {achievements.map((ach) => (
            <Card
              key={ach.id}
              variant="bordered"
              hoverable
              padding="36px"
              style={{
                flex: "1 1 300px",
                background: "linear-gradient(135deg, #FFFDF5 0%, #FFF8EE 100%)",
                borderColor: "#D4A01750",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                {/* ── Icon bubble ── */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#FEF3C7",
                    border: "2px solid #D4A01740",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    flexShrink: 0,
                  }}
                >
                  {ach.icon}
                </div>

                <div>
                  {/* ── Org + year badge ── */}
                  <div
                    style={{
                      display: "inline-block",
                      background: "#FEF3C7",
                      color: "#92400E",
                      border: "1px solid #D4A01750",
                      padding: "3px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.06em",
                      marginBottom: "10px",
                    }}
                  >
                    {ach.org} · {ach.year}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1A1510",
                      marginBottom: "10px",
                    }}
                  >
                    {ach.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#5A4A3A",
                      lineHeight: 1.75,
                      fontFamily: "'DM Sans', sans-serif",
                      margin: 0,
                    }}
                  >
                    {ach.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
