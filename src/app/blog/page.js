import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KreatvHub Pune Blog | Creative Career Guide & Industry Insights",
  description: "Read the latest updates, design tips, and creative career guides from our experts at KreatvHub Pune.",
};

export default function BlogPage() {
  const blogs = [
    { title: "Scope of Graphic Designing in Pune: Jobs & Salary Guides", excerpt: "Discover the growing demand for graphic designers in Pune and the average package offered by top local agencies." },
    { title: "Top 5 Video Editing Software to Learn in 2026", excerpt: "Master the toolsets and plugins that professional media editors use to compile viral content and ads." },
    { title: "How to Build an Outstanding Animation Portfolio", excerpt: "Step-by-step instructions on compiling your student work projects to impress recruiters." },
  ];

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">KreatvHub Blog</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Creative Career Blog - Pune</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "800px" }}>
              Stay updated with design trends, tools, career guides, and placement reports written by our senior mentors in Pune.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {blogs.map((blog, idx) => (
                <div key={idx} className="card-glass" style={{ background: "var(--bg-secondary)" }}>
                  <h3 style={{ marginBottom: "0.5rem" }}>{blog.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1rem" }}>{blog.excerpt}</p>
                  <a href="/contact" style={{ color: "var(--primary)", fontWeight: "800", fontSize: "0.85rem" }}>
                    Read Article →
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
