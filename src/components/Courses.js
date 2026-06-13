"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "GRAPHIC DESIGN",
      desc: "Learn design principles, branding, and visual communication.",
      badges: ["Ps", "Ai"],
      colors: { bg: "#fff7ed", border: "#ffedd5", text: "#ea580c" },
    },
    {
      title: "VIDEO EDITING",
      desc: "Master video editing, color grading, sound, and storytelling.",
      badges: ["Pr"],
      colors: { bg: "#f0fdf4", border: "#dcfce7", text: "#16a34a" },
    },
    {
      title: "MOTION GRAPHICS",
      desc: "Create stunning motion graphics and visual effects.",
      badges: ["Ae"],
      colors: { bg: "#faf5ff", border: "#f3e8ff", text: "#9333ea" },
    },
    {
      title: "VFX",
      desc: "Learn visual effects, compositing, and CGI techniques.",
      badges: ["VFX"],
      colors: { bg: "#ecfeff", border: "#cffafe", text: "#0891b2" },
    },
    {
      title: "AI TOOLS FOR CREATORS",
      badges: ["AI"],
      desc: "Explore AI tools and integrate them into your creative workflow.",
      colors: { bg: "#fef2f2", border: "#fee2e2", text: "#dc2626" },
    },
  ];

  return (
    <section id="courses" className="section">
      <div className="glow-spot-secondary" style={{ top: "30%", right: "-10%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Courses We Offer</span>
          <h2 style={{ textTransform: "uppercase" }}>OUR COURSES</h2>
          <p className="section-desc">Practical project-based curriculums structured for placement in the industry.</p>
        </div>

        {/* Courses Flex/Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 1.5rem",
                background: "#ffffff",
                border: "1.5px solid var(--border-glass)",
                borderRadius: "var(--radius-md)",
                justifyContent: "space-between",
                minHeight: "280px",
              }}
            >
              {/* Badge Icons Box */}
              <div
                className="flex-center"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "12px",
                  background: course.colors.bg,
                  border: `2px solid ${course.colors.border}`,
                  color: course.colors.text,
                  fontWeight: "900",
                  fontSize: "1.25rem",
                  marginBottom: "1.5rem",
                  gap: "0.25rem",
                }}
              >
                {course.badges.map((b, i) => (
                  <span key={i}>{b}</span>
                ))}
              </div>

              {/* Title & Desc */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--text-primary)" }}>{course.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: "1.5" }}>{course.desc}</p>
              </div>

              {/* Apply / Learn Link */}
              <a
                href="#contact"
                className="flex-center"
                style={{
                  gap: "0.4rem",
                  marginTop: "1.5rem",
                  color: "var(--primary)",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
