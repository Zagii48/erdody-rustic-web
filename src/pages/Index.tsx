
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';

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
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
