import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Zap } from 'lucide-react';
import BrandsSection, { BrandScrollStrip } from '../components/BrandsSection';

const Brands = () => {
  return (
    <>
      <Helmet>
        <title>Our Brand Partners | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Siddhi Vinayak Polyester is an authorized channel partner for India's top polyester yarn brands including Reliance, Bhilosa, Wellknown, and Satyanarayana." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Our Brand Partners</h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-6">Learn. Compare. Choose. Source.</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are official and authorized channel partners for India's leading polyester chip-to-yarn manufacturers, bringing direct factory-pricing and certified quality to your weaving and knitting units.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Section */}
      <div className="bg-neutral-light border-b border-gray-200">
        <BrandScrollStrip />
      </div>

      {/* Trust & Partnership Value Prop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark">Why Buy Through Siddhi Vinayak Polyester?</h2>
            <p className="text-gray-500 mt-2">The advantages of choosing an authorized channel partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-light rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary-dark mb-2">100% Genuine Yarn</h3>
              <p className="text-sm text-gray-600">
                Direct sourcing from Reliance, Bhilosa, Wellknown, and Satyanarayana. No counterfeit or mixed batches.
              </p>
            </div>

            <div className="p-6 bg-neutral-light rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary-dark mb-2">Mill Price Advantage</h3>
              <p className="text-sm text-gray-600">
                Benefit from direct mill-level pricing, combined volume discounts, and highly optimized freight arrangements.
              </p>
            </div>

            <div className="p-6 bg-neutral-light rounded-2xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary-dark mb-2">Flexible Order Sizes</h3>
              <p className="text-sm text-gray-600">
                Mix and match multiple deniers, filament counts, or brands in a single dispatch rather than buying full containers of one specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Brands Grid */}
      <BrandsSection 
        title="Explore Brands & Technical Portfolios"
        subtitle="Select a brand below to view available specs or contact us for direct mill dispatches."
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Need a direct mill quote?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get official rates from India's leading manufacturers dispatched directly to your unit. We negotiate pricing and handle logistics end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote" className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-xl">
              Get Mill Pricing →
            </Link>
            <Link to="/products/compare" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all">
              Compare Yarns
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
