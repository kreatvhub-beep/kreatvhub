"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      name: "Riya Sharma",
      role: "Graphic Designer",
      comment: "KreatvHub helped me turn my creativity into a career. The training and support are amazing!",
      initial: "R",
    },
    {
      name: "Arjun Mehta",
      role: "Video Editor",
      comment: "The practical approach and live projects gave me confidence and got me placed in a top company.",
      initial: "A",
    },
    {
      name: "Neha Verma",
      role: "Motion Designer",
      comment: "From learning basics to creating industry-level motion graphics, KreatvHub has been an incredible journey.",
      initial: "N",
    },
    {
      name: "Karan Singh",
      role: "VFX Artist",
      comment: "The VFX course is top-notch. Faculty and guidance are excellent.",
      initial: "K",
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="glow-spot" style={{ top: "20%", left: "-5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-title-wrapper">
          <span className="section-tag">Testimonials</span>
          <h2>SUCCESS STORIES</h2>
          <p className="section-desc">See how our graduates transformed their skills and achieved placement success.</p>
        </div>

        <div className="grid-cols-2" style={{ alignItems: "stretch", gap: "3rem" }}>
          {/* Left: 4 Testimonial Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{
                  padding: "1.5rem",
                  background: "#ffffff",
                  border: "1.5px solid var(--border-glass)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "var(--radius-md)",
                  minHeight: "180px",
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: "flex", gap: "0.15rem", color: "var(--accent)", marginBottom: "0.75rem" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--accent)" stroke="none" />
                    ))}
                  </div>
                  <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-secondary)", lineHeight: "1.5", marginBottom: "1rem" }}>
                    &ldquo;{story.comment}&rdquo;
                  </p>
                </div>

                {/* Profile row */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    className="flex-center"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(124,58,237,0.1)",
                      color: "var(--primary)",
                      fontWeight: "900",
                      fontSize: "0.85rem",
                    }}
                  >
                    {story.initial}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: "900", color: "var(--text-primary)" }}>{story.name}</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Purple Stat Box */}
          <div
            className="card-glass flex-center"
            style={{
              background: "var(--primary)",
              color: "#ffffff",
              padding: "3rem",
              borderRadius: "var(--radius-md)",
              flexDirection: "column",
              textAlign: "center",
              gap: "2.5rem",
              justifyContent: "center",
              borderColor: "var(--primary)",
              boxShadow: "0 15px 30px rgba(124, 58, 237, 0.25)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "3rem", fontWeight: "950", color: "#ffffff", lineHeight: "1" }}>500+</h3>
              <p style={{ fontSize: "1rem", fontWeight: "800", opacity: 0.9, marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Students Placed
              </p>
            </div>

            <div style={{ width: "60px", height: "1.5px", background: "rgba(255, 255, 255, 0.3)" }}></div>

            <div>
              <h3 style={{ fontSize: "3rem", fontWeight: "950", color: "#ffffff", lineHeight: "1" }}>100+</h3>
              <p style={{ fontSize: "1rem", fontWeight: "800", opacity: 0.9, marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Success Stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
