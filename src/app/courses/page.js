import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Graphic Design, Video Editing & VFX Courses in Pune | KreatvHub",
  description: "Explore our professional training programs in Pune. We offer Pune's top-rated courses in Graphic Design, Video Editing, Motion Graphics, VFX, and AI tools.",
};

export default function CoursesPage() {
  const courseList = [
    { title: "Graphic Design Course in Pune", desc: "Learn design principles, typography, branding, Photoshop, Illustrator, and visual communication." },
    { title: "Video Editing Training in Pune", desc: "Master professional video editing, color grading, audio mixing, and storytelling using Premiere Pro." },
    { title: "Motion Graphics Classes in Pune", desc: "Create stunning 2D/3D motion graphics, kinetic typography, and animations using After Effects." },
    { title: "VFX Course in Pune", desc: "Learn compositing, CGI, rotoscoping, keying, and matchmoving from industry artists." },
    { title: "AI Tools for Creators in Pune", desc: "Integrate generative AI tools (ChatGPT, Midjourney, Runway) into your design and editing workflows." },
  ];

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section">
          <div className="container">
            <span className="section-tag">Courses We Offer</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Creative Training Courses in Pune</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "3rem", maxWidth: "800px" }}>
              Accelerate your creative career with our industry-led modules. We provide classroom training at our Pune center, hands-on live projects, and international certifications.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {courseList.map((course, idx) => (
                <div key={idx} className="card-glass" style={{ background: "var(--bg-secondary)", padding: "2rem" }}>
                  <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>{course.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>{course.desc}</p>
                  <a href="/contact" className="btn btn-secondary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                    Enquire for Fees & Syllabus
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
