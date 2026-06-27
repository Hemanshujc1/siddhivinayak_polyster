import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award } from 'lucide-react';

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Certifications | Siddhi Vinayak Polyester</title>
        <meta name="description" content="View our certifications including ISO 9001 and OEKO-TEX Standard 100." />
      </Helmet>
      
      <div className="bg-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Certifications</h1>
          <p className="text-xl text-gray-300">Commitment to Global Standards</p>
        </div>
      </div>

      <section className="py-20 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* ISO */}
            <div className="bg-neutral-light border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                <ShieldCheck className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">ISO 9001:2015</h3>
              <p className="text-gray-600 mb-6">
                Certified for Quality Management Systems. This ensures our manufacturing processes consistently provide products that meet customer and applicable statutory and regulatory requirements.
              </p>
              <button className="text-primary font-bold hover:text-primary-dark underline">View Certificate</button>
            </div>

            {/* OEKO-TEX */}
            <div className="bg-neutral-light border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                <Award className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">OEKO-TEX® Standard 100</h3>
              <p className="text-gray-600 mb-6">
                Our polyester yarns are tested for harmful substances and are certified to be safe for human ecology, making them ideal for apparel and intimate wear.
              </p>
              <button className="text-primary font-bold hover:text-primary-dark underline">View Certificate</button>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Certifications;
