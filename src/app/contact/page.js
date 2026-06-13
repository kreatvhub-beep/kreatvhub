import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact KreatvHub Pune | Book Free Demo Class & Admission",
  description: "Contact KreatvHub Institute in Pune (FC Road, Shivajinagar). Fill out the inquiry form to book a free trial class or counseling session.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
        <section className="section" style={{ paddingBottom: "2rem" }}>
          <div className="container">
            <span className="section-tag">Get in Touch</span>
            <h1 style={{ marginBottom: "1.5rem" }}>Contact KreatvHub Pune Campus</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "800px" }}>
              Have any questions about our fees, batch timings, or placement support? Reach out to our admission counselors or visit our Pune center directly.
            </p>
          </div>
        </section>
        
        {/* Render Form & Address Details */}
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
