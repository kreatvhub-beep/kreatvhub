"use client";

import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2 -2 2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6 -6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const socials = [
    { icon: <FacebookIcon />, href: "https://facebook.com" },
    { icon: <InstagramIcon />, href: "https://instagram.com" },
    { icon: <YoutubeIcon />, href: "https://youtube.com" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="section section-alt" style={{ paddingBottom: "5rem" }}>
      <div className="container">
        <div className="grid-cols-3" style={{ gap: "3rem", alignItems: "start" }}>
          
          {/* Column 1: Get in Touch details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "900", color: "var(--text-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              GET IN TOUCH
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div className="flex-center" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(124,58,237,0.08)", color: "var(--primary)" }}>
                  <Phone size={18} />
                </div>
                <a href="tel:+919876543210" style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-secondary)" }}>
                  +91 98765 43210
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div className="flex-center" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(124,58,237,0.08)", color: "var(--primary)" }}>
                  <Mail size={18} />
                </div>
                <a href="mailto:info@kreatvhub.com" style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-secondary)" }}>
                  info@kreatvhub.com
                </a>
              </div>

              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div className="flex-center" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(124,58,237,0.08)", color: "var(--primary)", flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  123, Creative Street, Andheri West, Mumbai - 400058
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Stylized Map Graphic */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                height: "170px",
                width: "100%",
                background: "linear-gradient(135deg, #e2e8f0 25%, #cbd5e1 25%, #cbd5e1 50%, #e2e8f0 50%, #e2e8f0 75%, #cbd5e1 75%, #cbd5e1 100%)",
                backgroundSize: "40px 40px",
                borderRadius: "var(--radius-md)",
                border: "1.5px solid var(--border-glass)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Grid map overlay */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(124, 58, 237, 0.05)" }}></div>
              {/* Map pin marker */}
              <div
                className="flex-center"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  color: "var(--primary)",
                  boxShadow: "0 8px 16px rgba(124,58,237,0.25)",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <MapPin size={24} fill="var(--primary)" color="#ffffff" />
              </div>
            </div>
          </div>

          {/* Column 3: Follow & WhatsApp */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "900", color: "var(--text-primary)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1rem" }}>
                FOLLOW US
              </h3>
              {/* Social Buttons */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socials.map((social, idx) => (
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
                      border: "1.5px solid var(--border-glass)",
                      color: "var(--text-secondary)",
                      background: "#ffffff",
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.color = "var(--primary)";
                      e.currentTarget.style.background = "rgba(124, 58, 237, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-glass)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "#ffffff";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/919876543210?text=Hi%20KreatvHub,%20I'm%20interested%20in%20learning%20more%20about%20your%20creative%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "#25d366",
                color: "#ffffff",
                borderRadius: "4px",
                border: "none",
                fontWeight: "800",
                display: "inline-flex",
                width: "100%",
                padding: "0.85rem",
                boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)",
              }}
            >
              <MessageCircle size={20} fill="#ffffff" color="#25d366" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
