// ──────────────────────────────────────────────
//  Education.jsx  –  Education section
// ──────────────────────────────────────────────

import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import { education } from "../../utils/data";

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "80px 48px 100px",
        background: "#F7F3ED",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <SectionHeading accent="#2A9D8F" subtitle="Academic background">
          Education
        </SectionHeading>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {education.map((edu) => (
            <Card
              key={edu.id}
              variant="raised"
              hoverable
              padding="36px"
              style={{ flex: "1 1 320px" }}
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
                    width: "60px",
                    height: "60px",
                    background: "#E6F7F5",
                    border: "2px solid #2A9D8F30",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    flexShrink: 0,
                  }}
                >
                  {edu.icon}
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1A1510",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <div
                    style={{
                      fontSize: "14px",
                      color: "#2A9D8F",
                      fontWeight: 700,
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: "6px",
                    }}
                  >
                    {edu.institution}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#9C8B7A",
                      fontFamily: "'DM Sans', sans-serif",
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>📍 {edu.location}</span>
                    <span style={{ color: "#D5CBBE" }}>·</span>
                    <span
                      style={{
                        background: "#E6F7F5",
                        color: "#2A9D8F",
                        padding: "2px 10px",
                        borderRadius: "20px",
                        fontWeight: 600,
                        fontSize: "11px",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
