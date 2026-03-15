// ──────────────────────────────────────────
//  About.jsx  –  Hero / Profile section
// ──────────────────────────────────────────

import { profile, stats } from "../../utils/data";
import Button from "../common/Button";
import Card from "../common/Card";
import StatCard from "../common/StatCard";

const contactRows = [
  { icon: "✉", label: "Email", value: profile.email },
  { icon: "📞", label: "Phone", value: profile.phone },
  { icon: "📍", label: "Location", value: profile.location },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "72px 48px 80px",
        background: "#F7F3ED",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative background letter ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-20px",
          top: "0px",
          fontFamily: "'Playfair Display', serif",
          fontSize: "260px",
          fontWeight: 700,
          color: "#E85D04",
          opacity: 0.05,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        G
      </div>

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Status badge ── */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#E85D0415",
            border: "1px solid #E85D0430",
            borderRadius: "20px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              background: "#2A9D8F",
              borderRadius: "50%",
              flexShrink: 0,
              animation: "blink 2s ease infinite",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#E85D04",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Open to new opportunities
          </span>
        </div>

        {/* ── Name + Summary + Contact Card ── */}
        <div
          style={{
            display: "flex",
            gap: "56px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left — name, tagline, summary, CTA */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 700,
                color: "#1A1510",
                lineHeight: 1.05,
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              {profile.name}
            </h1>

            <div
              style={{
                fontSize: "18px",
                color: "#E85D04",
                fontWeight: 600,
                marginBottom: "22px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {profile.tagline}
            </div>

            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.85,
                color: "#5A4A3A",
                maxWidth: "540px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {profile.summary}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${profile.email}`}
                icon={<span>✉</span>}
              >
                Get in Touch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Right — contact card */}
          <Card
            variant="raised"
            padding="28px"
            style={{ minWidth: "240px", flexShrink: 0 }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#1A1510",
                marginBottom: "18px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Contact
            </div>

            {contactRows.map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#F7F3ED",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#9C8B7A",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "12.5px",
                      color: "#1A1510",
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                      marginTop: "2px",
                    }}
                  >
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* ── Stats row ── */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "52px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s) => (
            <StatCard
              key={s.label}
              value={s.value}
              label={s.label}
              color={s.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
