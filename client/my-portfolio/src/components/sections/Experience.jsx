// ─────────────────────────────────────────────
//  Experience.jsx  –  Work Experience section
// ─────────────────────────────────────────────

import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import SkillPill from "../common/SkillPill";
import { experience } from "../../utils/data";

const ACCENT_COLORS = ["#E85D04", "#264653"];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "80px 48px",
        background: "#F7F3ED",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <SectionHeading
          accent="#E85D04"
          subtitle="Professional journey & key contributions"
        >
          Work Experience
        </SectionHeading>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {experience.map((job, idx) => {
            const accentColor = ACCENT_COLORS[idx] ?? "#E85D04";

            return (
              <Card
                key={job.id}
                variant="raised"
                hoverable
                padding="36px"
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* ── Left accent stripe ── */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "5px",
                    background: accentColor,
                    borderRadius: "4px 0 0 4px",
                  }}
                />

                <div style={{ paddingLeft: "16px" }}>
                  {/* ── Header row ── */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "6px",
                    }}
                  >
                    {/* Role + Company */}
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#1A1510",
                          margin: "0 0 4px",
                        }}
                      >
                        {job.role}
                      </h3>
                      <div
                        style={{
                          fontSize: "14px",
                          color: accentColor,
                          fontWeight: 700,
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {job.company}
                        {job.client && (
                          <span style={{ color: "#9C8B7A", fontWeight: 400 }}>
                            {" · for "}
                            {job.client}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Period + Location */}
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "inline-block",
                          background: `${accentColor}12`,
                          border: `1px solid ${accentColor}30`,
                          color: accentColor,
                          padding: "4px 14px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: 700,
                          fontFamily: "'DM Sans', sans-serif",
                          marginBottom: "4px",
                        }}
                      >
                        {job.period}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#9C8B7A",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        📍 {job.location}
                      </div>
                    </div>
                  </div>

                  {/* ── Project badge ── */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      background: "#F7F3ED",
                      border: "1px solid #E0D9CE",
                      borderRadius: "8px",
                      padding: "8px 14px",
                      fontSize: "12px",
                      color: "#5A4A3A",
                      margin: "16px 0 20px",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <span style={{ color: "#E85D04", fontWeight: 700 }}>
                      ▸ Project:
                    </span>
                    <strong>{job.project}</strong>
                    <span style={{ color: "#9C8B7A" }}>—</span>
                    <span>{job.projectDesc}</span>
                  </div>

                  {/* ── Highlights list ── */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 20px",
                    }}
                  >
                    {job.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          padding: "7px 0",
                          fontSize: "13.5px",
                          color: "#5A4A3A",
                          lineHeight: 1.7,
                          fontFamily: "'DM Sans', sans-serif",
                          borderBottom:
                            i < job.highlights.length - 1
                              ? "1px dashed #EDE8DF"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            color: accentColor,
                            flexShrink: 0,
                            fontSize: "11px",
                            marginTop: "5px",
                          }}
                        >
                          ◆
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* ── Tech stack ── */}
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#9C8B7A",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "8px",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      Tech Stack
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {job.techStack.map((t) => (
                        <SkillPill key={t} label={t} color={accentColor} />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
