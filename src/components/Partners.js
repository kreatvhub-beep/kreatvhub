"use client";

import React from "react";

export default function Partners() {
  const partners = [
    { name: "DDB°", color: "#e11d48", fontStyle: "italic", weight: "900" },
    { name: "technicolor", color: "#3b82f6", fontStyle: "normal", weight: "800" },
    { name: "Red Bull", color: "#1e3a8a", fontStyle: "normal", weight: "900" },
    { name: "TCS", color: "#2563eb", fontStyle: "normal", weight: "700" },
    { name: "BYJU'S", color: "#8b5cf6", fontStyle: "normal", weight: "800" },
    { name: "digit insurance", color: "#f59e0b", fontStyle: "italic", weight: "800" },
  ];

  return (
    <section className="section" style={{ padding: "4rem 0" }}>
      <div className="container">
        {/* Title */}
        <h3
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
          }}
        >
          OUR PLACEMENT PARTNERS
        </h3>

        {/* Partners Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-center"
              style={{
                padding: "0.5rem 1.5rem",
                opacity: 0.7,
                transition: "opacity var(--transition-fast)",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: partner.weight,
                  color: partner.color,
                  fontStyle: partner.fontStyle,
                  letterSpacing: "-0.03em",
                }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
