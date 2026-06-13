import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KreatvHub Pune Student Portfolio Showcase | Creative Work Pune",
  description: "View the graphic designs, video edits, motion graphics, and VFX projects created by KreatvHub students in Pune.",
};

export default function PortfolioPage() {
  const portfolios = [
    { title: "Graphic Design Showcases in Pune", category: "Graphic Design", details: "Brand identity, packaging design, and social media ad creatives made by Pune batch students." },
    { title: "Video Editing Reels in Pune", category: "Video Editing", details: "Commercial ads, cinematic trailers, and documentary edits compiled using Premiere Pro." },
    { title: "Motion Graphics & VFX Reels in Pune", category: "VFX & Animation", details: "CGI integrations, rotoscoping samples, and 3D motion layouts created by Pune animation batches." },
  ];

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">Student Showcase</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Student Work Showcase - Pune Campus</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "800px" }}>
              Explore the creative projects completed by our students during their coursework in Pune. Our focus is on building a job-ready portfolio that stands out to hiring managers.
            </p>
            
            <div className="grid-cols-3" style={{ gap: "2rem" }}>
              {portfolios.map((port, idx) => (
                <div key={idx} className="card-glass" style={{ background: "var(--bg-secondary)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", textTransform: "uppercase" }}>{port.category}</span>
                    <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem" }}>{port.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>{port.details}</p>
                  </div>
                  <a href="/contact" className="btn btn-secondary" style={{ width: "100%", padding: "0.5rem", fontSize: "0.85rem" }}>
                    View Creative Gallery
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
