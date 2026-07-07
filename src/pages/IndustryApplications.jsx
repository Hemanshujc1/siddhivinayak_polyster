import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Grid, Shirt, Home, Factory } from 'lucide-react';

const IndustryApplications = () => {
  return (
    <>
      <Helmet>
        <title>Industry Applications | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Discover which polyester yarn is right for your industry. Recommendations for Garments, Home Textiles, and Industrial uses." />
      </Helmet>

      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Industry Applications</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect polyester yarn tailored specifically to your manufacturing sector.
          </p>
        </div>
      </div>

      <section className="py-16 bg-neutral-light min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Garments */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Garments & Apparel</h2>
              <p className="text-gray-600 mb-6 flex-grow">
                For clothing, comfort, stretch, and breathability are key. Different garments require vastly different yarns.
              </p>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Sportswear & Socks</h3>
                  <p className="text-sm text-gray-500">Requires high stretch and insulation. Use <Link to="/products/dty" className="text-primary hover:underline">DTY</Link>.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Sarees & Ethnic Wear</h3>
                  <p className="text-sm text-gray-500">Requires high luster, smooth drape, and strength. Use <Link to="/products/fdy" className="text-primary hover:underline">FDY</Link>.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Innerwear (Lingerie)</h3>
                  <p className="text-sm text-gray-500">Requires extreme softness. Use Microfilament <Link to="/products/dty" className="text-primary hover:underline">DTY</Link> (e.g., 150D/144F).</p>
                </div>
              </div>
            </div>

            {/* Home Textiles */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Home Textiles</h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Home furnishings demand durability, specific lusters, and bulk depending on the end product.
              </p>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Curtains & Drapes</h3>
                  <p className="text-sm text-gray-500">Requires flat, lustrous appearance. Use <Link to="/products/fdy" className="text-primary hover:underline">FDY</Link> (often Bright luster).</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Blankets & Throws</h3>
                  <p className="text-sm text-gray-500">Requires high bulk and warmth. Use heavy denier <Link to="/products/dty" className="text-primary hover:underline">DTY</Link>.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Upholstery / Sofa Fabric</h3>
                  <p className="text-sm text-gray-500">Requires extreme durability and texture. Use Highly Intermingled (HIM) <Link to="/products/dty" className="text-primary hover:underline">DTY</Link>.</p>
                </div>
              </div>
            </div>

            {/* Industrial */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Factory className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Industrial Uses</h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Industrial applications prioritize absolute tensile strength, tenacity, and uniformity over feel or aesthetics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Ropes, Nets, Seatbelts</h3>
                  <p className="text-sm text-gray-500">Requires maximum tensile strength. Use high-tenacity Industrial <Link to="/products/fdy" className="text-primary hover:underline">FDY</Link>.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Texturizing Units</h3>
                  <p className="text-sm text-gray-500">Requires feed material for crimping machines. Use <Link to="/products/poy" className="text-primary hover:underline">POY</Link>.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold text-gray-800">Sewing Threads</h3>
                  <p className="text-sm text-gray-500">Requires specialized high-twist spun polyester or specialty filament yarns.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Still not sure which yarn is right for your specific manufacturing process?</p>
            <Link to="/yarn-finder" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors mr-4 mb-4">
              Use the Interactive Yarn Finder
            </Link>
            <Link to="/quote" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-light transition-colors mb-4">
              Request a Custom Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustryApplications;
