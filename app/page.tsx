import React from 'react';
import Navbar from '@/components/landing/Navbar/page';
import Hero from '@/components/landing/Hero/page';
import Services from '@/components/landing/Services/page';
import About from '@/components/landing/About/page';
import Contact from '@/components/landing/Contact/page';
import Footer from '@/components/landing/Footer/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}