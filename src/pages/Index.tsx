
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/G allerySection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection onViewMenu={scrollToMenu} />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ReservationSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
