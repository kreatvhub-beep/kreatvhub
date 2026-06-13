"use client";

import React from "react";
import { Camera } from "lucide-react";

export default function Gallery() {
  const images = [
    { id: 1, label: "Design Lab 1", gradient: "linear-gradient(135deg, #a5f3fc 0%, #38bdf8 100%)", span: "span 1" },
    { id: 2, label: "Classroom Session", gradient: "linear-gradient(135deg, #fef08a 0%, #facc15 100%)", span: "span 2" },
    { id: 3, label: "Interactive VFX Lab", gradient: "linear-gradient(135deg, #c7d2fe 0%, #818cf8 100%)", span: "span 1" },
    { id: 4, label: "Student Collaboration", gradient: "linear-gradient(135deg, #fbcfe8 0%, #fda4af 100%)", span: "span 1" },
    { id: 5, label: "Award Ceremony", gradient: "linear-gradient(135deg, #bbf7d0 0%, #4ade80 100%)", span: "span 1" },
  ];

  return (
    <section id="gallery" className="section section-alt">
      <div className="glow-spot" style={{ top: "10%", left: "5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Explore Campus</span>
          <h2>INSTITUTE GALLERY</h2>
          <p className="section-desc">Take a look inside our high-tech labs, classroom sessions, and campus life at Pune.</p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="card-glass"
              style={{
                height: "180px",
                padding: "0",
                position: "relative",
                background: img.gradient,
                display: "flex",
                alignItems: "flex-end",
                cursor: "pointer",
                borderRadius: "var(--radius-md)",
              }}
            >
              {/* Overlay with details */}
              <div
                style={{
                  width: "100%",
                  padding: "1.25rem",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#ffffff",
                }}
              >
                <Camera size={16} color="var(--primary)" />
                <span style={{ fontSize: "0.9rem", fontWeight: "700" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-secondary">
            VIEW MORE PHOTOS
          </button>
        </div>
      </div>
    </section>
  );
}
