"use client";

import React from "react";
import { GraduationCap, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2 -2 2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6 -6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { icon: <InstagramIcon />, href: "https://instagram.com/piidm" },
    { icon: <FacebookIcon />, href: "https://facebook.com/piidm" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com/company/piidm" },
  ];

  const quickLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-glass)", paddingTop: "5rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Top Footer Section */}
        <div
          className="grid-cols-3"
          style={{
            paddingBottom: "3.5rem",
            borderBottom: "1px solid var(--border-glass)",
            marginBottom: "2rem",
            gap: "3rem",
          }}
        >
          {/* Col 1: Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <a href="#" className="flex-center" style={{ gap: "0.5rem", fontWeight: "900", fontSize: "1.5rem", alignSelf: "flex-start" }}>
              <GraduationCap size={32} color="var(--primary)" />
              <span>
                PII<span style={{ color: "var(--primary)" }}>DM</span>
              </span>
            </a>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Pune's leading practical-oriented digital marketing training academy. Learn agency operations, lead generation, and performance buying from active agency founders.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid var(--border-glass)",
                    color: "var(--text-secondary)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background = "rgba(252, 193, 1, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-glass)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h4 style={{ fontWeight: "800", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em", color: "var(--text-primary)" }}>Quick Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  style={{ fontSize: "0.95rem", color: "var(--text-secondary)", transition: "var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Address */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h4 style={{ fontWeight: "800", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em", color: "var(--text-primary)" }}>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
                <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  3rd Floor, Above FC Road Social, FC Road, Shivajinagar, Pune - 411005
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Phone size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                <a href="tel:+919607355073" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }} onMouseEnter={(e) => (e.target.style.color = "var(--primary)")} onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}>
                  +91 96073 55073
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Mail size={18} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@piidm.com" style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }} onMouseEnter={(e) => (e.target.style.color = "var(--primary)")} onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}>
                  info@piidm.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", alignItems: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
          <p>© 2026 PIIDM Academy. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" onMouseEnter={(e) => (e.target.style.color = "var(--text-secondary)")} onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}>Privacy Policy</a>
            <a href="#" onMouseEnter={(e) => (e.target.style.color = "var(--text-secondary)")} onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}>Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919607355073?text=Hi%20PIIDM,%20I'm%20interested%20in%20your%20Digital%20Marketing%20courses.%20Please%20send%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-widget"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="#fff" color="#25d366" />
      </a>
    </footer>
  );
}
