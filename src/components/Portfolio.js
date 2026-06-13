"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "graphic", name: "Graphic Design" },
    { id: "video", name: "Video Editing" },
    { id: "motion", name: "Motion Graphics" },
    { id: "vfx", name: "VFX" },
  ];

  const items = [
    {
      id: 1,
      category: "graphic",
      title: "Fast Food Branding & Pack",
      author: "By Riya Sharma",
      gradient: "linear-gradient(135deg, #fbcfe8 0%, #fda4af 100%)",
    },
    {
      id: 2,
      category: "video",
      title: "Fast Lane Cinematic Trailer",
      author: "By Arjun Mehta",
      gradient: "linear-gradient(135deg, #a5f3fc 0%, #38bdf8 100%)",
    },
    {
      id: 3,
      category: "motion",
      title: "3D Car Animation Reel",
      author: "By Neha Verma",
      gradient: "linear-gradient(135deg, #fef08a 0%, #facc15 100%)",
    },
    {
      id: 4,
      category: "vfx",
      title: "CGI Cartoon Character Scene",
      author: "By Karan Singh",
      gradient: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 100%)",
    },
    {
      id: 5,
      category: "vfx",
      title: "Epic Dinosaur VFX Scene",
      author: "By Sameer K.",
      gradient: "linear-gradient(135deg, #bbf7d0 0%, #4ade80 100%)",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section section-alt">
      <div className="glow-spot-secondary" style={{ top: "30%", left: "-10%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <div className="section-title-wrapper">
          <span className="section-tag">Student Work Showcase</span>
          <h2>STUDENT WORK SHOWCASE</h2>
          <p className="section-desc">Explore practical designs and reels built by our students during their coursework classes.</p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="btn"
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "100px",
                fontSize: "0.85rem",
                boxShadow: "none",
                border: filter === cat.id ? "none" : "1.5px solid var(--border-glass)",
                backgroundColor: filter === cat.id ? "var(--primary)" : "#ffffff",
                color: filter === cat.id ? "#ffffff" : "var(--text-secondary)",
                fontWeight: "700",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-glass"
              style={{
                padding: "0",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1.5px solid var(--border-glass)",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
              }}
            >
              {/* Image Box Placeholder with Gradient */}
              <div
                style={{
                  height: "160px",
                  background: item.gradient,
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Arrow up right float icon */}
                <div
                  className="flex-center"
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.9)",
                    color: "var(--primary)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
                <span style={{ fontWeight: "900", color: "#1e293b", opacity: 0.15, fontSize: "4rem" }}>KREATV</span>
              </div>

              {/* Card Details */}
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-primary)" }}>{item.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{item.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-secondary">
            VIEW MORE WORK
          </button>
        </div>
      </div>
    </section>
  );
}
