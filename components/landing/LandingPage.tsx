import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Problem from "./problem/Problem";
import Solution from "./solution/Solution";
import Features from "./features/Features";
import Workflow from "./workflow/Workflow";
import Showcase from "./showcase/Showcase";
import Benefits from "./benefits/Benefits";
import FAQ from "./faq/FAQ";
import CTA from "./cta/CTA";
import Footer from "./footer/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1220]">
      <Navbar />

      <Hero />

      <Problem />

      <Solution />

      <Features />

      <Workflow />

      <Showcase />

      <Benefits />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}