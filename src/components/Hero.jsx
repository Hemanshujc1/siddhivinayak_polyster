import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-neutral-light via-white to-neutral-light overflow-hidden h-[calc(100vh-4rem)] flex items-center py-6">
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
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
          />
          <motion.path
            d="M-100 700C200 650 300 350 600 350C900 350 1000 50 1300 50C1500 50 1550 300 1600 300"
            stroke="var(--color-accent)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
          />
          <motion.path
            d="M-50 900C150 750 350 650 550 750C750 850 950 500 1150 300C1350 100 1450 200 1550 300"
            stroke="var(--color-accent-light)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="5 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.path
            d="M100 850C300 800 400 550 650 550C900 550 950 250 1200 250C1450 250 1500 450 1650 450"
            stroke="var(--color-primary-light)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
          />
          <motion.path
            d="M-150 600C100 550 200 250 450 250C700 250 800-50 1050-50C1300-50 1350 200 1500 200"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 4.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-xs mb-3 border border-accent/20">
              Authorized B2B Partner & Manufacturer
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-3 leading-tight">
              Source Premium{" "}
              <span className="text-accent">Polyester Yarns</span> Directly
            </h1>
            <p className="text-base text-neutral-dark mb-5 max-w-2xl leading-relaxed">
              Leading manufacturers of high-performance DTY combined with direct
              mill dispatches for POY and FDY. Get the best pricing for your
              weaving and knitting units.
            </p>

            {/* B2B Buyer Sourcing Actions */}
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-150 max-w-2xl mb-4">
              <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5">
                B2B Sourcing Hub
              </h2>
              <h3 className="text-lg font-extrabold text-primary-dark mb-3">
                Fast-Track Your Procurement
              </h3>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  to="/products"
                  className="bg-primary hover:bg-primary-dark hover:scale-105 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow hover:shadow-md transform duration-150"
                >
                  Browse Products
                </Link>
                <Link
                  to="/products/compare"
                  className="bg-neutral-light hover:bg-gray-100 hover:scale-105 active:scale-95 text-primary-dark border border-gray-200 px-7 py-3.5 rounded-xl font-bold text-sm transition-all transform duration-150"
                >
                  Compare POY, FDY & DTY
                </Link>
                <Link
                  to="/quote"
                  className="bg-accent hover:bg-accent-light hover:scale-105 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-accent/20 transform duration-150"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Learner Guide CTA Link */}
            <div className="flex items-center gap-2 text-sm font-semibold mb-6">
              <span className="text-gray-400">
                Not sure about specifications?
              </span>
              <Link
                to="/learning"
                className="inline-flex items-center text-accent hover:text-accent-light hover:underline transition-all"
              >
                New to polyester yarn? Learn here →
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-2 border-t border-gray-100 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary-dark">
                DTY
              </span>
              <span className="text-xs text-gray-500 font-medium">
                In-House Production
              </span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary-dark">
                POY & FDY
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Authorized Channel Partner
              </span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-primary-dark">
                15+
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Years of Excellence
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
