import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LearningManufacturing = () => {
  return (
    <>
      <Helmet>
        <title>How Polyester Yarn is Manufactured | Siddhi Vinayak Polyester</title>
        <meta name="description" content="A simple guide to the polyester yarn manufacturing process. Learn how PTA and MEG become POY, FDY, and DTY." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Yarn Basics</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">How Polyester Yarn is Manufactured</h1>
          <p className="text-gray-500 font-medium">8 min read • Basics Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <p className="text-gray-700 leading-relaxed mb-6">
            The process of turning raw chemicals into the soft, durable yarn used in everyday clothing is an incredible feat of modern engineering. Understanding this process helps buyers appreciate the differences between POY, FDY, and DTY.
          </p>
          
          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">Step 1: Polymerization (The Raw Chemicals)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Polyester is a synthetic polymer. The journey begins in a chemical plant where two main petrochemicals are mixed at extreme temperatures:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><strong>PTA</strong> (Purified Terephthalic Acid) - A white powder.</li>
            <li><strong>MEG</strong> (Monoethylene Glycol) - A clear liquid.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            When heated and pressurized, these chemicals react to form a hot, syrupy plastic melt (polyethylene terephthalate, or PET). This molten plastic is then cooled and cut into tiny solid granules known as <strong>Polyester Chips</strong>.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">Step 2: Melt Spinning (Creating POY & FDY)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The solid polyester chips are transported to a spinning mill, where they are melted down again. The molten liquid is forced through a metal plate containing microscopic holes, called a <strong>spinneret</strong>. It looks similar to water pushing through a showerhead.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the microscopic liquid streams exit the holes, they instantly cool in the air and solidify into continuous solid filaments.
          </p>
          
          <div className="bg-neutral-light p-6 rounded-xl border border-gray-100 my-8">
            <h3 className="text-xl font-bold text-primary-dark mb-2">The Speed Determines the Yarn</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>If pulled at ~3000 meters per minute:</strong> The polymer chains inside the yarn are only partially aligned. This creates <strong>POY (Partially Oriented Yarn)</strong>. POY is weak and stretches unpredictably, making it useless for fabric weaving directly. It is a semi-finished product.</li>
              <li><strong>If pulled at ~5000+ meters per minute:</strong> The polymer chains are stretched to their absolute maximum limit during the spinning process. This creates <strong>FDY (Fully Drawn Yarn)</strong>. FDY is incredibly strong, flat, and ready to be woven directly into fabrics like sarees and curtains.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">Step 3: Texturizing (Creating DTY)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Because FDY is a flat, straight plastic filament, garments made from it feel stiff and lack warmth. To make polyester feel soft like cotton or wool, POY must be sent to a <strong>Texturizing Factory</strong> (like Siddhi Vinayak Polyester).
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In a texturizing machine, the weak POY is simultaneously drawn (stretched) to give it strength, and passed over a heated friction disc that twists it violently. This process is called <strong>False Twist Texturing</strong>. The intense twisting and heating causes the straight filaments to crimp and coil permanently into tiny springs. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This results in <strong>DTY (Draw Textured Yarn)</strong>. The tiny crimped springs make the yarn bulky, stretchy, and soft—perfect for knitting into t-shirts, socks, and activewear.
          </p>
          
          <div className="mt-12 text-center p-8 bg-primary-dark rounded-xl text-white">
            <h2 className="text-2xl font-bold mb-4">Want to compare these yarns side-by-side?</h2>
            <Link to="/products/compare" className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              View the Comparison Matrix
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningManufacturing;
