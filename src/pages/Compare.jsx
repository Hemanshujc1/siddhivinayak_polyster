import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Compare = () => {
  const comparisonData = [
    { feature: 'Manufacturing Stage', poy: 'Semi-finished (raw)', fdy: 'Finished (flat)', dty: 'Finished (textured)' },
    { feature: 'Softness', poy: '⭐⭐', fdy: '⭐⭐⭐', dty: '⭐⭐⭐⭐⭐' },
    { feature: 'Stretch', poy: '⭐ (unstable)', fdy: '⭐⭐', dty: '⭐⭐⭐⭐' },
    { feature: 'Shine / Lustre', poy: '⭐⭐⭐', fdy: '⭐⭐⭐⭐⭐', dty: '⭐⭐⭐' },
    { feature: 'Tenacity (Strength)', poy: 'Low (2.5–3.0 g/d)', fdy: 'High (≥3.8 g/d)', dty: 'Medium (≥3.5 g/d)' },
    { feature: 'Knitting', poy: '❌ Cannot use', fdy: 'Possible (warp)', dty: '✅ Excellent' },
    { feature: 'Weaving', poy: '❌ Cannot use', fdy: '✅ Excellent', dty: 'Good' },
    { feature: 'Sportswear', poy: '❌', fdy: 'Sometimes', dty: '✅ Best choice' },
    { feature: 'Socks / Hosiery', poy: '❌', fdy: '❌', dty: '✅ Best choice' },
    { feature: 'Sarees / Curtains', poy: '❌', fdy: '✅ Best choice', dty: 'Possible' },
    { feature: 'Blankets / Fleece', poy: '❌', fdy: 'Good', dty: '✅ Best choice' },
    { feature: 'Industrial Use', poy: '⚠️ (raw only)', fdy: '✅ (rope/cord)', dty: 'Limited' },
    { feature: 'Relative Cost', poy: '💰 Lowest', fdy: '💰💰 Medium', dty: '💰💰 Medium' },
    { feature: 'Typical Buyers', poy: 'Texturizing plants, DTY manufacturers', fdy: 'Saree mills, weaving units, curtain mfrs.', dty: 'Knitting mills, garment factories, hosiery units' },
    { feature: 'Key Advantages', poy: 'Lowest price, flexible processing', fdy: 'High strength, smooth, lustrous', dty: 'Soft, stretchy, cotton-like feel' },
    { feature: 'Key Limitations', poy: 'Cannot be used for fabric directly', fdy: 'No stretch, stiffer fabric', dty: 'Lower tenacity than FDY' },
  ];

  const highlight = {
    poy: ['Relative Cost', 'Typical Buyers'],
    fdy: ['Weaving', 'Sarees / Curtains', 'Shine / Lustre', 'Tenacity (Strength)'],
    dty: ['Softness', 'Stretch', 'Knitting', 'Socks / Hosiery', 'Sportswear', 'Blankets / Fleece'],
  };

  return (
    <>
      <Helmet>
        <title>Compare POY, FDY, and DTY Polyester Yarn | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Interactive comparison of POY vs FDY vs DTY polyester yarns. Compare softness, strength, cost, typical buyers, and the best applications for each yarn type." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">Compare Yarn Types</h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-6">POY vs FDY vs DTY — Full Breakdown</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Understanding the differences between polyester yarns is critical for selecting the right material for your textile application.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-primary-dark to-primary text-white">
                  <th className="p-4 md:p-6 text-base font-bold border-b border-primary-light text-white w-48">Feature</th>
                  <th className="p-4 md:p-6 text-base font-bold border-b border-primary-light text-white">
                    POY
                    <div className="text-xs font-normal text-blue-300 mt-1">Partially Oriented Yarn</div>
                  </th>
                  <th className="p-4 md:p-6 text-base font-bold border-b border-primary-light text-white">
                    FDY
                    <div className="text-xs font-normal text-blue-300 mt-1">Fully Drawn Yarn</div>
                  </th>
                  <th className="p-4 md:p-6 text-base font-bold border-b border-primary-light text-white">
                    DTY
                    <div className="text-xs font-normal text-blue-300 mt-1">Draw Textured Yarn</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-light transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-primary-dark text-sm">{row.feature}</td>
                    <td className={`p-4 md:p-6 text-sm ${highlight.poy.includes(row.feature) ? 'text-blue-700 font-bold' : 'text-gray-700'}`}>{row.poy}</td>
                    <td className={`p-4 md:p-6 text-sm ${highlight.fdy.includes(row.feature) ? 'text-purple-700 font-bold' : 'text-gray-700'}`}>{row.fdy}</td>
                    <td className={`p-4 md:p-6 text-sm ${highlight.dty.includes(row.feature) ? 'text-green-700 font-bold' : 'text-gray-700'}`}>{row.dty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick nav to product pages */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
            <Link to="/products/poy" className="bg-neutral-light border border-gray-200 text-primary-dark font-bold py-3 px-6 rounded-xl text-center hover:border-accent hover:text-accent transition-colors">
              POY Full Details →
            </Link>
            <Link to="/products/fdy" className="bg-neutral-light border border-gray-200 text-primary-dark font-bold py-3 px-6 rounded-xl text-center hover:border-accent hover:text-accent transition-colors">
              FDY Full Details →
            </Link>
            <Link to="/products/dty" className="bg-neutral-light border border-gray-200 text-primary-dark font-bold py-3 px-6 rounded-xl text-center hover:border-accent hover:text-accent transition-colors">
              DTY Full Details →
            </Link>
            <Link to="/quote" className="bg-accent text-white font-bold py-3 px-8 rounded-xl text-center hover:bg-accent-light shadow-md hover:shadow-lg transition-all">
              Request a Quote
            </Link>
          </div>

          {/* Yarn Finder CTA */}
          <div className="mt-12 bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Still not sure which yarn is right for you?</h2>
            <p className="text-gray-300 mb-6">Answer 6 simple questions and our Yarn Finder will recommend the exact yarn type, denier, luster, and brand for your manufacturing process.</p>
            <Link to="/yarn-finder" className="inline-flex items-center bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5">
              Use the Interactive Yarn Finder <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compare;
