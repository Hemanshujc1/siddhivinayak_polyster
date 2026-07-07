import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, X, ArrowDown, Download, ArrowRight } from 'lucide-react';
import BrandsSection, { BrandScrollStrip } from '../components/BrandsSection';

const IndustryRating = ({ label, rating, max = 5 }) => (
  <div className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
    <span className="text-gray-700 font-medium text-sm w-36 shrink-0">{label}</span>
    <div className="flex gap-1 flex-1">
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} className={`flex-1 h-2 rounded-full ${i < rating ? 'bg-accent' : 'bg-gray-200'}`} />
      ))}
    </div>
    <span className="text-xs font-bold text-gray-500 w-8 text-right shrink-0">{rating}/{max}</span>
  </div>
);

const TABS = ['Advantages', 'Industry Fit', 'Tech Specs', 'Buyers'];

const Dty = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advantages = [
    { title: 'Exceptional Softness', desc: 'The crimping process creates bulk and softness closely resembling cotton and wool.' },
    { title: 'High Stretch & Recovery', desc: 'Ideal for activewear. Stretches significantly and springs back to its original shape.' },
    { title: 'Excellent Moisture Management', desc: 'Textured surface wicks moisture away — perfect for sportswear and socks.' },
    { title: 'Thermal Insulation', desc: 'Crimped filaments trap air, providing warmth for fleece, blankets, and winter garments.' },
    { title: 'Dyeable & Colorfast', desc: 'Accepts disperse dyes evenly. Vivid colors that resist fading after repeated washing.' },
    { title: 'Cost-Effective', desc: 'Delivers cotton/wool-like properties at a fraction of the cost of natural fibers.' },
  ];

  const specs = [
    ['Denier Range', '50D, 75D, 100D, 150D, 200D, 300D, 600D'],
    ['Filament Count', '36F, 48F, 72F, 96F, 144F'],
    ['Luster', 'Semi Dull (SD) / Bright (BR) / Full Dull (FD)'],
    ['Intermingling', 'NIM (0–10) / SIM (40–50) / HIM (100–120 knots/m)'],
    ['Tenacity', '≥ 3.5 g/d'],
    ['Elongation at Break', '25% – 35%'],
    ['Boiling Water Shrinkage', '3% – 8%'],
    ['Cross Section', 'Trilobal / Round'],
    ['Oil Content %', '2.5% – 4.0%'],
    ['Tube Weight', '~1.2 kg – 1.8 kg per tube'],
    ['Cone Weight', '~2 kg – 5 kg'],
    ['HS Code', '5402.33 / 5402.34'],
    ['Packing', 'Carton / Pallet — as per buyer preference'],
  ];

  return (
    <>
      <Helmet>
        <title>DTY (Draw Textured Yarn) | Siddhi Vinayak Polyester</title>
        <meta name="description" content="DTY: Soft, stretchable, textured polyester yarn manufactured in-house. Full specs, advantages, industry ratings, and buying guide." />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-dark to-primary pt-32 pb-12 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block bg-green-500/20 text-green-300 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-green-500/30 mb-4">
                ✓ Manufactured In-House
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">DTY — Draw Textured Yarn</h1>
              <p className="text-blue-200 text-lg mb-6">Soft • Stretchable • Textured Polyester Yarn</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['75D – 600D', 'NIM / SIM / HIM', 'SD / BR / FD'].map(t => (
                  <span key={t} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/quote" className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Request Quote
                </Link>
                <Link to="/downloads" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold transition-all">
                  <Download className="w-4 h-4" /> Datasheet
                </Link>
              </div>
            </div>
            {/* Quick verdict cards */}
            <div className="w-full md:w-72 space-y-3 shrink-0">
              <div className="bg-green-500/15 border border-green-400/30 rounded-xl p-4">
                <div className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">✓ Best For</div>
                <div className="flex flex-wrap gap-1">
                  {['Knitting', 'Socks', 'Sportswear', 'Blankets', 'Fleece', 'Innerwear'].map(v => (
                    <span key={v} className="bg-white/10 text-white text-xs px-2 py-1 rounded-md">{v}</span>
                  ))}
                </div>
              </div>
              <div className="bg-red-500/15 border border-red-400/30 rounded-xl p-4">
                <div className="text-red-300 text-xs font-bold uppercase tracking-wider mb-2">✕ Avoid If</div>
                <div className="flex flex-wrap gap-1">
                  {['Zero stretch needed', 'High-gloss weaving', 'Industrial rope'].map(v => (
                    <span key={v} className="bg-white/10 text-white text-xs px-2 py-1 rounded-md">{v}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* What is DTY — compact */}
      <section className="py-10 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Spool Image */}
            <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md border border-gray-200 shrink-0 bg-white">
              <img src="/images/products/dty-spool.png" alt="DTY Yarn Bobbin" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-dark mb-3">What is DTY?</h2>
              <p className="text-gray-700 leading-relaxed">
                DTY is a continuous polyester filament that has been crimped (textured) to feel soft and fluffy — similar to cotton or wool. It is stretchy, warm, and provides excellent insulation. Made by feeding <Link to="/products/poy" className="text-accent font-bold hover:underline">POY</Link> through a false-twist texturizing machine.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-sm font-semibold text-primary-dark w-full lg:w-auto justify-center">
              <div className="text-center px-3 py-2 bg-gray-100 rounded-lg">POY</div>
              <ArrowDown className="text-accent w-4 h-4 rotate-[-90deg]" />
              <div className="text-center px-3 py-2 bg-gray-100 rounded-lg">Drawing</div>
              <ArrowDown className="text-accent w-4 h-4 rotate-[-90deg]" />
              <div className="text-center px-3 py-2 bg-gray-100 rounded-lg">False Twist</div>
              <ArrowDown className="text-accent w-4 h-4 rotate-[-90deg]" />
              <div className="text-center px-3 py-2 bg-accent text-white rounded-lg">DTY ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Tab buttons */}
          <div className="flex gap-1 bg-neutral-light p-1 rounded-xl mb-8 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === i
                    ? 'bg-primary-dark text-white shadow'
                    : 'text-gray-600 hover:text-primary-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab: Advantages */}
          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex items-start gap-3 p-5 bg-neutral-light rounded-xl border border-gray-100">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark text-sm mb-1">{adv.title}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Industry Fit */}
          {activeTab === 1 && (
            <div className="max-w-lg mx-auto bg-neutral-light rounded-2xl p-6 border border-gray-100">
              <IndustryRating label="Circular Knitting" rating={5} />
              <IndustryRating label="Socks / Hosiery" rating={5} />
              <IndustryRating label="Sportswear" rating={5} />
              <IndustryRating label="Home Textiles" rating={4} />
              <IndustryRating label="Weaving" rating={3} />
              <IndustryRating label="Industrial" rating={2} />
            </div>
          )}

          {/* Tab: Tech Specs */}
          {activeTab === 2 && (
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-dark to-primary text-white">
                    <th className="py-3 px-4 text-left font-bold text-white text-sm">Parameter</th>
                    <th className="py-3 px-4 text-left font-bold text-white text-sm">Value / Range</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100 hover:bg-neutral-light transition-colors">
                      <td className="py-2.5 px-4 text-sm font-semibold text-gray-600">{label}</td>
                      <td className="py-2.5 px-4 text-sm text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab: Buyers */}
          {activeTab === 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Knitting Mills', 'Garment Manufacturers', 'Sock Factories', 'Blanket Manufacturers', 'Export Houses', 'Fabric Traders', 'Home Textile Mfrs.', 'Sportswear Brands'].map(b => (
                <div key={b} className="bg-neutral-light p-4 rounded-xl border border-gray-100 text-center text-sm font-semibold text-primary-dark">
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brands Scroll Strip */}
      <BrandScrollStrip yarnType="DTY" />

      {/* Related Products */}
      <section className="py-10 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-xl font-bold text-primary-dark mb-4">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/products/poy" className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">POY</div>
              <div className="flex-1">
                <div className="font-bold text-primary-dark group-hover:text-accent transition-colors">POY (Partially Oriented Yarn)</div>
                <div className="text-gray-500 text-sm">Raw material used to manufacture DTY.</div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </Link>
            <Link to="/products/fdy" className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0 font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">FDY</div>
              <div className="flex-1">
                <div className="font-bold text-primary-dark group-hover:text-accent transition-colors">FDY (Fully Drawn Yarn)</div>
                <div className="text-gray-500 text-sm">Smooth, lustrous. Best for weaving and sarees.</div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dty;
