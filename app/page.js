"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}