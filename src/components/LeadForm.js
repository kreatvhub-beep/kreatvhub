"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const coursesOptions = [
    "Advanced Digital Marketing Masterclass (2.5 Months)",
    "Performance Marketing & Media Buying (6 Weeks)",
    "Search Engine Optimization (SEO) Masterclass (4 Weeks)",
    "WordPress Web Designing & Development (3 Weeks)",
    "Graphic Design & Content Writing (4 Weeks)",
    "Other / Custom Training Program",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate submission (or connect to a form endpoint like Web3Forms/Formspree)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="glow-spot-secondary" style={{ top: "20%", left: "-5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid-cols-2" style={{ alignItems: "center", gap: "4rem" }}>
          {/* Left Column: Promotion & Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <span className="section-tag">Take the Next Step</span>
            <h2>Book a Free Trial Class & Counselling Session</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7" }}>
              Ready to break into digital marketing? Talk to our industry mentors, download our latest curriculum brochures, and attend a live classroom training demo completely free.
            </p>

            {/* List of Benefits */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  className="flex-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(252, 193, 1, 0.1)",
                    border: "1px solid rgba(252, 193, 1, 0.2)",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>Hands-on Live Project Internships</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.15rem" }}>Work on real clients with active advertising budgets.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  className="flex-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(6, 182, 212, 0.1)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>100% Direct Placement Assurance</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.15rem" }}>Get access to our 150+ corporate hiring partners in Pune.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div
                  className="flex-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                    color: "var(--secondary)",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <div>
                  <h4 style={{ fontWeight: "700" }}>Generative AI Curriculum Integration</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.15rem" }}>Master ChatGPT, Midjourney, and automation to stay ahead.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div>
            {status === "success" ? (
              <div
                className="card-glass"
                style={{
                  textAlign: "center",
                  padding: "4rem 2rem",
                  borderColor: "var(--success)",
                  background: "rgba(18, 20, 28, 0.8)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div className="flex-center" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", color: "var(--success)" }}>
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h3 style={{ marginBottom: "0.5rem" }}>Thank You!</h3>
                  <p style={{ color: "var(--text-secondary)" }}>Your trial class booking has been received. Our admission mentor will call you in the next 2-4 hours to confirm your schedule.</p>
                </div>
                <button onClick={() => setStatus("idle")} className="btn btn-secondary" style={{ marginTop: "1rem" }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-glass"
                style={{
                  background: "rgba(18, 20, 28, 0.85)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                }}
              >
                <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Inquire Now</h3>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <div style={{ position: "relative" }}>
                    <User size={18} color="var(--text-muted)" style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Yash Deshmukh"
                      className="form-input"
                      style={{ paddingLeft: "3rem" }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={18} color="var(--text-muted)" style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="form-input"
                      style={{ paddingLeft: "3rem" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label">Mobile Number</label>
                  <div style={{ position: "relative" }}>
                    <Phone size={18} color="var(--text-muted)" style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)" }} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      className="form-input"
                      style={{ paddingLeft: "3rem" }}
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="form-group">
                  <label className="form-label">Select Course</label>
                  <div style={{ position: "relative" }}>
                    <BookOpen size={18} color="var(--text-muted)" style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)" }} />
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ paddingLeft: "3rem", appearance: "none", cursor: "pointer" }}
                    >
                      <option value="" disabled>
                        Choose your training program...
                      </option>
                      {coursesOptions.map((courseOption, index) => (
                        <option key={index} value={courseOption} style={{ background: "var(--bg-secondary)" }}>
                          {courseOption}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label">Additional Message / Question (Optional)</label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare size={18} color="var(--text-muted)" style={{ position: "absolute", left: "1.25rem", top: "1.25rem" }} />
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ask any doubts or tell us your goals..."
                      className="form-input"
                      style={{ paddingLeft: "3rem" }}
                    ></textarea>
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" disabled={status === "loading"} className="btn btn-gradient" style={{ width: "100%", marginTop: "1rem" }}>
                  <span>{status === "loading" ? "Submitting Inquiry..." : "Submit Application"}</span>
                  <Send size={18} />
                </button>

                {status === "error" && (
                  <p style={{ color: "var(--error)", fontSize: "0.85rem", marginTop: "1rem", textAlign: "center", fontWeight: "600" }}>
                    An error occurred. Please try again or contact us via WhatsApp directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
