"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "About Us", href: "#about-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Placement", href: "#partners" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`header-glass ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", flexDirection: "column", gap: "0rem" }}>
            <span style={{ fontWeight: "950", fontSize: "1.6rem", color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: "1" }}>
              KREATV<span style={{ color: "var(--primary)" }}>HUB</span>
            </span>
            <span style={{ fontSize: "0.55rem", fontWeight: "800", color: "var(--text-secondary)", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.1rem" }}>
              institute
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                  transition: "var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text-primary)")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-nav-cta" style={{ display: "flex", alignItems: "center" }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: "0.6rem 1.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.85rem",
                fontWeight: "800",
                letterSpacing: "0.02em",
                borderRadius: "4px",
                textTransform: "uppercase",
              }}
            >
              ENROLL NOW
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
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "var(--text-primary)",
              borderBottom: "1.5px solid var(--border-glass)",
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
          style={{ width: "100%", marginTop: "1rem", borderRadius: "4px" }}
        >
          ENROLL NOW
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
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
