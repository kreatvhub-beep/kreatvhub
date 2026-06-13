"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const coursesList = [
    "Graphic Design",
    "Video Editing",
    "Motion Graphics",
    "VFX",
    "AI Tools for Creators",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", phone: "", course: "" });
    } catch (err) {
      setStatus("idle");
    }
  };

  return (
    <section id="demo-class" style={{ background: "var(--primary)", color: "#ffffff", padding: "4rem 0" }}>
      <div className="container">
        {status === "success" ? (
          <div className="flex-center" style={{ gap: "1rem", color: "#ffffff", padding: "1rem 0" }}>
            <div className="flex-center" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#ffffff", color: "var(--primary)" }}>
              <Check size={20} strokeWidth={3} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#ffffff" }}>Demo Class Booked Successfully!</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>Our team will reach out to you shortly to schedule your demo.</p>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Header Text */}
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: "950", color: "#ffffff", textTransform: "uppercase" }}>
                BOOK YOUR FREE DEMO CLASS
              </h2>
              <p style={{ fontSize: "1rem", opacity: 0.9, marginTop: "0.25rem" }}>
                Experience our teaching style and curriculum before you enroll.
              </p>
            </div>

            {/* Horizontal Form */}
            <form
              onSubmit={handleSubmit}
              className="inline-form"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {/* Name */}
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                style={{
                  flex: "1 1 200px",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "4px",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                }}
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                style={{
                  flex: "1 1 200px",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "4px",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                }}
              />

              {/* Course Dropdown */}
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleInputChange}
                style={{
                  flex: "1 1 200px",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "4px",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                <option value="" disabled>
                  Select Course
                </option>
                {coursesList.map((courseOption, index) => (
                  <option key={index} value={courseOption} style={{ color: "var(--text-primary)" }}>
                    {courseOption}
                  </option>
                ))}
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn"
                style={{
                  flex: "0 0 auto",
                  padding: "0.85rem 2rem",
                  borderRadius: "4px",
                  background: "#ffffff",
                  color: "var(--primary)",
                  fontWeight: "800",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                {status === "loading" ? "BOOKING..." : "BOOK FREE DEMO"}
              </button>
            </form>
          </div>
        )}
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .inline-form {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .inline-form input,
          .inline-form select,
          .inline-form button {
            width: 100% !important;
            flex: none !important;
          }
        }
      `}</style>
    </section>
  );
}
