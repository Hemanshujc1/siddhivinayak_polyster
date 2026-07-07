import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const LearningKnitting = () => {
  return (
    <>
      <Helmet>
        <title>Yarn Buying Guide for Knitters | Siddhi Vinayak Polyester</title>
        <meta name="description" content="A comprehensive guide on selecting the best polyester yarn for circular and warp knitting machines." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Technical Guides</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">Yarn Buying Guide for Knitters</h1>
          <p className="text-gray-500 font-medium">7 min read • Buying Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <p className="text-gray-700 leading-relaxed mb-8">
            Buying yarn for knitting mills requires extreme precision. The wrong intermingling grade or an uneven denier can result in hours of machine downtime, broken needles, and ruined fabric. This guide outlines exactly what you should look for when sourcing polyester yarn for your knitting units.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">1. Select the Right Yarn Type</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For almost all standard knitting applications (circular and flat), <strong>DTY (Draw Textured Yarn)</strong> is the undisputed champion. Its crimped, bulky nature allows the knitted loops to fill out the fabric structure, resulting in a soft, opaque, and breathable textile.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>When to use FDY:</strong> FDY should only be used in knitting if you are running specific warp knitting machines to produce specialized flat, shiny fabrics (like tricot linings) where stretch and bulk are not desired.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">2. Determine the Correct Intermingling (NIM vs SIM)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Intermingling dictates how many knots hold the yarn filaments together. Getting this wrong is the #1 cause of knitting faults.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong>Low-Speed Circular Knitting:</strong> You can use NIM (Non-Intermingled). It will yield the softest fabric possible, but the loose filaments mean you cannot run your machines at maximum RPM.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <strong>High-Speed Circular Knitting:</strong> You absolutely need SIM (Slightly Intermingled). The small knots hold the filaments together, preventing snags on the needles when operating at high speeds.
              </div>
            </li>
          </ul>
          <p className="text-gray-700 italic mb-6">
            *Never buy HIM (Highly Intermingled) for general knitting. It is too rigid and will result in a harsh, stiff fabric.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">3. Pay Attention to Luster</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most knitters producing t-shirts, leggings, and casual wear should order <strong>Semi Dull (SD)</strong> yarn. It mimics the natural, matte look of cotton. If you use Bright (BR) yarn for a standard t-shirt, it will look cheap and overly shiny.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">4. Always Demand AA Grade</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cheaping out on B-grade yarn is a false economy. B-grade yarn often suffers from uneven dyeing (barré effect) and weak spots that will snap during knitting. The cost of machine downtime and rejected fabric will vastly outweigh the savings on the yarn. Always verify you are receiving AA Grade export quality yarn.
          </p>

          <div className="mt-12 text-center p-8 bg-neutral-light border border-gray-200 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Need reliable DTY for your knitting unit?</h2>
            <p className="text-gray-600 mb-6">We manufacture premium NIM and SIM DTY specifically engineered for high-speed circular knitting machines.</p>
            <Link to="/quote" className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Request a Sample
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningKnitting;
