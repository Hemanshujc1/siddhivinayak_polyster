import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

const ProductCard = ({ id, title, type, denier, desc, img }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
      {/* Image Placeholder */}
      <div className="aspect-[4/3] bg-neutral-light relative overflow-hidden">
        <img src={img || `https://images.unsplash.com/photo-1544980720-bc2d61fc7262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary-dark line-clamp-1">{title}</h3>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 font-medium">
          <Info size={14} className="text-accent" />
          <span>{denier}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {desc}
        </p>
        
        <div className="flex items-center gap-3">
          <Link 
            to={`/products/${id}`}
            className="flex-1 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2 rounded font-semibold text-sm text-center transition-colors"
          >
            Details
          </Link>
          <Link 
            to={`/quote?product=${id}`}
            className="flex-1 bg-accent hover:bg-accent-light text-white px-4 py-2 rounded font-semibold text-sm text-center transition-colors"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
