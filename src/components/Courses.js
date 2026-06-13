"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, Award, CheckCircle, Flame } from "lucide-react";

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "full", name: "Master Programs" },
    { id: "short", name: "Specialized Modules" },
    { id: "creative", name: "Creative Suite" },
  ];

  const courseList = [
    {
      id: 1,
      category: "full",
      badge: "Popular & Gen-AI Powered",
      title: "Advanced Digital Marketing Masterclass",
      desc: "Our flagship comprehensive program covering SEO, social media, content marketing, web design, and 15+ Gen-AI tools (ChatGPT, Midjourney) for modern marketers.",
      duration: "2.5 Months",
      format: "Classroom & Online",
      certifications: "15+ International Certs",
      highlights: ["Hands-on Live Project Training", "Guaranteed Internships & Placements", "1-on-1 Mentoring session"],
      popular: true,
    },
    {
      id: 2,
      category: "short",
      badge: "Highly Demanded",
      title: "Performance Marketing & Media Buying",
      desc: "Learn to design, track, and optimize high-converting ad campaigns on Google Ads, Meta Ads (Instagram/Facebook), LinkedIn Ads, and Tiktok/Snapchat Ads.",
      duration: "6 Weeks",
      format: "Live Interactive Only",
      certifications: "Google & Meta Blueprints",
      highlights: ["Budget Optimization Strategies", "Pixel & API Conversion Tracking", "A/B Testing Methodologies"],
      popular: false,
    },
    {
      id: 3,
      category: "short",
      badge: "SEO Specialization",
      title: "Search Engine Optimization (SEO) Masterclass",
      desc: "Become an SEO expert. Dominate search rankings with On-Page, Off-Page, Technical SEO, Keyword Research, Competitor Analysis, and Google Search Console audits.",
      duration: "4 Weeks",
      format: "Classroom & Online",
      certifications: "Google Search & Semrush Certs",
      highlights: ["Live Website Auditing", "Backlink Strategy Development", "Schema Markup Setup"],
      popular: false,
    },
    {
      id: 4,
      category: "creative",
      badge: "No Code Design",
      title: "WordPress Web Designing & Development",
      desc: "Build professional, lightning-fast business websites, blogs, and WooCommerce e-commerce stores from scratch without touching a single line of code.",
      duration: "3 Weeks",
      format: "Classroom & Online",
      certifications: "PIIDM Web Design Certificate",
      highlights: ["Elementor Pro Training", "Domain & Hosting Integration", "Speed & SEO Optimization"],
      popular: false,
    },
    {
      id: 5,
      category: "creative",
      badge: "Creative Skills",
      title: "Graphic Design & Content Writing",
      desc: "Master Canva, Photoshop basics, and AI graphic tools to create eye-catching visual content. Learn copywriting and content writing frameworks that convert.",
      duration: "4 Weeks",
      format: "Classroom & Online",
      certifications: "Content & Design Certification",
      highlights: ["Ad Creative Designing", "AI Copywriting Frameworks", "Portfolio Creation Support"],
      popular: false,
    },
  ];

  const filteredCourses = activeFilter === "all" ? courseList : courseList.filter((c) => c.category === activeFilter);

  return (
    <section id="courses" className="section">
      <div className="glow-spot" style={{ top: "40%", right: "10%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Explore Courses</span>
          <h2>Our Professional Training Curriculums</h2>
          <p className="section-desc">Practical, project-based digital marketing programs designed by industry experts in Pune.</p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="btn"
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "100px",
                fontSize: "0.9rem",
                boxShadow: "none",
                border: activeFilter === cat.id ? "1px solid var(--primary)" : "1px solid var(--border-glass)",
                backgroundColor: activeFilter === cat.id ? "rgba(252, 193, 1, 0.12)" : "rgba(255,255,255,0.02)",
                color: activeFilter === cat.id ? "var(--primary)" : "var(--text-secondary)",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: course.popular ? "rgba(252, 193, 1, 0.3)" : "var(--border-glass)",
                boxShadow: course.popular ? "0 15px 35px rgba(252, 193, 1, 0.05)" : "none",
              }}
            >
              <div>
                {/* Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      color: course.popular ? "var(--primary)" : "var(--accent)",
                      background: course.popular ? "rgba(252, 193, 1, 0.1)" : "rgba(6, 182, 212, 0.1)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "50px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {course.badge}
                  </span>
                  {course.popular && (
                    <span className="flex-center" style={{ gap: "0.25rem", color: "var(--primary)", fontSize: "0.8rem", fontWeight: "700" }}>
                      <Flame size={14} fill="var(--primary)" /> Most Popular
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "0.75rem" }}>{course.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>{course.desc}</p>

                {/* Course Metadata Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    padding: "1.25rem",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-glass)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Calendar size={18} color="var(--primary)" />
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "600" }}>DURATION</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: "700" }}>{course.duration}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <BookOpen size={18} color="var(--accent)" />
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "600" }}>FORMAT</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: "700" }}>{course.format}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", gridColumn: "span 2" }}>
                    <Award size={18} color="var(--secondary)" />
                    <div>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: "600" }}>CERTIFICATIONS</p>
                      <p style={{ fontSize: "0.85rem", fontWeight: "700" }}>{course.certifications}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle size={16} color="var(--success)" />
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#contact" className="btn btn-secondary" style={{ flex: 1, padding: "0.75rem" }}>
                  Syllabus Info
                </a>
                <a href="#contact" className="btn btn-primary" style={{ flex: 1, padding: "0.75rem" }}>
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
