
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
              >
                Naša priča
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-erdody-yellow"
              />
            </div>

            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Erdody nije samo kafić i pizzerija - to je mjesto gdje se stvaraju nezaboravni trenuci. 
                Naša priča počinje s ljubavlju prema autentičnim okusima i želji da stvorimo prostor 
                koji spaja toplu atmosferu tradicionalnog kafića s modernim pristupom kulinarstvu.
              </p>
              
              <p className="text-lg leading-relaxed">
                Svaku šalicu kave pripremamo s pažnjom i strašću, koristeći zrna iz najboljih plantaža. 
                Naše pizze nastaju u autentičnoj krušnoj peći, gdje se tradicija spaja s kreativnošću 
                naših kuhara koji svaki dan stvaraju nova ukusna iznenađenja.
              </p>

              <p className="text-lg leading-relaxed">
                U Erdody vjerujemo da je svaki obrok prilika za stvaranje lijepih uspomena. 
                Zato smo stvorili prostor koji poziva na druženje, razgovor i uživanje u trenutku.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-erdody-yellow mb-2">5+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Godina iskustva</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-playfair font-bold text-erdody-yellow mb-2">100%</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Ručni rad</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <div 
                  className="h-48 lg:h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url('/images/a.jpeg')`
                  }}
                />
                <div 
                  className="h-32 lg:h-40 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url('/images/c.png')`
                  }}
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="space-y-4 pt-8"
              >
                <div 
                  className="h-32 lg:h-40 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                  }}
                />
                <div 
                  className="h-48 lg:h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                  }}
                />
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              variants={itemVariants}
              className="absolute -top-4 -left-4 w-20 h-20 bg-erdody-yellow/20 rounded-full -z-10"
            />
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-erdody-dusty-rose/20 rounded-full -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
