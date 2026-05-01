"use client";

import ScrollSmootherProvider from "./components/ScrollSmootherProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import StatsCards from "./components/StatsCards";
import Benefits from "./components/sections/Benefits";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Pricing from "./components/sections/Pricing";
import FAQSection from "./components/sections/FAQSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ScrollSmootherProvider>
      <Navbar />
      <Hero />
      <StatsCards />
      <Benefits />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </ScrollSmootherProvider>
  );
}
