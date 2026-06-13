"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Success Stories", href: "/success-stories" },
  ];

  const coursesLinks = [
    { name: "Graphic Design", href: "/courses" },
    { name: "Video Editing", href: "/courses" },
    { name: "Motion Graphics", href: "/courses" },
    { name: "VFX", href: "/courses" },
    { name: "AI Tools for Creators", href: "/courses" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/portfolio" },
    { name: "FAQs", href: "/contact" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8", paddingTop: "5rem", paddingBottom: "2.5rem", borderTop: "1px solid #1e293b" }}>
      <div className="container">
        
        {/* Top Footer grid: 5 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr",
            gap: "2.5rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid #1e293b",
            marginBottom: "2rem",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "0rem" }}>
              <span style={{ fontWeight: "950", fontSize: "1.5rem", color: "#ffffff", letterSpacing: "-0.04em", lineHeight: "1" }}>
                KREATV<span style={{ color: "var(--primary)" }}>HUB</span>
              </span>
              <span style={{ fontSize: "0.5rem", fontWeight: "800", color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.1rem" }}>
                institute
              </span>
            </Link>
            
            <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.6" }}>
              KreatvHub Institute is your creative launchpad in Pune. Learn industry-relevant skills and build a career in the creative world.
            </p>
            
            <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
              Learn. Create. Earn.<br />
              © 2026 KreatvHub Institute.<br />
              All Rights Reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link, idx) => (
                <Link key={idx} href={link.href} style={{ fontSize: "0.85rem", color: "#94a3b8", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Courses */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Courses</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {coursesLinks.map((link, idx) => (
                <Link key={idx} href={link.href} style={{ fontSize: "0.85rem", color: "#94a3b8", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Resources */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {resourcesLinks.map((link, idx) => (
                <Link key={idx} href={link.href} style={{ fontSize: "0.85rem", color: "#94a3b8", transition: "color var(--transition-fast)" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 5: Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "0.85rem", fontWeight: "800", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.85rem", color: "#94a3b8" }}>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+919876543210" style={{ color: "#94a3b8" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>
                  +91 98765 43210
                </a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@kreatvhub.com" style={{ color: "#94a3b8" }} onMouseEnter={(e) => (e.target.style.color = "#ffffff")} onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}>
                  info@kreatvhub.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", alignItems: "center", fontSize: "0.8rem", color: "#64748b" }}>
          <p>© 2026 KreatvHub Institute. All Rights Reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/" onMouseEnter={(e) => (e.target.style.color = "#94a3b8")} onMouseLeave={(e) => (e.target.style.color = "#64748b")}>Privacy Policy</Link>
            <Link href="/" onMouseEnter={(e) => (e.target.style.color = "#94a3b8")} onMouseLeave={(e) => (e.target.style.color = "#64748b")}>Terms of Service</Link>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919876543210?text=Hi%20KreatvHub,%20I'm%20interested%20in%20learning%20more%20about%20your%20creative%20courses%20in%20Pune."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} fill="#fff" color="#25d366" />
      </a>

      <style jsx global>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
