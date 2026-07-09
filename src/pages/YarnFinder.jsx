import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  Shirt, 
  Home as HomeIcon, 
  Factory, 
  Compass, 
  ChevronRight,
  Sliders,
  Check
} from 'lucide-react';

const YarnFinder = () => {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState('');
  const [application, setApplication] = useState('');

  const handleIndustrySelect = (selected) => {
    setIndustry(selected);
    setStep(2);
  };

  const handleApplicationSelect = (selected) => {
    setApplication(selected);
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setIndustry('');
    setApplication('');
  };

  const getSubcategories = () => {
    if (industry === 'Garments') {
      return [
        { name: 'Sportswear / Activewear', desc: 'Stretchable, moisture-wicking materials.' },
        { name: 'Socks & Hosiery', desc: 'Soft textures with stretch recovery.' },
        { name: 'Sarees & Traditional', desc: 'High-lustre filaments with smooth glide.' },
        { name: 'Suitings & Linings', desc: 'Flat yarns with clean drape and durability.' },
        { name: 'Innerwear / Lingerie', desc: 'Ultra-soft skin contact textures.' }
      ];
    }
    if (industry === 'Home Textiles') {
      return [
        { name: 'Curtains / Drapes', desc: 'Strong, sun-resistant woven hang.' },
        { name: 'Blankets', desc: 'High-bulk insulating crimped fibers.' },
        { name: 'Upholstery & Sofa Fabrics', desc: 'Heavy denier, wear-resistant yarns.' }
      ];
    }
    if (industry === 'Industrial') {
      return [
        { name: 'Texturizing / Crimping Factory', desc: 'Raw POY feedstocks for texturing plants.' },
        { name: 'Sewing Thread', desc: 'High tenacity continuous filament fibers.' },
        { name: 'Ropes / Nets', desc: 'Maximum tensile strength and weather resistance.' }
      ];
    }
    return [];
  };

  const getRecommendation = () => {
    const fdyApps = ['Sarees & Traditional', 'Suitings & Linings', 'Curtains / Drapes', 'Ropes / Nets', 'Sewing Thread'];
    const dtyApps = ['Sportswear / Activewear', 'Socks & Hosiery', 'Innerwear / Lingerie', 'Blankets', 'Upholstery & Sofa Fabrics'];
    const poyApps = ['Texturizing / Crimping Factory'];

    if (fdyApps.includes(application)) {
      return {
        yarn: 'FDY (Fully Drawn Yarn)',
        fullName: 'Fully Drawn Polyester Filament Yarn',
        reason: 'Your application requires high tenacity (tensile strength), low elongation, and a sleek, lustrous finish. FDY is a fully stretched continuous filament that runs flawlessly on high-speed weaving and warping looms.',
        link: '/products/fdy',
        specs: [
          { label: 'Recommended Deniers', value: '50D, 75D, 150D, 300D' },
          { label: 'Ideal Luster', value: 'Bright (BR) or Trilobal Bright (TBR)' },
          { label: 'Structural Benefit', value: 'High strength, zero post-shrinkage' }
        ]
      };
    }
    if (dtyApps.includes(application)) {
      return {
        yarn: 'DTY (Draw Textured Yarn)',
        fullName: 'Draw Textured Polyester Yarn',
        reason: 'Your application requires elasticity, warmth, bulk, and a soft fabric feel. DTY undergoes false-twist texturizing to create permanent micro-crimps, offering wool-like volume and excellent breathability.',
        link: '/products/dty',
        specs: [
          { label: 'Recommended Deniers', value: '75D, 150D, 300D, 450D' },
          { label: 'Ideal Intermingling', value: 'SIM (Semi-Intermingled) or HIM (High)' },
          { label: 'Structural Benefit', value: 'Exceptional stretch recovery & insulation' }
        ]
      };
    }
    if (poyApps.includes(application)) {
      return {
        yarn: 'POY (Partially Oriented Yarn)',
        fullName: 'Partially Oriented Polyester Feedstock',
        reason: 'As a draw-texturizing or crimping unit, POY is your essential raw input. Our sourced POY ensures optimal elongation, consistent finish oil content, and premium package build to minimize breaks during texturing.',
        link: '/products/poy',
        specs: [
          { label: 'Recommended Deniers', value: '115D, 130D, 255D, 480D' },
          { label: 'Ideal Colors', value: 'Raw White & Dope Dyed Black' },
          { label: 'Structural Benefit', value: 'High drawability & tension stability' }
        ]
      };
    }
    
    return {
      yarn: 'Specialty Polyester Solution',
      fullName: 'Custom Technical Configuration',
      reason: 'Your manufacturing requirement demands custom deniers, specialized filament counts, or specific intermingling knot counts. Our technical engineering division can configure custom runs.',
      link: '/quote',
      specs: [
        { label: 'Configuration', value: 'Custom engineered filament' },
        { label: 'Luster / Finish', value: 'Tailored to application' },
        { label: 'Next Step', value: 'Consult with textile engineers' }
      ]
    };
  };

  const stepsInfo = [
    { title: 'Industry Type', desc: 'Choose your sector' },
    { title: 'End Application', desc: 'Select end product' },
    { title: 'Recommendation', desc: 'Get customized yarn config' }
  ];

  return (
    <>
      <Helmet>
        <title>Interactive Yarn Finder | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Use our interactive selection utility to configure the perfect polyester yarn based on your industry and textile applications." />
      </Helmet>

      {/* Screen Fitting Layout: Height fits standard viewports, eliminating scrollbar on desktop */}
      <div className="bg-neutral-light min-h-[calc(100vh-80px)] mt-16 flex items-center py-6 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-4 lg:py-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Context Panel (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-accent/5 border border-accent/15 text-accent mb-4 w-fit mx-auto lg:mx-0">
                <Compass className="w-3.5 h-3.5" /> Interactive Selection Tool
              </span>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4 leading-tight tracking-tight">
                Yarn Recommendation Finder
              </h1>
              
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                Answer a few quick questions about your production run to determine the ideal denier, twist structure, and yarn type.
              </p>

              {/* Vertical Stepper Timeline (Hidden or horizontal on mobile, vertical on desktop) */}
              <div className="hidden lg:flex flex-col gap-6 relative before:absolute before:left-5 before:top-2 before:h-[80%] before:w-0.5 before:bg-slate-200">
                {stepsInfo.map((info, idx) => {
                  const num = idx + 1;
                  const isActive = step >= num;
                  const isCompleted = step > num;
                  
                  return (
                    <div key={num} className="relative z-10 flex items-center gap-4 group">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all duration-300 border-2 shrink-0 ${
                          isActive 
                            ? 'bg-accent border-accent text-white' 
                            : 'bg-white border-slate-200 text-gray-400'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : num}
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold tracking-wide uppercase ${isActive ? 'text-primary-dark font-extrabold' : 'text-gray-400'}`}>
                          {info.title}
                        </h4>
                        <p className="text-[11px] text-gray-400">{info.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Stepper Header (Horizontal) */}
              <div className="flex lg:hidden items-center justify-between relative max-w-xs mx-auto w-full mb-8">
                <div className="absolute left-0 top-4 w-full h-0.5 bg-slate-200 z-0 rounded"></div>
                <div 
                  className="absolute left-0 top-4 h-0.5 bg-accent z-0 transition-all duration-500 rounded" 
                  style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                ></div>
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300 ${
                      step >= num ? 'bg-accent text-white' : 'bg-slate-200 text-gray-500'
                    }`}
                  >
                    {step > num ? <Check className="w-4 h-4 stroke-[3]" /> : num}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Interactive Card (7 Cols) */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100/80 p-6 md:p-8 lg:p-10 min-h-[380px] flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  {/* STEP 1: Industry */}
                  {step === 1 && (
                    <motion.div 
                      key="step-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2 className="text-lg md:text-xl font-extrabold text-primary-dark mb-1 text-center lg:text-left">
                        Select Your Industry Sector
                      </h2>
                      <p className="text-gray-500 text-xs mb-6 text-center lg:text-left">
                        Which branch of manufacturing or fabric preparation represents your primary operations?
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            name: 'Garments',
                            icon: <Shirt className="w-6 h-6 text-blue-500" />,
                            desc: 'Apparel, knitwear, socks, and traditional weaves.'
                          },
                          {
                            name: 'Home Textiles',
                            icon: <HomeIcon className="w-6 h-6 text-amber-500" />,
                            desc: 'Curtains, drapes, bedsheets, and sofa upholstery.'
                          },
                          {
                            name: 'Industrial',
                            icon: <Factory className="w-6 h-6 text-emerald-500" />,
                            desc: 'Crimping feedstocks, ropes, threads, and webbing.'
                          }
                        ].map((opt) => (
                          <button
                            key={opt.name}
                            onClick={() => handleIndustrySelect(opt.name)}
                            className="flex flex-col items-center text-center p-5 bg-white border-2 border-slate-100 hover:border-accent hover:shadow-sm rounded-xl transition-all group"
                          >
                            <div className="w-11 h-11 rounded-lg bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-accent/5 transition-colors">
                              {opt.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-accent transition-colors">
                              {opt.name}
                            </h3>
                            <p className="text-[11px] text-gray-400 leading-normal">
                              {opt.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Subcategory */}
                  {step === 2 && (
                    <motion.div 
                      key="step-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <button 
                        onClick={() => setStep(1)} 
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-accent font-bold mb-4 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>

                      <h2 className="text-lg md:text-xl font-extrabold text-primary-dark mb-1 text-center lg:text-left">
                        Select End Application
                      </h2>
                      <p className="text-gray-500 text-xs mb-6 text-center lg:text-left">
                        Choose the specific {industry.toLowerCase()} category you are weaving or knitting.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-1">
                        {getSubcategories().map((app) => (
                          <button
                            key={app.name}
                            onClick={() => handleApplicationSelect(app.name)}
                            className="text-left p-4 rounded-xl border border-slate-150 hover:border-accent/40 bg-white hover:bg-slate-50 transition-all flex justify-between items-center group shadow-sm"
                          >
                            <div className="max-w-[85%]">
                              <h4 className="font-bold text-slate-800 text-xs mb-0.5 group-hover:text-accent transition-colors">
                                {app.name}
                              </h4>
                              <p className="text-[10px] text-gray-400 truncate">{app.desc}</p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Results */}
                  {step === 3 && (
                    <motion.div 
                      key="step-3"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center lg:text-left"
                    >
                      <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full shrink-0">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-[10px] font-bold text-accent tracking-widest uppercase mb-0.5">Recommended Configuration</h2>
                          <h3 className="text-xl md:text-2xl font-extrabold text-primary-dark">
                            {getRecommendation().yarn}
                          </h3>
                        </div>
                      </div>

                      {/* Spec summary */}
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 md:p-5 mb-5 text-left text-xs">
                        <div className="grid grid-cols-3 gap-4 mb-4 border-b border-slate-200/50 pb-3">
                          {getRecommendation().specs.map((sp, sIdx) => (
                            <div key={sIdx}>
                              <span className="block text-[10px] text-gray-400 font-medium mb-0.5">{sp.label}</span>
                              <span className="block font-bold text-slate-800 leading-tight">{sp.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-slate-500 leading-relaxed text-[11px]">
                          {getRecommendation().reason}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4">
                        {getRecommendation().link !== '/quote' && (
                          <Link 
                            to={getRecommendation().link} 
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-sm text-xs w-full sm:w-auto justify-center"
                          >
                            Explore Specs <Sliders className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        <Link 
                          to="/quote" 
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-bold rounded-lg transition-all shadow-md text-xs w-full sm:w-auto justify-center"
                        >
                          Request Quotation <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button 
                          onClick={reset} 
                          className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-accent font-bold transition-colors py-2"
                        >
                          <RotateCcw className="w-3 h-3" /> Start Over
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default YarnFinder;
