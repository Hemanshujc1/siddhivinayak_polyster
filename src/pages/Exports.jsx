import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, FileText, Ship } from 'lucide-react';

const Exports = () => {
  return (
    <>
      <Helmet>
        <title>Export Markets & Information | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Exporting premium polyester yarn to over 50 countries. Learn about our export documentation, incoterms, and global reach." />
      </Helmet>
      
      <div className="bg-primary-dark py-20 text-white relative">
        <ScrollThread pathsData={[
          { d: "M 50 0 C 90 30, 90 70, 50 100", color: "var(--color-accent)", strokeWidth: 4 },
          { d: "M 45 0 C 10 40, 90 60, 45 100", color: "var(--color-primary-light)", strokeWidth: 3 },
          { d: "M 55 0 C 60 20, 10 80, 55 100", color: "rgba(255,255,255,0.2)", strokeWidth: 2 }
        ]} />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Exports</h1>
          <p className="text-xl text-gray-300">Delivering Quality Yarn Worldwide</p>
        </div>
      </div>

      <section className="py-20 bg-neutral-light relative">
        <ScrollThread pathsData={[
          { d: "M 50 0 C 10 30, 50 70, 50 100", color: "var(--color-accent)", strokeWidth: 4 },
          { d: "M 45 0 C 90 20, 10 80, 45 100", color: "var(--color-primary)", strokeWidth: 3 },
          { d: "M 55 0 C 40 40, 90 60, 55 100", color: "var(--color-primary-dark)", strokeWidth: 2 }
        ]} />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Global Reach</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As we expand our footprint, Siddhi Vinayak Polyester is actively preparing to serve international markets, bringing our premium quality yarns to buyers across Asia, the Middle East, Africa, and the Americas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are a registered exporter holding a valid IEC code and RCMC from the Synthetic & Rayon Textiles Export Promotion Council of India.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="aspect-video bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 relative overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Global Logistics" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                <Globe className="w-32 h-32 text-white/20 absolute -right-10 -bottom-10" />
                <span className="text-white font-bold text-2xl relative z-10 drop-shadow-md">Ready for the World</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Documentation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">Documentation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our dedicated export team ensures seamless customs clearance by providing all necessary documentation:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li>• Commercial Invoice & Packing List</li>
                <li>• Bill of Lading (B/L) / Air Waybill</li>
                <li>• Certificate of Origin (GSP / Preferential)</li>
                <li>• Insurance Certificate</li>
                <li>• Quality Inspection Certificates</li>
              </ul>
            </div>

            {/* Incoterms & Packaging */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Ship className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">Logistics & Incoterms</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                We offer flexible shipping terms to accommodate buyer preferences. Typical incoterms include:
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">FOB (Mumbai)</span>
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">CIF</span>
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">EXW</span>
              </div>
              <h4 className="font-bold text-primary-dark mb-2 text-sm">Export Packaging:</h4>
              <p className="text-gray-600 text-sm">
                Cartons containing 12-15 cones (~20-25 kg) are securely shrink-wrapped and strapped onto wooden/plastic pallets, optimized for 20ft and 40ft containers to prevent transit damage.
              </p>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Exports;
