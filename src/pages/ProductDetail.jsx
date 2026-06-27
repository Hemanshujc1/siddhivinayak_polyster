import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Download, ArrowLeft, Check } from 'lucide-react';

const productsData = {
  'fdy-150-48': {
    title: 'Polyester Filament (FDY) 150D/48F',
    type: 'FDY (Fully Drawn Yarn)',
    desc: 'FDY (Fully Drawn Yarn) is a smooth polyester filament directly used in weaving light fabrics like sarees, linings, and home textiles.',
    applications: ['Weaving', 'Knitting', 'Embroidery', 'Sewing'],
    specs: [
      { label: 'Material', value: '100% Polyester' },
      { label: 'Yarn Type', value: 'FDY (Fully Drawn Filament)' },
      { label: 'Denier / Count', value: '150 D' },
      { label: 'Filaments per Yarn', value: '48' },
      { label: 'Twist', value: '0 Twist' },
      { label: 'Luster', value: 'Semi-dull' },
      { label: 'Tensile Strength', value: '4.5–7.0 g/den' },
      { label: 'Elongation at Break', value: '12–20%' },
      { label: 'Shrinkage @ 100°C', value: '< 8%' },
      { label: 'Moisture Content', value: '< 0.5%' },
      { label: 'Packaging', value: '1500m per cone; 12 cones per carton (~20kg)' },
      { label: 'Certifications', value: 'ISO 9001, OEKO-TEX Std100' },
    ],
    img: 'https://images.unsplash.com/photo-1544980720-bc2d61fc7262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  'poy-245-36': {
    title: 'Partially Oriented Yarn (POY) 245D/36F',
    type: 'POY (Partially Oriented Yarn)',
    desc: 'POY is the primary feed material for texturing, providing excellent stretch and recovery.',
    applications: ['Texturing', 'Draw Warping', 'Weaving'],
    specs: [
      { label: 'Material', value: '100% Polyester' },
      { label: 'Yarn Type', value: 'POY' },
      { label: 'Denier / Count', value: '245 D' },
      { label: 'Filaments per Yarn', value: '36' },
      { label: 'Luster', value: 'Semi-dull' },
      { label: 'Packaging', value: '15kg per bobbin' }
    ],
    img: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  'dty-150-48': {
    title: 'Draw Textured Yarn (DTY) 150D/48F',
    type: 'DTY (Draw Textured Yarn)',
    desc: 'DTY provides a soft and cotton-like feel, making it ideal for comfortable apparel.',
    applications: ['Activewear', 'Leggings', 'Undergarments', 'Socks'],
    specs: [
      { label: 'Material', value: '100% Polyester' },
      { label: 'Yarn Type', value: 'DTY' },
      { label: 'Denier / Count', value: '150 D' },
      { label: 'Filaments per Yarn', value: '48' },
      { label: 'Twist', value: 'NIM' },
      { label: 'Packaging', value: '5kg per cheese' }
    ],
    img: 'https://images.unsplash.com/photo-1518335914619-216892ecba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData[id] || productsData['fdy-150-48']; // Fallback for MVP demo

  return (
    <>
      <Helmet>
        <title>{product.title} | Siddhi Vinayak Polyester</title>
        <meta name="description" content={product.desc} />
      </Helmet>
      
      <div className="bg-neutral-light border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link to="/products" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">{product.title}</h1>
          <p className="text-accent font-medium mt-2">{product.type}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column - Image & Overview */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                <img src={product.img || 'https://images.unsplash.com/photo-1544980720-bc2d61fc7262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'} alt={product.title} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-accent shrink-0" /> {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Specs & Actions */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {product.desc}
            </p>

            <h2 className="text-2xl font-bold text-primary-dark mb-6">Technical Specifications</h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-10">
              <table className="w-full text-left text-sm md:text-base">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <th className="py-4 px-6 font-semibold text-gray-700 w-1/3 border-b border-gray-100">{spec.label}</th>
                      <td className="py-4 px-6 text-gray-600 border-b border-gray-100">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={`/quote?product=${id}`}
                className="flex-1 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-md font-bold text-center transition-colors shadow-lg"
              >
                Request a Quote
              </Link>
              <button 
                className="flex-1 bg-white hover:bg-neutral-light border-2 border-primary text-primary px-8 py-4 rounded-md font-bold flex items-center justify-center transition-colors"
              >
                <Download className="w-5 h-5 mr-2" /> Download Datasheet
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
