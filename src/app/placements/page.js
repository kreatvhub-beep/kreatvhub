import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "100% Placement Creative Courses in Pune | KreatvHub Hiring Partners",
  description: "Learn about the placement process and local hiring partners at KreatvHub Pune. We offer 100% job placement assurance for graphic designers and video editors.",
};

export default function PlacementsPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">Job Placements</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Job Placements & Hiring Partners in Pune</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "800px" }}>
              At KreatvHub Pune, our training is closely aligned with current market needs. We have established tie-ups with leading digital marketing agencies, design studios, and IT firms across Pune to secure direct job opportunities for our students.
            </p>
            
            <div className="grid-cols-2" style={{ gap: "2rem", marginTop: "3rem" }}>
              <div className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                <h3 style={{ marginBottom: "1rem" }}>Pune Placement Drive Process</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  We provide continuous mock interviews, help compile custom student portfolios, and schedule placement drives. Our dedicated local coordinators ensure students get interviewed by agencies in Pune.
                </p>
              </div>
              <div className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                <h3 style={{ marginBottom: "1rem" }}>95% Job Placement Rate</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Our practical, live budget campaign modules ensure that graduates enter the workforce with robust hands-on capability, making them highly desirable to recruiters.
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
