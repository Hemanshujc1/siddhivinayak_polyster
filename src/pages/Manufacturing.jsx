import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Droplet, MoveRight } from 'lucide-react';

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
        <title>Manufacturing Process | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Discover our state-of-the-art polyester yarn manufacturing process from polymerization to melt spinning, texturing, and winding." />
      </Helmet>
      
      <div className="bg-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Process</h1>
          <p className="text-xl text-gray-300">State-of-the-Art Production Facilities</p>
        </div>
      </div>

      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Our manufacturing facilities are equipped with the latest technology from Barmag and TMT, ensuring high efficiency, consistency, and superior quality across our entire product range.
          </p>

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
    </>
  );
};

export default Manufacturing;
