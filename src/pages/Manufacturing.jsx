import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Droplet, MoveRight, CheckCircle, Activity, Thermometer } from 'lucide-react';

const Manufacturing = () => {
  const steps = [
    { title: 'Polymerization', desc: 'PTA + MEG are esterified and polycondensed to form PET polymer chips.', icon: <Droplet /> },
    { title: 'Melt Spinning', desc: 'PET chips are melted and extruded through spinnerets to form POY.', icon: <Settings /> },
    { title: 'Drawing', desc: 'The semi-oriented yarn is stretched to orient molecules and increase tenacity, forming FDY.', icon: <MoveRight /> },
    { title: 'Texturing', desc: 'POY is false-twist textured (twist–heat–cool–untwist) to create crimps, yielding DTY.', icon: <Settings /> },
    { title: 'Winding & QC', desc: 'Yarn is wound onto bobbins, spin finishes applied, and quality checked before packing.', icon: <Settings /> }
  ];

  return (
    <>
      <Helmet>
        <title>Manufacturing & Quality | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Discover our state-of-the-art polyester yarn manufacturing process and our rigorous quality control standards." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Manufacturing & Quality</h1>
          <p className="text-xl text-gray-300">State-of-the-Art Production & Uncompromising Standards</p>
        </div>
      </div>

      {/* Production Facilities */}
      <section className="py-20 bg-neutral-light border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Production Facility</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our manufacturing facilities are equipped with the latest technology from Barmag and TMT, ensuring high efficiency, consistency, and superior quality across our entire product range.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                By maintaining precise control over temperature, draw ratio, and speed, we ensure every batch of Draw Textured Yarn (DTY) meets strict tensile strength, elasticity, and intermingling knot counts.
              </p>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img src="/images/manufacturing-plant.png" alt="State of the art Barmag texturizing lines" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-dark mb-10 text-center">Step-by-Step Manufacturing Process</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-primary/20">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                  {step.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-primary-dark mb-2">Step {i + 1}: {step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Quality Assurance</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Quality is ingrained in every step of our manufacturing workflow. We continuously sample batches to ensure physical and chemical properties meet stringent global standards before they are cleared for packaging.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-gray-700"><strong>99.8%</strong> First Quality Yield Rate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-gray-700">Strict ASTM and ISO compliance for all testing protocols.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-light rounded-xl overflow-hidden border border-gray-200 shadow-lg aspect-video">
              <img src="/images/quality-testing.png" alt="Quality Check" className="w-full h-full object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">Key Parameters Tested</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-light p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <Activity className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg text-primary-dark mb-2">Tenacity & Elongation</h4>
              <p className="text-sm text-gray-600">Continuous testing of tensile strength and elasticity using automated Uster testers to ensure breakage-free weaving.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <Thermometer className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg text-primary-dark mb-2">Thermal Shrinkage</h4>
              <p className="text-sm text-gray-600">Measuring hot-air and boiling-water shrinkage to guarantee dimensional stability of the finished fabrics.</p>
            </div>
            <div className="bg-neutral-light p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-lg text-primary-dark mb-2">Dye Uniformity</h4>
              <p className="text-sm text-gray-600">Knit-and-dye tests to check color consistency, luster, and avoid striping in critical applications.</p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Manufacturing;
