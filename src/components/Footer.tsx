
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Početna', id: 'hero' },
    { name: 'O nama', id: 'about' },
    { name: 'Meni', id: 'menu' },
    { name: 'Galerija', id: 'gallery' },
    { name: 'Rezervacija', id: 'reservation' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-erdody-black text-erdody-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-playfair font-bold text-erdody-yellow mb-4">
              Erdody
            </h3>
            <p className="text-erdody-beige/80 mb-6 leading-relaxed">
              Moderni kafić i artisan pizzerija u srcu grada. Spajamo tradiciju s modernim pristupom, 
              stvarajući nezaboravno iskustvo kroz vrhunsku kavu, autentične pizze iz krušne peći i 
              topli ambijent koji poziva na druženje.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-erdody-dusty-rose/20 rounded-full flex items-center justify-center hover:bg-erdody-yellow hover:text-erdody-black transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold text-erdody-yellow mb-4">
              Brza navigacija
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-erdody-beige/80 hover:text-erdody-yellow transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold text-erdody-yellow mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-erdody-dusty-rose mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-erdody-beige/80">
                    Ilica 42<br />
                    10000 Zagreb, Hrvatska
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-erdody-dusty-rose flex-shrink-0" />
                <p className="text-erdody-beige/80">+385 1 234 5678</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-erdody-dusty-rose flex-shrink-0" />
                <p className="text-erdody-beige/80">info@erdody.hr</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-erdody-dusty-rose mt-0.5 flex-shrink-0" />
                <div className="text-erdody-beige/80 text-sm">
                  <p className="font-medium mb-1">Radno vrijeme:</p>
                  <p>Pon - Čet: 08:00 - 23:00</p>
                  <p>Pet - Sub: 08:00 - 24:00</p>
                  <p>Ned: 09:00 - 22:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-erdody-dusty-rose/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-erdody-beige/60 text-sm">
              © 2024 Erdody. Sva prava zadržana.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-erdody-beige/60 hover:text-erdody-yellow transition-colors">
                Privatnost
              </a>
              <a href="#" className="text-erdody-beige/60 hover:text-erdody-yellow transition-colors">
                Uvjeti korištenja
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
