import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LearningDenier = () => {
  return (
    <>
      <Helmet>
        <title>Understanding Denier & Filament | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Learn what denier and filament count mean in polyester yarn. An easy guide to selecting the right thickness and softness for your fabrics." />
      </Helmet>

      <div className="bg-neutral-light py-10 mt-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link to="/learning" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Learning Center
          </Link>
          <div className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Yarn Basics</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">Understanding Denier & Filament</h1>
          <p className="text-gray-500 font-medium">5 min read • Technical Guide</p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-lg prose-primary">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">What is Denier (D)?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In simple terms, <strong>Denier</strong> measures the thickness or weight of the yarn. 
            Technically, it is defined as the weight in grams of 9,000 meters of the yarn. 
            So, if 9,000 meters of a yarn weighs 75 grams, it is a <strong>75 Denier (75D)</strong> yarn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            <strong>Rule of Thumb:</strong> The lower the denier, the finer and lighter the yarn. The higher the denier, the thicker and heavier the yarn.
          </p>

          <div className="bg-neutral-light p-6 rounded-xl border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-primary-dark mb-4">Common Deniers & Their Uses</h3>
            <ul className="space-y-3">
              <li className="flex"><span className="font-bold text-accent w-16">50D:</span> <span>Very fine. Used for lightweight sheer fabrics, lingerie, and delicate garments.</span></li>
              <li className="flex"><span className="font-bold text-accent w-16">75D:</span> <span>Fine. Extremely popular for sarees, shirts, and lightweight dresses.</span></li>
              <li className="flex"><span className="font-bold text-accent w-16">150D:</span> <span>Medium. The standard for everyday apparel, t-shirts, and sportswear.</span></li>
              <li className="flex"><span className="font-bold text-accent w-16">300D:</span> <span>Heavy. Used for heavier garments, curtains, and light upholstery.</span></li>
              <li className="flex"><span className="font-bold text-accent w-16">600D+:</span> <span>Industrial. Used for bags, outdoor covers, and heavy upholstery.</span></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark mb-6">What is Filament Count (F)?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A single strand of polyester yarn (e.g., a 150D yarn) is not a solid piece of plastic. It is actually made up of dozens of tiny, microscopic fibers bundled together. The <strong>Filament count</strong> tells you how many of these tiny fibers make up the yarn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you see a specification like <strong>150D/48F</strong>, it means the yarn has a thickness of 150 Denier and is made up of 48 individual filaments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            <strong>Rule of Thumb:</strong> For the same denier, a higher filament count means a much softer fabric.
          </p>

          <div className="bg-neutral-light p-6 rounded-xl border border-gray-100 mb-10">
            <h3 className="text-xl font-bold text-primary-dark mb-4">Comparing 150D Yarns</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-bold text-primary-dark">150D / 36F</div>
                <div className="text-gray-600">Standard feel. Good for basic textiles where extreme softness isn't required.</div>
              </li>
              <li>
                <div className="font-bold text-primary-dark">150D / 48F</div>
                <div className="text-gray-600">The industry standard. Offers a good balance of durability and softness.</div>
              </li>
              <li>
                <div className="font-bold text-primary-dark">150D / 144F (Microfilament)</div>
                <div className="text-gray-600">Incredibly soft. Used for premium sportswear, leggings, and high-end innerwear. Because there are 144 tiny filaments making up the same 150D thickness, each individual filament is ultra-fine, resulting in a buttery soft texture.</div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark mb-6">Putting it all together</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When purchasing yarn, you must balance denier and filament count against your fabric requirements and budget. Microfilaments (like 144F or 288F) are softer but generally more expensive to manufacture than standard filaments (like 36F or 48F).
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

export default LearningDenier;
