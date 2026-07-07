import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LearningIntermingling = () => {
  return (
    <>
      <Helmet>
        <title>What is NIM, SIM, and HIM? | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Understand the difference between Non-Intermingled (NIM), Slightly Intermingled (SIM), and Highly Intermingled (HIM) polyester yarns." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Yarn Basics</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">What is NIM, SIM, and HIM?</h1>
          <p className="text-gray-500 font-medium">3 min read • Basics Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">Understanding Intermingling</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When manufacturing Draw Textured Yarn (DTY), the yarn is composed of many microscopic individual filaments (for example, 36 or 48 filaments in a standard 75D yarn). If left completely loose, these filaments can separate, snag, or break during high-speed knitting or weaving processes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            To prevent this, manufacturers use a process called <strong>Intermingling</strong> (also known as interlacing). During this process, compressed air is blown at the yarn at specific intervals to tangle the filaments together, creating tiny knots. The number of knots per meter determines the grade of intermingling.
          </p>

          <div className="space-y-8 mb-10">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">1. NIM (Non-Intermingled)</h3>
              <p className="text-gray-700 mb-2"><strong>Knots per meter:</strong> 0 to 10</p>
              <p className="text-gray-700">In NIM yarn, the filaments are completely loose with virtually no knots holding them together. Because there are no knots, the yarn feels incredibly soft and bulky.</p>
              <p className="text-gray-700 mt-2 font-semibold">Best for: Circular knitting, soft apparel, and sweaters.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-2">2. SIM (Slightly Intermingled)</h3>
              <p className="text-gray-700 mb-2"><strong>Knots per meter:</strong> 40 to 50</p>
              <p className="text-gray-700">SIM yarn has a moderate amount of knots. It provides a perfect balance—it keeps the filaments together better than NIM, allowing it to run smoothly on high-speed machines without snagging, while still retaining a soft feel.</p>
              <p className="text-gray-700 mt-2 font-semibold">Best for: High-speed knitting machines and general apparel.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <h3 className="text-xl font-bold text-orange-900 mb-2">3. HIM (Highly Intermingled)</h3>
              <p className="text-gray-700 mb-2"><strong>Knots per meter:</strong> 100 to 120+</p>
              <p className="text-gray-700">HIM yarn is heavily knotted. While this reduces the soft, fluffy feel of the yarn, it provides extreme stability and strength. The tightly bound filaments can withstand massive tension and friction without breaking.</p>
              <p className="text-gray-700 mt-2 font-semibold">Best for: Weaving (warp/weft), heavy upholstery, and demanding industrial applications.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark mb-6">Which should you choose?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The choice entirely depends on your machinery and the final product. If you are <strong>knitting</strong> soft garments, you generally want NIM or SIM. If you are <strong>weaving</strong> fabrics where the yarn is pulled tight across a loom, you absolutely need HIM to prevent filament breakage.
          </p>
          
          <div className="mt-12 text-center">
            <Link to="/products/dty" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
              Explore Our DTY Range
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningIntermingling;
