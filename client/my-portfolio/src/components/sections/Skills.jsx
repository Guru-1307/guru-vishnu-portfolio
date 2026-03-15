// ────────────────────────────────────────
//  Skills.jsx  –  Technical Skills section
// ────────────────────────────────────────

import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";
import SkillPill from "../common/SkillPill";
import { skillCategories } from "../../utils/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 48px",
        background: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <SectionHeading
          accent="#264653"
          subtitle="Technologies, frameworks, and tools I work with daily"
        >
          Technical Skills
        </SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories.map((cat) => (
            <Card
              key={cat.id}
              variant="accent"
              accent={cat.color}
              hoverable
              padding="24px"
            >
              {/* ── Category header ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: cat.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: cat.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* ── Skill pills ── */}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cat.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} color={cat.color} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
