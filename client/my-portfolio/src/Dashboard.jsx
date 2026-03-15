// ──────────────────────────────────────────────────────────────
//  Dashboard.jsx  –  Main layout: Navbar + scrollable sections
// ──────────────────────────────────────────────────────────────

import { useState, useRef, useEffect, useCallback } from "react";

import { profile } from "./utils/data";
import Navbar from "./components/NavBar";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";

const SECTIONS = ["about", "skills", "experience", "achievements", "education"];

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("about");

  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    achievements: useRef(null),
    education: useRef(null),
  };

  // ── Scroll-spy via IntersectionObserver ──
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((key) => {
      const el = sectionRefs[key].current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(key);
        },
        { threshold: 0.35, rootMargin: "-64px 0px 0px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Smooth scroll to section ──
  const handleNavigate = useCallback((key) => {
    setActiveSection(key);
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="dashboard-root">
      {/* ── Fixed Navbar ── */}
      <Navbar
        active={activeSection}
        onNavigate={handleNavigate}
        profile={profile}
      />

      {/* ── Scrollable main content ── */}
      <main style={{ paddingTop: "64px" }}>
        <div ref={sectionRefs.about}>
          <About />
        </div>
        <div ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div ref={sectionRefs.experience}>
          <Experience />
        </div>
        <div ref={sectionRefs.achievements}>
          <Achievements />
        </div>
        <div ref={sectionRefs.education}>
          <Education />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#1A1510",
          color: "#9C8B7A",
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
        }}
      >
        <div>
          © 2025{" "}
          <span style={{ color: "#E85D04", fontWeight: 700 }}>
            {profile.name}
          </span>{" "}
          · All rights reserved
        </div>

        {/* Footer nav links */}
        <div style={{ display: "flex", gap: "20px" }}>
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleNavigate(s)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === s ? "#E85D04" : "#9C8B7A",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: activeSection === s ? 700 : 400,
                fontFamily: "'DM Sans', sans-serif",
                textTransform: "capitalize",
                transition: "color 0.2s",
                padding: 0,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
