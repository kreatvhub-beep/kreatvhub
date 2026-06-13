import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Stats />
        <Courses />
        <WhyUs />
        <Testimonials />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
