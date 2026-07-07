import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Settings, FileText, Search, Grid, Download, BarChart2 } from 'lucide-react';

const Products = () => {
  const directory = [
    { title: 'Compare Yarn Types', path: '/products/compare', icon: <BarChart2 className="w-8 h-8 text-accent" />, desc: 'Matrix comparing POY, FDY, and DTY features.' },
    { title: 'DTY (PTY)', path: '/products/dty', icon: <Layers className="w-8 h-8 text-primary" />, desc: 'Soft, stretchable, textured polyester yarn.' },
    { title: 'POY', path: '/products/poy', icon: <Layers className="w-8 h-8 text-primary" />, desc: 'The essential raw material for texturizing.' },
    { title: 'FDY', path: '/products/fdy', icon: <Layers className="w-8 h-8 text-primary" />, desc: 'Smooth, strong, and lustrous weaving yarn.' },
    { title: 'Interactive Yarn Finder', path: '/yarn-finder', icon: <Search className="w-8 h-8 text-accent" />, desc: 'Answer a few questions to find the perfect yarn.' },
    { title: 'Specification Guide', path: '/learning/specs', icon: <Settings className="w-8 h-8 text-primary" />, desc: 'How to read denier, filament, luster, and more.' },
    { title: 'Industry Applications', path: '/industry-applications', icon: <Grid className="w-8 h-8 text-primary" />, desc: 'Yarn recommendations by textile sector.' },
    { title: 'Learning Center', path: '/learning', icon: <BookOpen className="w-8 h-8 text-primary" />, desc: 'Articles, FAQs, and textile glossaries.' },
    { title: 'Downloads', path: '/downloads', icon: <Download className="w-8 h-8 text-primary" />, desc: 'Technical data sheets and brochures.' },
  ];

  return (
    <>
      <Helmet>
        <title>Yarn Knowledge Center | Siddhi Vinayak Polyester</title>
        <meta name="description" content="The definitive Polyester Yarn Knowledge Platform. Learn about POY, FDY, DTY, compare yarn types, and access technical specifications." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Yarn Knowledge Center</h1>
          <p className="text-xl text-blue-200">The definitive platform for polyester yarn education and selection</p>
        </div>
      </div>

      <section className="py-16 bg-neutral-light min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directory.map((item, index) => (
              <Link 
                to={item.path} 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all ${item.path !== '#' ? 'hover:shadow-md hover:border-primary group cursor-pointer' : 'opacity-70 cursor-not-allowed'}`}
                onClick={(e) => item.path === '#' && e.preventDefault()}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.path !== '#' ? 'bg-neutral-light group-hover:bg-primary-light/10' : 'bg-gray-100'}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${item.path !== '#' ? 'text-primary-dark group-hover:text-primary' : 'text-gray-500'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
