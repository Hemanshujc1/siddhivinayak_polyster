import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LearningLuster = () => {
  return (
    <>
      <Helmet>
        <title>Difference Between Bright and Semi Dull Yarn | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Learn the difference between Bright (BR), Semi Dull (SD), and Full Dull (FD) polyester yarn lusters." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Yarn Basics</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">Bright vs. Semi Dull Yarn</h1>
          <p className="text-gray-500 font-medium">4 min read • Basics Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <p className="text-gray-700 leading-relaxed mb-6">
            Luster refers to the way light reflects off the surface of the yarn. Because polyester is fundamentally a plastic, it is naturally highly reflective and shiny. However, not every fabric needs to look like a shiny plastic wrapper. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            During the manufacturing process, a chemical called <strong>Titanium Dioxide (TiO2)</strong> is added to the molten polyester to reduce its natural shine. The amount of TiO2 added dictates whether the yarn is Bright, Semi Dull, or Full Dull.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary-dark mb-2">Bright (BR)</h3>
              <p className="text-gray-700 mb-4"><strong>0% to 0.1% TiO2</strong></p>
              <p className="text-gray-700 text-sm">
                Bright yarn has little to no Titanium Dioxide added. Its surface is perfectly smooth, allowing it to reflect maximum light. It results in fabrics that have a noticeable sheen and sparkle.
              </p>
              <p className="text-gray-700 text-sm mt-4 font-semibold">Common Uses: Silk-like sarees, curtains, bridal wear, and glossy embroidery threads.</p>
            </div>

            <div className="bg-neutral-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary-dark mb-2">Semi Dull (SD)</h3>
              <p className="text-gray-700 mb-4"><strong>~0.3% TiO2</strong></p>
              <p className="text-gray-700 text-sm">
                This is the industry standard. The addition of a small amount of TiO2 scatters light just enough to remove the plastic-like glare, giving the yarn a soft, matte finish that closely resembles natural cotton.
              </p>
              <p className="text-gray-700 text-sm mt-4 font-semibold">Common Uses: T-shirts, daily wear garments, socks, and standard home textiles.</p>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-xl border border-gray-700 mb-10">
            <h3 className="text-xl font-bold mb-2">What about Full Dull (FD)?</h3>
            <p className="text-gray-300"><strong>~2.5% TiO2</strong></p>
            <p className="text-gray-300 text-sm mt-2">
              Full Dull yarn has a high concentration of TiO2, completely eliminating all shine and reflection. It has a chalky, deeply matte appearance. This is primarily used in high-end fashion, specialized sportswear, and blackout curtains where absolute opacity is required.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark mb-6">How to choose?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you are manufacturing standard everyday clothing, <strong>Semi Dull (SD)</strong> is almost always the correct choice, as it mimics the look of natural fibers. If your customer wants a product that stands out, reflects light, or mimics silk, you should ask for <strong>Bright (BR)</strong> yarn.
          </p>
          
          <div className="mt-12 text-center">
            <Link to="/yarn-finder" className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Find the Right Yarn for You
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default LearningLuster;
