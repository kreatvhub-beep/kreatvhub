import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <About />
        <Courses />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Partners />
        <Gallery />
        <LeadForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
