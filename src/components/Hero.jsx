import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-neutral-light overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Animated Yarn SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        <svg 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <motion.path 
            d="M-100 800C150 750 250 450 500 450C750 450 850 150 1100 150C1350 150 1450 400 1600 400"
            stroke="var(--color-primary)" 
            strokeWidth="4" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          />
          <motion.path 
            d="M-100 700C200 650 300 350 600 350C900 350 1000 50 1300 50C1500 50 1550 300 1600 300"
            stroke="var(--color-accent)" 
            strokeWidth="3" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          />
          <motion.path 
            d="M0 900C100 700 400 600 600 750C800 900 1000 400 1200 200C1400 0 1500 100 1600 200"
            stroke="var(--color-primary-dark)" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeDasharray="4 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              20 Years of Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-6 leading-tight">
              Premium Polyester Yarn <br />
              <span className="text-primary">Manufacturer</span>
            </h1>
            <p className="text-lg text-neutral-dark mb-10 max-w-2xl leading-relaxed">
              Serving domestic and global markets with high-quality POY, FDY, DTY, and Spun Yarns. Trusted by industry leaders for consistency, strength, and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-semibold text-center transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Products
              </Link>
              <Link 
                to="/quote"
                className="bg-white hover:bg-neutral-light text-primary border-2 border-primary px-8 py-4 rounded-md font-semibold text-center transition-colors shadow-md hover:shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-dark">20+</span>
              <span className="text-sm text-gray-500 font-medium">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-dark">Global</span>
              <span className="text-sm text-gray-500 font-medium">Export Ready</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-dark">10k+</span>
              <span className="text-sm text-gray-500 font-medium">Tons Capacity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
