"use client";

import React from "react";
import { ArrowRight, Star, Users, Award, BookOpen, Building } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "1000+", label: "Students Trained", icon: <Users size={16} color="var(--primary)" /> },
    { value: "95%", label: "Placement Rate", icon: <Award size={16} color="var(--primary)" /> },
    { value: "50+", label: "Industry Experts", icon: <BookOpen size={16} color="var(--primary)" /> },
    { value: "100+", label: "Companies Hired", icon: <Building size={16} color="var(--primary)" /> },
  ];

  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-height) + 3rem)", paddingBottom: "5rem" }}>
      {/* Glow Spots */}
      <div className="glow-spot" style={{ top: "10%", left: "-5%" }}></div>
      <div className="glow-spot-secondary" style={{ bottom: "10%", right: "-5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid-cols-2" style={{ alignItems: "center", gap: "3rem" }}>
          
          {/* Left Column: Headings & CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "950", lineHeight: "1.1", color: "var(--text-primary)" }}>
              LEARN.<br />
              <span style={{ color: "var(--primary)" }}>CREATE.</span><br />
              EARN.
            </h1>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "480px" }}>
              KreatvHub Institute is your creative launchpad. Learn industry-relevant skills and build a career in the creative world.
            </p>

            {/* Hero CTA buttons */}
            <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
              <a 
                href="#contact" 
                className="btn btn-primary" 
                style={{ 
                  borderRadius: "4px", 
                  padding: "0.9rem 2rem",
                  fontSize: "0.9rem",
                  fontWeight: "800"
                }}
              >
                <span>ENROLL NOW</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="#contact" 
                className="btn btn-secondary" 
                style={{ 
                  borderRadius: "4px", 
                  padding: "0.9rem 2rem",
                  fontSize: "0.9rem",
                  fontWeight: "800"
                }}
              >
                <span>FREE CAREER COUNSELING</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(2, 1fr)", 
                gap: "1.5rem", 
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1.5px solid var(--border-glass)" 
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div 
                    className="flex-center" 
                    style={{ 
                      width: "36px", 
                      height: "36px", 
                      borderRadius: "50%", 
                      background: "rgba(124, 58, 237, 0.08)",
                      color: "var(--primary)",
                      flexShrink: 0
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--text-primary)", lineHeight: "1.2" }}>{stat.value}</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Work Space Mockup Graphic */}
          <div className="animated-float" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div 
              style={{
                width: "100%",
                maxWidth: "460px",
                height: "300px",
                background: "#0f172a",
                borderRadius: "var(--radius-md)",
                border: "4px solid #334155",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Top Bar */}
              <div style={{ background: "#1e293b", height: "30px", display: "flex", alignItems: "center", padding: "0 1rem", gap: "0.4rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }}></div>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#eab308" }}></div>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }}></div>
              </div>
              
              {/* Workspace Inner */}
              <div 
                style={{ 
                  flex: 1, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  background: "radial-gradient(circle, #3b0764 0%, #0f172a 100%)",
                  position: "relative"
                }}
              >
                {/* Simulated Workspace Art */}
                <div 
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    border: "2px dashed rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "spin-slow 20s linear infinite"
                  }}
                >
                  <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(124,58,237,0.2)" }}></div>
                </div>
                
                {/* Tag Overlay */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    padding: "0.4rem 1rem",
                    borderRadius: "50px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(5px)",
                    fontSize: "0.85rem",
                    fontWeight: "800",
                    color: "#ffffff"
                  }}
                >
                  CREATIVE STUDIO
                </div>
              </div>
            </div>

            {/* Floating Software Badges */}
            {/* Premiere Pro */}
            <div 
              style={{
                position: "absolute",
                top: "10px",
                left: "-20px",
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "#00005c",
                border: "2.5px solid #00f3ff",
                color: "#00f3ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "1.1rem",
                boxShadow: "0 8px 20px rgba(0,243,255,0.2)"
              }}
            >
              Pr
            </div>
            
            {/* Photoshop */}
            <div 
              style={{
                position: "absolute",
                top: "-25px",
                right: "30px",
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "#001c3d",
                border: "2.5px solid #00c8ff",
                color: "#00c8ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "1.1rem",
                boxShadow: "0 8px 20px rgba(0,200,ff,0.2)"
              }}
            >
              Ps
            </div>

            {/* After Effects */}
            <div 
              style={{
                position: "absolute",
                bottom: "30px",
                left: "-30px",
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "#20003b",
                border: "2.5px solid #d300ff",
                color: "#d300ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "1.1rem",
                boxShadow: "0 8px 20px rgba(211,0,255,0.2)"
              }}
            >
              Ae
            </div>

            {/* Illustrator */}
            <div 
              style={{
                position: "absolute",
                bottom: "-15px",
                right: "-15px",
                width: "44px",
                height: "44px",
                borderRadius: "8px",
                background: "#331c00",
                border: "2.5px solid #ff9f00",
                color: "#ff9f00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "1.1rem",
                boxShadow: "0 8px 20px rgba(255,159,0,0.2)"
              }}
            >
              Ai
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
