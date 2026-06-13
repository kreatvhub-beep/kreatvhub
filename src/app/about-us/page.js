import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About KreatvHub Institute Pune | Creative Academy Pune",
  description: "Learn about KreatvHub Institute in Pune (FC Road). We are the premier creative academy for Graphic Design, Video Editing, and VFX in Pune.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">About KreatvHub Pune</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Pune's Leading Creative Training Institute</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem", maxWidth: "800px" }}>
              KreatvHub Institute Pune is a premier learning destination for creative minds located on FC Road, Shivajinagar, Pune. We specialize in providing hands-on training by industry experts with a focus on practical learning, real-world projects, and career development.
            </p>
            
            <div className="grid-cols-2" style={{ gap: "2rem", marginTop: "3rem" }}>
              <div className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                <h3 style={{ marginBottom: "1rem" }}>Our Mission in Pune</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  To empower creative individuals in Pune and Maharashtra with advanced skills, practical knowledge, and direct career opportunities in Graphic Design, Video Editing, Motion Graphics, and VFX.
                </p>
              </div>
              <div className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                <h3 style={{ marginBottom: "1rem" }}>Why Learn at KreatvHub Pune?</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  We provide a premium educational infrastructure in Pune, including high-tech labs, agency founder mentorship, live advertising budget allocation, and a dedicated local placement cell.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
