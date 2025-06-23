
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onViewMenu: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewMenu }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 0.3)), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight"
          >
            Erdody
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-playfair text-erdody-beige/90 font-medium"
          >
            Okusi Erdody
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg lg:text-xl text-erdody-beige/80 max-w-2xl mx-auto leading-relaxed"
          >
            Dobrodošli u naš topli ambijent gdje se spajaju tradicija i modernost. 
            Uživajte u vrhunskoj kavi i autentičnim pizzama iz naše krušne peći.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={onViewMenu}
              size="lg"
              className="bg-erdody-yellow text-erdody-black hover:bg-erdody-yellow/90 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Pogledaj meni
            </Button>
            
            <Button
              onClick={() => {
                const element = document.getElementById('reservation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              size="lg"
              className="border-2 border-erdody-beige text-erdody-beige hover:bg-erdody-beige hover:text-erdody-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Rezerviraj stol
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-erdody-beige/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-erdody-beige/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
