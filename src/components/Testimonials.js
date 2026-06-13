"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list = [
    {
      name: "Rohan Deshmukh",
      role: "SEO Analyst at Cognizant",
      comment: "PIIDM completely transformed my career path! Coming from a non-technical background, I was nervous about digital marketing. The SEO module was so hands-on; we audited active client sites. The placement cell lined up 3 interviews, and I landed my job at Cognizant before even receiving my final certificate!",
      rating: 5,
    },
    {
      name: "Sneha Shinde",
      role: "Performance Marketer at Zebra Digital Agency",
      comment: "The Meta Ads and Google Ads sessions are gold. Our trainer made us spend active budgets on live client accounts, which gave me the confidence to handle high-budget campaigns. I learned advanced pixel tracking, CBO, and AI copy generation. Highly recommend the Gen-AI powered course!",
      rating: 5,
    },
    {
      name: "Amit Kulkarni",
      role: "Freelance WordPress Developer",
      comment: "I joined the 3-week WordPress module. Today, I build eCommerce stores for global clients. The training teaches you real integration (SMTP setups, speed indexing, Elementor Pro layouts). The trainers are agency founders who explain things practically rather than just explaining slides.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section">
      <div className="glow-spot" style={{ top: "30%", left: "15%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid-cols-2" style={{ alignItems: "center", gap: "4rem" }}>
          {/* Left: Overall Trust Rating */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <span className="section-tag">Success Stories</span>
            <h2>Loved by 5000+ Students & Career Changers</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7" }}>
              Our students get placed in top agencies, global IT corporations, and start their own freelancing businesses. Read their real, verified feedback.
            </p>

            {/* Google review summary card */}
            <div
              className="card-glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem",
                alignSelf: "flex-start",
                background: "var(--bg-secondary)",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#fff",
                  color: "#ea4335",
                  fontWeight: "900",
                  fontSize: "1.75rem",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              >
                G
              </div>
              <div>
                <div style={{ display: "flex", gap: "0.25rem", color: "var(--primary)", marginBottom: "0.25rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" />
                  ))}
                </div>
                <h4 style={{ fontWeight: "800" }}>4.9/5 Average Rating</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Based on 1,280+ verified Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Testimonial Slider */}
          <div
            className="card-glass"
            style={{
              padding: "3rem",
              background: "rgba(18, 20, 28, 0.8)",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              {/* Quote icon & Rating */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.2rem", color: "var(--primary)" }}>
                  {[...Array(list[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--primary)" />
                  ))}
                </div>
                <Quote size={36} color="var(--primary)" style={{ opacity: 0.15 }} />
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  fontStyle: "italic",
                  color: "var(--text-primary)",
                  marginBottom: "2rem",
                }}
              >
                "{list[currentIndex].comment}"
              </p>
            </div>

            {/* Reviewer Details and Navigation */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-glass)",
              }}
            >
              <div>
                <h4 style={{ fontWeight: "800" }}>{list[currentIndex].name}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{list[currentIndex].role}</p>
              </div>

              {/* Nav Buttons */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={handlePrev}
                  className="flex-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-glass)",
                    color: "var(--text-primary)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-glass)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-glass)",
                    color: "var(--text-primary)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-glass)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
