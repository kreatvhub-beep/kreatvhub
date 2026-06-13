"use client";

import React from "react";
import { Users, Briefcase, Award, Building } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Users size={28} color="var(--primary)" />,
      value: "5,000+",
      label: "Students Trained",
      description: "Successfully upskilled",
    },
    {
      icon: <Briefcase size={28} color="var(--accent)" />,
      value: "98.4%",
      label: "Placement Rate",
      description: "With top tech firms",
    },
    {
      icon: <Building size={28} color="var(--secondary)" />,
      value: "150+",
      label: "Hiring Partners",
      description: "Direct tie-ups in Pune",
    },
    {
      icon: <Award size={28} color="var(--primary)" />,
      value: "15+",
      label: "Certifications",
      description: "Google, Meta, Hubspot",
    },
  ];

  return (
    <section className="section section-alt" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-glass"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                background: "var(--bg-tertiary)",
              }}
            >
              <div
                className="flex-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border-glass)",
                  alignSelf: "flex-start",
                }}
              >
                {stat.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "2rem", fontWeight: "900", color: "var(--text-primary)" }}>{stat.value}</h3>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-primary)", marginTop: "0.25rem" }}>{stat.label}</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.1rem" }}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
