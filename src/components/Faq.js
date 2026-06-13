"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqsList = [
    {
      question: "Who is this digital marketing course for?",
      answer: "Our programs are designed for fresh graduates looking for high-paying corporate roles, traditional marketing professionals wanting to transition to digital, entrepreneurs/business owners wishing to generate leads directly, and creative designers or writers looking to monetize their services.",
    },
    {
      question: "Does PIIDM offer a 100% job placement guarantee?",
      answer: "Yes! We offer 100% job placement assurance. We have direct tie-ups with 150+ digital marketing agencies and corporate brands in Pune and Mumbai. We conduct mock interviews, resume-building sessions, and arrange continuous placement drives until you get hired.",
    },
    {
      question: "Can I attend trial/demo sessions before enrolling?",
      answer: "Absolutely! We encourage all prospective students to attend our free 2-hour demo session (classroom or online). This session allows you to check our teaching quality, inspect the training center, and speak directly with our senior instructors. You can book a demo using the form above.",
    },
    {
      question: "What is the course fee structure and EMI options?",
      answer: "We offer highly affordable fees compared to other institutes in Pune. To make the program accessible, we provide zero-cost EMI plans, flexible installment options, and special scholarships for early registrations. Please submit a form inquiry to get the detailed fee PDF sent to your email.",
    },
    {
      question: "What certifications will I receive after course completion?",
      answer: "You will receive over 15 globally recognized certifications, including Google Search Ads, Google Display Ads, Meta (Facebook) Blueprint certification, HubSpot Inbound Marketing, Semrush SEO, and the premium PIIDM Training Certificate which is highly valued by local hiring managers.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="section section-alt">
      <div className="glow-spot-secondary" style={{ bottom: "10%", left: "5%" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ marginBottom: "3rem" }}>
          <span className="section-tag">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p className="section-desc">Got doubts? We have answers. Find general details about batch timings, fees, and placements.</p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqsList.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="card-glass"
                style={{
                  padding: "1.5rem",
                  cursor: "pointer",
                  borderColor: isOpen ? "var(--primary)" : "var(--border-glass)",
                  background: isOpen ? "rgba(18, 20, 28, 0.9)" : "rgba(18, 20, 28, 0.7)",
                }}
                onClick={() => toggleAccordion(index)}
              >
                {/* Question Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <HelpCircle size={20} color={isOpen ? "var(--primary)" : "var(--text-muted)"} style={{ flexShrink: 0 }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: isOpen ? "var(--primary)" : "var(--text-primary)" }}>{faq.question}</h4>
                  </div>
                  <ChevronDown
                    size={20}
                    color="var(--text-muted)"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform var(--transition-fast)",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Answer Box */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "all var(--transition-normal)",
                    marginTop: isOpen ? "1rem" : "0px",
                    paddingTop: isOpen ? "0.5rem" : "0px",
                    borderTop: isOpen ? "1px solid var(--border-glass)" : "none",
                  }}
                >
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
