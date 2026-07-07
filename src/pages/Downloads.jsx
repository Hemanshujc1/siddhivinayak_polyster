import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText, File } from 'lucide-react';

const Downloads = () => {
  const downloads = [
    {
      category: 'Technical Data Sheets (TDS)',
      files: [
        { name: 'DTY General Specifications & Tolerance', size: '2.4 MB', type: 'PDF' },
        { name: 'FDY Tenacity & Elongation Standards', size: '1.8 MB', type: 'PDF' },
        { name: 'POY Processing Guidelines', size: '3.1 MB', type: 'PDF' },
      ]
    },
    {
      category: 'Company Literature',
      files: [
        { name: 'Siddhi Vinayak Corporate Brochure 2026', size: '5.6 MB', type: 'PDF' },
        { name: 'Sustainability & Environmental Policy', size: '1.2 MB', type: 'PDF' },
        { name: 'Quality Assurance Certificates (ISO)', size: '4.5 MB', type: 'ZIP' },
      ]
    },
    {
      category: 'Order & Shipping',
      files: [
        { name: 'Standard Terms and Conditions of Sale', size: '0.8 MB', type: 'PDF' },
        { name: 'Export Packaging Guidelines (Pallet & Carton specs)', size: '2.1 MB', type: 'PDF' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Downloads | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Download technical data sheets (TDS), company brochures, and quality certificates for Siddhi Vinayak Polyester yarns." />
      </Helmet>

      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Downloads</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Access technical data sheets, brochures, and company policies.
          </p>
        </div>
      </div>

      <section className="py-16 bg-neutral-light min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <div className="space-y-10">
            {downloads.map((section, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-primary-dark">{section.category}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {section.files.map((file, fIdx) => (
                    <div key={fIdx} className="px-6 py-5 flex items-center justify-between hover:bg-neutral-light transition-colors group">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-light/10 text-primary rounded flex items-center justify-center mr-4">
                          {file.type === 'PDF' ? <FileText className="w-5 h-5" /> : <File className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{file.name}</h3>
                          <p className="text-sm text-gray-500">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <button className="flex items-center text-accent font-medium hover:text-accent-light transition-colors px-4 py-2 border border-transparent hover:border-accent-light rounded">
                        <Download className="w-4 h-4 mr-2" /> Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-start">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4 mt-1">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Need a specific test report?</h3>
              <p className="text-blue-800 text-sm">
                If you require lot-specific testing reports or custom yarn specifications not listed here, please contact our quality assurance team at <a href="mailto:quality@siddhivinayakpolyester.com" className="font-bold underline hover:text-blue-600">quality@siddhivinayakpolyester.com</a>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Downloads;
