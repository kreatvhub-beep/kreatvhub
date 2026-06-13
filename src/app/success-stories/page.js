import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KreatvHub Pune Student Success Stories & Reviews | Placed Students Pune",
  description: "Read the reviews and success stories of KreatvHub graduates in Pune. Discover how they landed jobs in top digital agencies.",
};

export default function SuccessStoriesPage() {
  const reviews = [
    { name: "Riya Sharma", course: "Graphic Design (Pune Batch)", feedback: "KreatvHub helped me turn my creative ideas into a professional career. The design mentors are amazing, and I got placed in a top Pune design studio!" },
    { name: "Arjun Mehta", course: "Video Editing (Pune Batch)", feedback: "The practical approach and working on real ad campaign projects in Pune gave me immense confidence. Placed as a video editor within two weeks of course completion." },
    { name: "Neha Verma", course: "Motion Graphics (Pune Batch)", feedback: "From learning basics of After Effects to designing complex animations, it has been an incredible journey. The placement cell at Pune was extremely supportive." },
  ];

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">Success Stories</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Student Success Stories in Pune</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "800px" }}>
              See how our practical training has helped students from Pune land high-paying job opportunities at top creative companies and advertising agencies.
            </p>
            
            <div className="grid-cols-3" style={{ gap: "2rem" }}>
              {reviews.map((rev, idx) => (
                <div key={idx} className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "900" }}>{rev.name}</h3>
                    <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "750" }}>{rev.course}</span>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>"{rev.feedback}"</p>
                  </div>
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
