"use client";

import React from "react";
import { Award, DollarSign, UserCheck, Settings, BookOpen, Smile } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      icon: <Award size={24} color="var(--primary)" />,
      title: "100% Placement Assurance",
      desc: "Our active corporate placement cell schedules interviews with top advertising agencies and IT firms in Pune until you get hired.",
    },
    {
      icon: <DollarSign size={24} color="var(--accent)" />,
      title: "Live Ad Budget Allocation",
      desc: "Don't just learn theory. We provide you with real advertising budgets to spend on live Google & Meta campaigns in class.",
    },
    {
      icon: <UserCheck size={24} color="var(--secondary)" />,
      title: "Mentorship by Agency Owners",
      desc: "Learn directly from active digital marketers and agency founders who share actual client case studies, not outdated textbooks.",
    },
    {
      icon: <Settings size={24} color="var(--primary)" />,
      title: "Free Tools Suite ($1,500+ Value)",
      desc: "Get free premium access to marketing tools like Elementor Pro, hostings, SEO plugins, and premium AI writing accounts during the course.",
    },
    {
      icon: <BookOpen size={24} color="var(--accent)" />,
      title: "Flexible Hybrid Learning",
      desc: "Choose between interactive offline classroom sessions at our FC Road centers or live, interactive online classes from your home.",
    },
    {
      icon: <Smile size={24} color="var(--secondary)" />,
      title: "1-on-1 Career Guidance",
      desc: "Work closely with our mentors to build your professional portfolio, optimize your LinkedIn profile, and prepare for high-pressure interviews.",
    },
  ];

  return (
    <section id="why-us" className="section section-alt">
      <div className="glow-spot" style={{ bottom: "-10%", right: "15%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Why PIIDM?</span>
          <h2>The PIIDM Practical Training Advantage</h2>
          <p className="section-desc">Traditional colleges teach concepts. We teach skills that generate revenue. Here is what makes us Pune's top-rated institute.</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid-cols-3" style={{ gap: "2rem" }}>
          {points.map((point, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-glass)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-glass)",
                  alignSelf: "flex-start",
                }}
              >
                {point.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "0.5rem" }}>{point.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
