// ──────────────────────────────────────────────────────
//  Navbar.jsx  –  Fixed top nav with scroll-spy links
// ──────────────────────────────────────────────────────

import Button from "./common/Button";

const NAV_ITEMS = [
  { key: "about", label: "About", icon: "◉" },
  { key: "skills", label: "Skills", icon: "⚡" },
  { key: "experience", label: "Experience", icon: "💼" },
  { key: "achievements", label: "Awards", icon: "🏆" },
  { key: "education", label: "Education", icon: "🎓" },
];

export default function Navbar({ active, onNavigate, profile }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: "64px",
        background: "rgba(247,243,237,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid #E0D9CE",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        gap: "16px",
      }}
    >
      {/* ── Brand ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            background: "#E85D04",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "15px",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {profile.initials}
        </div>

        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#1A1510",
              lineHeight: 1.2,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#E85D04",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {profile.title}
          </div>
        </div>
      </div>

      {/* ── Nav Links ── */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          overflowX: "auto",
          flexShrink: 1,
        }}
      >
        {NAV_ITEMS.map(({ key, label, icon }) => (
          <Button
            key={key}
            variant="pill"
            size="sm"
            active={active === key}
            onClick={() => onNavigate(key)}
            icon={<span style={{ fontSize: "10px" }}>{icon}</span>}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* ── CTA Buttons ── */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexShrink: 0,
        }}
      >
        <Button
          variant="outline"
          size="sm"
          href={`mailto:${profile.email}`}
          icon={<span>✉</span>}
        >
          Email
        </Button>
        <Button
          variant="primary"
          size="sm"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Button>
      </div>
    </nav>
  );
}
