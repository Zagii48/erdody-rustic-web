
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('ambijent');

  const ambijentImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Interijer kafića s toplim osvjetljenjem'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Rustikalni bar s drvenim detaljima'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Moderna terasa s ugodnim sjedenjem'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Krušna peć za pizze'
    }
  ];

  const okusiImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Autentična pizza iz krušne peći'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1545665277-5937750d6850?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Espresso kava s prekrasnim lattte art'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Tradicionalne poslastice'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Svjež salata s lokalnim sastojcima'
    }
  ];

  const currentImages = activeTab === 'ambijent' ? ambijentImages : okusiImages;

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Galerija
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zavirite u naš svijet okusa i toplog ambijena
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-muted rounded-lg p-2 flex gap-2">
            <button
              onClick={() => setActiveTab('ambijent')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'ambijent'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Ambijent
            </button>
            <button
              onClick={() => setActiveTab('okusi')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'okusi'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Okusi
            </button>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-erdody-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm font-medium">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
