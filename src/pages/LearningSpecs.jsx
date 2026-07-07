import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LearningSpecs = () => {
  return (
    <>
      <Helmet>
        <title>How to Read Yarn Specifications | Siddhi Vinayak Polyester</title>
        <meta name="description" content="A simple guide to decoding polyester yarn specifications like 75D/36F SD NIM RW AA DTY." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Technical Guides</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">How to Read Yarn Specifications</h1>
          <p className="text-gray-500 font-medium">6 min read • Technical Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <p className="text-gray-700 leading-relaxed mb-10">
            When you request a quote for polyester yarn, you will often see a string of letters and numbers that looks like a secret code. For example:
          </p>
          
          <div className="bg-primary-dark text-white text-center p-8 rounded-xl font-mono text-2xl font-bold tracking-widest mb-10 shadow-lg">
            75D / 36F SD NIM RW AA DTY
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            While intimidating at first, every single part of this string gives you critical information about the yarn. Let's break it down piece by piece.
          </p>

          <div className="space-y-8">
            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">1. 75D / 36F (Thickness & Softness)</h3>
              <p className="text-gray-700 mb-2"><strong>75D (Denier):</strong> The thickness of the yarn. 75D is a fine yarn.</p>
              <p className="text-gray-700"><strong>36F (Filament):</strong> The number of microscopic fibers making up the yarn. 36 is standard for 75D. Higher means softer.</p>
              <Link to="/learning/denier" className="text-sm text-primary font-medium hover:underline inline-block mt-2">Read our full guide on Denier & Filament</Link>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">2. SD (Luster / Shine)</h3>
              <p className="text-gray-700 mb-2">This dictates how shiny the yarn will be.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li><strong>BR (Bright):</strong> High shine, reflects light strongly.</li>
                <li><strong>SD (Semi Dull):</strong> The most common. A matte finish that looks natural like cotton.</li>
                <li><strong>FD (Full Dull):</strong> Completely zero shine.</li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">3. NIM (Intermingling)</h3>
              <p className="text-gray-700 mb-2">To keep the tiny filaments together during weaving or knitting, air pressure is used to create tiny knots in the yarn. This is called intermingling or intermingled knots.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li><strong>NIM (Non-Intermingled):</strong> Very few or zero knots. The filaments are loose. Good for soft knitting.</li>
                <li><strong>SIM (Slightly Intermingled):</strong> Some knots. Provides better stability for high-speed knitting machines.</li>
                <li><strong>HIM (Highly Intermingled):</strong> Lots of knots. Essential for weaving, where the yarn is subjected to high tension and friction.</li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">4. RW (Color)</h3>
              <p className="text-gray-700 mb-2">Stands for <strong>Raw White</strong>. This means the yarn is in its natural, un-dyed state. It is ready for you to knit/weave into fabric and dye it later.</p>
              <p className="text-gray-700">If you were buying pre-dyed yarn, it might say DDB (Dope Dyed Black) or another specific color code.</p>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">5. AA (Grade)</h3>
              <p className="text-gray-700 mb-2">The quality grade of the yarn.</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li><strong>AA Grade:</strong> The highest quality, premium export grade with zero defects.</li>
                <li><strong>A Grade:</strong> Standard commercial grade, acceptable for most domestic uses.</li>
                <li><strong>B/C Grade:</strong> Sub-standard yarn, usually sold at a heavy discount. (We only supply AA grade).</li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-accent mb-2">6. DTY (Yarn Type)</h3>
              <p className="text-gray-700 mb-2">Finally, the overall category of the yarn. <strong>Draw Textured Yarn</strong>.</p>
              <Link to="/products/dty" className="text-sm text-primary font-medium hover:underline inline-block mt-2">Learn more about DTY</Link>
            </div>
          </div>
          
          <div className="mt-12 text-center p-8 bg-primary-dark rounded-xl text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to put your knowledge to the test?</h2>
            <p className="text-gray-300 mb-6">Now that you know what these codes mean, you can request the exact specifications you need for your textile unit.</p>
            <Link to="/quote" className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningSpecs;
