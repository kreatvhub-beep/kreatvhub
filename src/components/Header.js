"use client";

import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`header-glass ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <a href="#" className="flex-center" style={{ gap: "0.5rem", fontWeight: "900", fontSize: "1.5rem" }}>
            <GraduationCap size={32} color="var(--primary)" />
            <span>
              PII<span style={{ color: "var(--primary)" }}>DM</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  transition: "var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="desktop-nav-cta" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: "0.6rem 1.25rem", borderRadius: "var(--radius-sm)", fontSize: "0.9rem" }}>
              Join Free Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: "none", color: "var(--text-primary)" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        style={{
          position: "fixed",
          top: "var(--header-height)",
          left: 0,
          width: "100%",
          height: "calc(100vh - var(--header-height))",
          backgroundColor: "var(--bg-primary)",
          zIndex: 98,
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "1.5rem",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform var(--transition-normal)",
          borderTop: "1px solid var(--border-glass)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-glass)",
              paddingBottom: "0.75rem",
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          Join Free Demo
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-nav-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
