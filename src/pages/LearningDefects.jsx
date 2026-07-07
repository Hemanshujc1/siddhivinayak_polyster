import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const LearningDefects = () => {
  return (
    <>
      <Helmet>
        <title>Common Yarn Defects & How to Avoid Them | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Identify and troubleshoot common polyester yarn defects like barré, broken filaments, and uneven dyeing." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Technical Guides</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">Common Yarn Defects & How to Avoid Them</h1>
          <p className="text-gray-500 font-medium">10 min read • Troubleshooting Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <p className="text-gray-700 leading-relaxed mb-8">
            Even minor defects in yarn can propagate into massive, costly flaws in the final fabric. By understanding common yarn defects, textile manufacturers can spot issues before throwing the yarn on the loom or knitting machine.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">1. Broken Filaments (Fuzziness)</h2>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2 mt-0">The Problem</h3>
                <p className="text-gray-700 m-0">The yarn appears hairy or fuzzy on the bobbin. When knitting or weaving, these broken micro-filaments snag on needles or guides, causing machine stoppages or holes in the fabric.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Cause:</strong> Poor quality POY feedstock, improper tension during texturizing, or damaged ceramic guides in the manufacturing plant.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>How to Avoid:</strong> Only purchase AA Grade yarn from manufacturers with strict quality control over their spinning and texturizing lines.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">2. Barré Effect (Uneven Dyeing)</h2>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2 mt-0">The Problem</h3>
                <p className="text-gray-700 m-0">After dyeing the final fabric, horizontal bands or stripes of slightly different shades appear across the material, ruining it.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Cause:</strong> This is often caused by mixing yarn from different manufacturing "Lots" or "Merges". Yarn produced on different days or from different batches of raw material will absorb dye at slightly different rates.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>How to Avoid:</strong> Never mix yarn from different lots on the same machine. Reputable suppliers will clearly label the lot number on every carton. If you run out of yarn mid-run, ensure you restock with the exact same lot number.
          </p>

          <h2 className="text-3xl font-bold text-primary-dark mb-6 mt-10">3. Tight Spots / Uneven Bulk</h2>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2 mt-0">The Problem</h3>
                <p className="text-gray-700 m-0">In DTY, you might find sections of the yarn that feel incredibly stiff and flat, lacking the crimp and stretch of the rest of the yarn.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Cause:</strong> Inconsistent heat or friction applied during the False Twist Texturing process. This means the crimp wasn't set properly in certain areas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>How to Avoid:</strong> This is a manufacturing flaw. Switch to a supplier that uses modern, computerized texturizing machines (like Barmag) that constantly monitor tension and temperature.
          </p>

          <div className="mt-12 p-8 bg-neutral-light border border-gray-200 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Sick of dealing with B-Grade yarn defects?</h2>
            <p className="text-gray-600 mb-6">At Siddhi Vinayak Polyester, we only supply export-quality AA Grade yarn, rigorously tested to ensure zero broken filaments and consistent dye uptake.</p>
            <Link to="/quote" className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Request a Quote for AA Grade Yarn
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningDefects;
