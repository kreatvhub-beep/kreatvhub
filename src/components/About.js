"use client";

import React from "react";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about-us" className="section">
      <div className="glow-spot" style={{ top: "20%", left: "-10%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid-cols-2" style={{ alignItems: "center", gap: "4rem" }}>
          {/* Left Column: Title and Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <span className="section-tag">ABOUT US</span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--text-primary)", textTransform: "uppercase" }}>
              ABOUT <span style={{ color: "var(--primary)" }}>KREATV HUB</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7" }}>
              KreatvHub Institute is a premier learning destination for creative minds. We provide hands-on training by industry experts with a focus on practical learning and career development.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7" }}>
              Our courses are carefully structured to bridge the gap between creative passion and commercial success, ensuring our graduates enter the job market with an elite portfolio.
            </p>
          </div>

          {/* Right Column: Mission and Vision Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Mission Card */}
            <div
              className="card-glass"
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "2rem",
                background: "var(--bg-secondary)",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(124, 58, 237, 0.1)",
                  color: "var(--primary)",
                  flexShrink: 0,
                }}
              >
                <Target size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  OUR MISSION
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  To empower creative individuals with skills, knowledge, and opportunities to build successful careers in the creative industry.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="card-glass"
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "2rem",
                background: "var(--bg-secondary)",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(124, 58, 237, 0.1)",
                  color: "var(--primary)",
                  flexShrink: 0,
                }}
              >
                <Eye size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  OUR VISION
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  To be the most trusted creative education brand recognized worldwide for excellence, innovation, and placement results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
