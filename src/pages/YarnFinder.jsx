import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

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

  // Define the logic
  const getSubcategories = () => {
    if (industry === 'Garments') {
      return ['Sportswear / Activewear', 'Socks & Hosiery', 'Sarees & Traditional', 'Suitings & Linings', 'Innerwear / Lingerie'];
    }
    if (industry === 'Home Textiles') {
      return ['Curtains / Drapes', 'Blankets', 'Upholstery & Sofa Fabrics'];
    }
    if (industry === 'Industrial') {
      return ['Texturizing / Crimping Factory', 'Sewing Thread', 'Ropes / Nets'];
    }
    return [];
  };

  const getRecommendation = () => {
    const fdyApps = ['Sarees & Traditional', 'Suitings & Linings', 'Curtains / Drapes', 'Ropes / Nets'];
    const dtyApps = ['Sportswear / Activewear', 'Socks & Hosiery', 'Innerwear / Lingerie', 'Blankets', 'Upholstery & Sofa Fabrics'];
    const poyApps = ['Texturizing / Crimping Factory'];

    if (fdyApps.includes(application)) {
      return {
        yarn: 'FDY (Fully Drawn Yarn)',
        reason: 'Your application requires high tenacity (strength), smoothness, and often a lustrous finish. FDY is a flat, continuous filament perfect for this.',
        link: '/products/fdy'
      };
    }
    if (dtyApps.includes(application)) {
      return {
        yarn: 'DTY (Draw Textured Yarn)',
        reason: 'Your application requires stretch, bulk, warmth, or a soft, cotton-like feel. DTY is textured to provide excellent insulation and comfort.',
        link: '/products/dty'
      };
    }
    if (poyApps.includes(application)) {
      return {
        yarn: 'POY (Partially Oriented Yarn)',
        reason: 'As a texturizing unit, you need the semi-finished raw material (POY) to feed into your crimping machines to manufacture DTY.',
        link: '/products/poy'
      };
    }
    // Default
    return {
      yarn: 'Custom Recommendation Required',
      reason: 'Your application is highly specialized. We recommend speaking with our textile engineers to find the exact denier and filament count you need.',
      link: '/quote'
    };
  };

  return (
    <>
      <Helmet>
        <title>Interactive Yarn Finder | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Answer two simple questions to find the exact polyester yarn you need for your textile manufacturing." />
      </Helmet>

      <div className="bg-gradient-to-br from-primary-dark to-primary py-20 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Interactive Yarn Finder</h1>
          <p className="text-xl text-gray-300">Not sure which yarn to use? Let us guide you.</p>
        </div>
      </div>

      <section className="py-16 bg-neutral-light min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0 rounded"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent z-0 transition-all duration-500 rounded" 
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              ></div>
              
              {[1, 2, 3].map((num) => (
                <div 
                  key={num} 
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                    step >= num ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                </div>
              ))}
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">What industry are you in?</h2>
                <div className="space-y-4">
                  {['Garments', 'Home Textiles', 'Industrial'].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => handleIndustrySelect(ind)}
                      className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary-light/5 transition-all text-lg font-medium text-gray-700 flex justify-between items-center group"
                    >
                      {ind}
                      <ArrowRight className="text-gray-300 group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="animate-fade-in">
                <button onClick={() => setStep(1)} className="text-gray-500 hover:text-primary flex items-center mb-6 transition-colors">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back
                </button>
                <h2 className="text-2xl font-bold text-primary-dark mb-2 text-center">What exactly are you making?</h2>
                <p className="text-center text-gray-500 mb-8">Select your specific {industry.toLowerCase()} application.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getSubcategories().map((app) => (
                    <button
                      key={app}
                      onClick={() => handleApplicationSelect(app)}
                      className="w-full text-left px-6 py-4 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary-light/5 transition-all font-medium text-gray-700"
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 (Result) */}
            {step === 3 && (
              <div className="animate-fade-in text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-primary-dark mb-2">We Recommend:</h2>
                <div className="text-2xl font-bold text-accent mb-6 py-4 px-8 bg-neutral-light inline-block rounded-xl border border-gray-200 shadow-sm">
                  {getRecommendation().yarn}
                </div>
                
                <p className="text-gray-700 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  <strong>Why?</strong> {getRecommendation().reason}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                  {getRecommendation().link !== '/quote' && (
                    <Link to={getRecommendation().link} className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
                      Learn More About {getRecommendation().yarn.split(' ')[0]}
                    </Link>
                  )}
                  <Link to="/quote" className="bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-light transition-colors shadow-md">
                    Request a Quote
                  </Link>
                </div>

                <button onClick={reset} className="text-gray-500 hover:text-primary flex items-center justify-center mx-auto transition-colors font-medium">
                  <RotateCcw className="mr-2 w-4 h-4" /> Start Over
                </button>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default YarnFinder;
