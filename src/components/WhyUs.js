"use client";

import React from "react";
import { Users, BookOpen, Presentation, FolderOpen, Briefcase, Award } from "lucide-react";

export default function WhyUs() {
  const items = [
    { icon: <Users size={28} />, title: "Industry Expert Trainers" },
    { icon: <BookOpen size={28} />, title: "Practical Training" },
    { icon: <Presentation size={28} />, title: "Live Projects" },
    { icon: <FolderOpen size={28} />, title: "Portfolio Development" },
    { icon: <Briefcase size={28} />, title: "Internship Opportunities" },
    { icon: <Award size={28} />, title: "100% Placement Assistance" },
  ];

  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrapper">
          <span className="section-tag">Why Choose Us</span>
          <h2>WHY CHOOSE KREATV HUB</h2>
          <p className="section-desc">We bridge the gap between creative learning and career opportunities.</p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-center"
              style={{
                flexDirection: "column",
                gap: "1rem",
                padding: "1.5rem 1rem",
                background: "#ffffff",
                border: "1.5px solid var(--border-glass)",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(124, 58, 237, 0.08)",
                  color: "var(--primary)",
                }}
              >
                {item.icon}
              </div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "var(--text-primary)", lineHeight: "1.3" }}>
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
