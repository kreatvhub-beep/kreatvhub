"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [activeIndices, setActiveIndices] = useState({});

  const faqsCol1 = [
    {
      question: "What is the course duration?",
      answer: "The duration depends on the specific program. Our Master programs (like Graphic Design and Video Editing) typically take 2.5 months, while specialized modules range from 3 to 6 weeks.",
    },
    {
      question: "Do you provide certification?",
      answer: "Yes, you will receive industry-recognized course completion certificates from KreatvHub Institute along with training to clear global certifications (e.g. Adobe, Google).",
    },
    {
      question: "Are classes online or offline?",
      answer: "We offer both! You can attend live, interactive classroom training at our Mumbai centers, or choose our interactive online learning batches.",
    },
  ];

  const faqsCol2 = [
    {
      question: "What is the fee structure?",
      answer: "We offer competitive fees with easy installment options and zero-cost EMIs. Please fill out our free demo form to receive our detailed brochure containing exact fee rates.",
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer 100% placement assistance. Our dedicated placement cell schedules mock interviews, assists in portfolio building, and connects you directly with 100+ hiring corporate partners.",
    },
    {
      question: "Can beginners join these courses?",
      answer: "Absolutely! All our creative design, editing, and VFX courses are built from scratch. No prior experience is required—only your creative passion and dedication to learn.",
    },
  ];

  const toggleAccordion = (column, index) => {
    const key = `${column}-${index}`;
    setActiveIndices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="faqs" className="section">
      <div className="glow-spot" style={{ bottom: "10%", right: "-5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">FAQs</span>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-desc">Find answers to commonly asked questions about our batches, certifications, and placements.</p>
        </div>

        {/* 2-Column Accordions Grid */}
        <div className="grid-cols-2" style={{ gap: "2rem", alignItems: "start" }}>
          
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqsCol1.map((faq, index) => {
              const isOpen = activeIndices[`col1-${index}`];
              return (
                <div
                  key={index}
                  className="card-glass"
                  style={{
                    padding: "1.25rem",
                    cursor: "pointer",
                    background: isOpen ? "var(--bg-secondary)" : "#ffffff",
                    borderColor: isOpen ? "var(--primary)" : "var(--border-glass)",
                    borderRadius: "8px",
                  }}
                  onClick={() => toggleAccordion("col1", index)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-primary)" }}>{faq.question}</h4>
                    <ChevronDown
                      size={18}
                      color="var(--text-secondary)"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--transition-fast)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all var(--transition-normal)",
                      marginTop: isOpen ? "0.75rem" : "0px",
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqsCol2.map((faq, index) => {
              const isOpen = activeIndices[`col2-${index}`];
              return (
                <div
                  key={index}
                  className="card-glass"
                  style={{
                    padding: "1.25rem",
                    cursor: "pointer",
                    background: isOpen ? "var(--bg-secondary)" : "#ffffff",
                    borderColor: isOpen ? "var(--primary)" : "var(--border-glass)",
                    borderRadius: "8px",
                  }}
                  onClick={() => toggleAccordion("col2", index)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-primary)" }}>{faq.question}</h4>
                    <ChevronDown
                      size={18}
                      color="var(--text-secondary)"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--transition-fast)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "all var(--transition-normal)",
                      marginTop: isOpen ? "0.75rem" : "0px",
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
