import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CompanyCarousel from '@/components/CompanyCarousel';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingNavbar />
      <Hero />
      <Features />
      <CompanyCarousel />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}