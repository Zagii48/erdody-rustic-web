
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('kava');

  const coffeeItems = [
    {
      name: 'Espresso',
      description: 'Klasični talijanski espresso, bogat i aromatičan',
      price: '12 kn'
    },
    {
      name: 'Cappuccino',
      description: 'Savršena kombinacija espresa i pjenjastog mlijeka',
      price: '18 kn'
    },
    {
      name: 'Latte Macchiato',
      description: 'Nježni latte s dodatkom vanilije i cimeta',
      price: '22 kn'
    },
    {
      name: 'Cold Brew',
      description: 'Hladna kava pripravljana 12 sati, glatka i osvježavajuća',
      price: '25 kn'
    },
    {
      name: 'Affogato',
      description: 'Vruć espresso preko sladoleda od vanilije',
      price: '28 kn'
    },
    {
      name: 'Turkish Coffee',
      description: 'Tradicionalna turska kava s kardamomom',
      price: '20 kn'
    }
  ];

  const pizzaItems = [
    {
      name: 'Margherita',
      description: 'San Marzano rajčica, mozzarella fior di latte, svježi bosiljak',
      price: '65 kn'
    },
    {
      name: 'Quattro Stagioni',
      description: 'Šunka, gljive, artičoke, masline, mozzarella',
      price: '85 kn'
    },
    {
      name: 'Prosciutto e Funghi',
      description: 'Pršut San Daniele, šampinjoni, mozzarella, rukola',
      price: '90 kn'
    },
    {
      name: 'Erdody Special',
      description: 'Truffle krema, burrata sir, pršut, rucola, cherry rajčice',
      price: '120 kn'
    },
    {
      name: 'Vegetariana',
      description: 'Grillovano povrće, kozji sir, med, orasi',
      price: '78 kn'
    },
    {
      name: 'Marinara',
      description: 'San Marzano rajčica, češnjak, origano, maslinovo ulje',
      price: '55 kn'
    }
  ];

  const handleDownloadPDF = () => {
    // Placeholder for PDF download functionality
    console.log('Downloading PDF menu...');
    // In a real app, this would trigger a PDF download
    window.open('#', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="menu" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4">
            Naš meni
          </h2>
          <div className="w-20 h-1 bg-erdody-yellow mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Otkrijte naše pažljivo birane okuse - od aromata vrhunske kave do autentičnih pizza iz krušne peći
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-background rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('kava')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'kava'
                  ? 'bg-erdody-yellow text-erdody-black shadow-md'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Kava
            </button>
            <button
              onClick={() => setActiveTab('pizza')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'pizza'
                  ? 'bg-erdody-yellow text-erdody-black shadow-md'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Pizza
            </button>
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {(activeTab === 'kava' ? coffeeItems : pizzaItems).map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-erdody-yellow transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-erdody-yellow">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* PDF Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={handleDownloadPDF}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Preuzmi PDF meni
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
