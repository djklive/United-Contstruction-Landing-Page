import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/Hero.jpg"
          alt="Construction site with workers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building the future –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Shaping Africa
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            United Construction for Africa designs and builds world-class infrastructure projects 
            to meet Africa's needs in water, energy, mobility, and building construction for 
            communities and businesses.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get a Free Quote
            </Button>
            
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-lg transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/*<motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </motion.div>*/}
      </div>
    </section>
  );
}