import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';

const productsData = [
  { id: 'fdy-150-48', title: 'Polyester Filament (FDY)', type: 'Filament', denier: '150D/48F', desc: 'Fully drawn yarn used in weaving light fabrics like sarees, linings, and home textiles.', img: 'https://images.unsplash.com/photo-1544980720-bc2d61fc7262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'poy-245-36', title: 'Partially Oriented Yarn (POY)', type: 'Filament', denier: '245D/36F', desc: 'Pre-oriented yarn serving as the primary feed material for texturing.', img: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'dty-150-48', title: 'Draw Textured Yarn (DTY)', type: 'Textured', denier: '150D/48F NIM', desc: 'Crimped and stretchy yarn perfect for activewear, leggings, and undergarments.', img: 'https://images.unsplash.com/photo-1518335914619-216892ecba33?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'aty-300-96', title: 'Air Textured Yarn (ATY)', type: 'Textured', denier: '300D/96F', desc: 'Spun-like, wooly feel for knit tops, babywear, and light sweaters.', img: 'https://images.unsplash.com/photo-1605282470659-4d37d8009bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'spun-40s', title: 'Spun Polyester Yarn', type: 'Spun', denier: '40s Count', desc: '100% spun polyester with a soft cotton-like feel for shirts and hosiery.', img: 'https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'recycled-fdy', title: 'Recycled Polyester (rPET)', type: 'Specialty', denier: 'Various', desc: 'Eco-friendly yarn made from recycled PET bottles for sustainable fashion.', img: 'https://images.unsplash.com/photo-1558009250-d4d216245a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Products = () => {
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'Filament', 'Textured', 'Spun', 'Specialty'];
  
  const filteredProducts = filter === 'All' ? productsData : productsData.filter(p => p.type === filter);

  return (
    <>
      <Helmet>
        <title>Our Products | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Explore our catalog of polyester yarns including FDY, POY, DTY, ATY, Spun, and Specialty yarns." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Catalog</h1>
          <p className="text-xl text-gray-300">Premium Polyester Yarns for Every Application</p>
        </div>
      </div>

      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-medium transition-colors border ${filter === f ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'}`}
              >
                {f}
              </button>
            ))}
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No products found for this category.
            </div>
          )}
          
        </div>
      </section>
    </>
  );
};

export default Products;
