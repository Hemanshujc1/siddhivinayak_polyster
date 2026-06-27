import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Activity, Thermometer } from 'lucide-react';

const Quality = () => {
  return (
    <>
      <Helmet>
        <title>Quality Control | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Our stringent quality control processes ensure every cone of polyester yarn is perfect." />
      </Helmet>
      
      <div className="bg-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Assurance</h1>
          <p className="text-xl text-gray-300">Precision Testing & Uncompromising Standards</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Quality Process</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Siddhi Vinayak Polyester, quality is not just a department—it is ingrained in every step of our manufacturing process. We continuously sample batches to ensure physical and chemical properties meet stringent global standards before they are shipped out.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-gray-700"><strong>99.8%</strong> First Quality Yield Rate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-gray-700">ASTM and ISO compliance for all testing protocols.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-light rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <img src="https://images.unsplash.com/photo-1558009250-d4d216245a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Quality Check" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">Key Parameters Tested</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-light p-8 rounded-xl border border-gray-100 shadow-sm">
              <Activity className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary-dark mb-2">Tenacity & Elongation</h3>
              <p className="text-sm text-gray-600">Continuous testing of tensile strength and elasticity using automated Uster testers to ensure breakage-free weaving.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-xl border border-gray-100 shadow-sm">
              <Thermometer className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary-dark mb-2">Thermal Shrinkage</h3>
              <p className="text-sm text-gray-600">Measuring hot-air and boiling-water shrinkage to guarantee dimensional stability of the finished fabrics.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-xl border border-gray-100 shadow-sm">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary-dark mb-2">Dye Uniformity</h3>
              <p className="text-sm text-gray-600">Knit-and-dye tests to check color consistency, luster, and avoid striping in critical applications.</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Quality;
