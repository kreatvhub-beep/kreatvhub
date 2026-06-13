"use client";

import React from "react";
import { ArrowRight, Star, Award, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-height) + 4rem)", paddingBottom: "6rem" }}>
      {/* Decorative Glow Spots */}
      <div className="glow-spot" style={{ top: "10%", left: "-10%" }}></div>
      <div className="glow-spot-secondary" style={{ bottom: "10%", right: "-10%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid-cols-2" style={{ alignItems: "center" }}>
          {/* Left Column: Text & Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Award Badge */}
            <div
              className="flex-center"
              style={{
                alignSelf: "flex-start",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "100px",
                background: "rgba(252, 193, 1, 0.1)",
                border: "1px solid rgba(252, 193, 1, 0.2)",
                color: "var(--primary)",
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <Award size={16} />
              <span>Best Digital Marketing Institute in Pune</span>
            </div>

            {/* Main Title */}
            <h1>
              Master Digital Marketing & <span className="text-gradient-dual">Generative AI</span>
            </h1>

            {/* Subtitle */}
            <p style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: "1.7", maxWidth: "540px" }}>
              Accelerate your career with Pune's #1 performance marketing training program. Get 100% placement assurance, practical live projects, and 15+ industry-recognized certifications.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="#contact" className="btn btn-gradient">
                <span>Book Free Demo Class</span>
                <ArrowRight size={18} />
              </a>
              <a href="#courses" className="btn btn-secondary">
                <span>View Courses</span>
              </a>
            </div>

            {/* Trust Points */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                marginTop: "1.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-glass)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  className="flex-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-glass)",
                    color: "var(--primary)",
                  }}
                >
                  <Star size={20} fill="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>4.9/5 Rating</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>1,200+ Google Reviews</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  className="flex-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-glass)",
                    color: "var(--accent)",
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>100% Job Guarantee</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Or 100% Money Back</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="animated-float" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Main Glass Dashboard Card */}
            <div
              className="card-glass"
              style={{
                width: "100%",
                maxWidth: "480px",
                background: "rgba(18, 20, 28, 0.8)",
                padding: "2rem",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: "700" }}>Live Analytics</span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "800" }}>Student Growth</h3>
                </div>
                <div
                  className="flex-center"
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "50px",
                    background: "rgba(16, 185, 129, 0.1)",
                    color: "var(--success)",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                  }}
                >
                  +187% This Mo
                </div>
              </div>

              {/* Bar Chart Mock */}
              <div style={{ display: "flex", alignItems: "flex-end", height: "140px", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {[30, 45, 35, 60, 50, 80, 95].map((height, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: index === 6 ? "var(--primary)" : "linear-gradient(to top, var(--secondary), var(--accent))",
                      borderRadius: "6px 6px 0 0",
                      position: "relative",
                      transition: "height var(--transition-slow)",
                    }}
                  ></div>
                ))}
              </div>

              {/* Stats Footer Grid */}
              <div className="grid-cols-2" style={{ gap: "1rem", borderTop: "1px solid var(--border-glass)", paddingTop: "1.5rem" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>Total Enrolled</span>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--primary)" }}>5,480+ Students</h4>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>Placement Rate</span>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--accent)" }}>98.4% Achieved</h4>
                </div>
              </div>
            </div>

            {/* Floating Bubble 1: Active Users */}
            <div
              className="card-glass"
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                padding: "0.75rem 1.25rem",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(18, 20, 28, 0.9)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex-center" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(6, 182, 212, 0.15)", color: "var(--accent)" }}>
                <Users size={16} />
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase" }}>Batch Capacity</p>
                <h5 style={{ fontSize: "0.9rem", fontWeight: "800" }}>12/15 Seats Left</h5>
              </div>
            </div>

            {/* Floating Bubble 2: Next Batch */}
            <div
              className="card-glass"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                padding: "0.75rem 1.25rem",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(18, 20, 28, 0.9)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex-center" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(252, 193, 1, 0.15)", color: "var(--primary)" }}>
                <Award size={16} />
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "700", textTransform: "uppercase" }}>Next New Batch</p>
                <h5 style={{ fontSize: "0.9rem", fontWeight: "800", color: "var(--primary)" }}>Starts Monday!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
