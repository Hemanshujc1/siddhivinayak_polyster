import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GitCompare, 
  Search, 
  Sliders, 
  Grid, 
  BookOpen, 
  Download, 
  Wind, 
  GitCommit, 
  Sparkles, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

const YarnKnowledgeCenter = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const coreProducts = [
    {
      title: 'DTY (Draw Textured Yarn)',
      path: '/products/dty',
      icon: <Wind className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      desc: 'Soft, stretchable, and high-bulk textured polyester yarn manufactured in-house. Perfect for premium knitting, socks, and sportswear.',
      badge: 'In-House Manufacture',
      specs: '75D - 600D | Semi-Dull, Bright, Trilobal'
    },
    {
      title: 'POY (Partially Oriented Yarn)',
      path: '/products/poy',
      icon: <GitCommit className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
      desc: 'The essential raw material for texturizing. We source and trade premium POY from India\'s top-tier manufacturers.',
      badge: 'Premium Trading',
      specs: '115D - 480D | Raw white & dope dyed'
    },
    {
      title: 'FDY (Fully Drawn Yarn)',
      path: '/products/fdy',
      icon: <Sparkles className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      desc: 'Smooth, strong, and highly lustrous continuous filaments. Widely used for weaving sarees, linings, and elegant home textiles.',
      badge: 'Weaving & Embroidery',
      specs: '50D - 300D | High-speed smooth delivery'
    }
  ];

  const interactiveTools = [
    {
      title: 'Interactive Yarn Finder',
      path: '/yarn-finder',
      icon: <Compass className="w-10 h-10 text-white" />,
      desc: 'Not sure which yarn fits your project? Answer a few guided questions about your manufacturing application, and let our smart recommender find the perfect denier, luster, and type.',
      cta: 'Start Finder',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Compare Yarn Types',
      path: '/products/compare',
      icon: <GitCompare className="w-10 h-10 text-white" />,
      desc: 'Compare physical specifications, elongation characteristics, shrink rates, and structural suitability side-by-side for POY, FDY, and DTY.',
      cta: 'View Comparison Matrix',
      color: 'from-slate-800 to-slate-950'
    }
  ];

  const resourceGuides = [
    { 
      title: 'Specification Guide', 
      path: '/learning/specs', 
      icon: <Sliders className="w-6 h-6 text-accent" />, 
      desc: 'Learn how to read textile specifications, denier, filament count, intermingling knots, and luster types.' 
    },
    { 
      title: 'Industry Applications', 
      path: '/industry-applications', 
      icon: <Grid className="w-6 h-6 text-accent" />, 
      desc: 'Find the ideal yarn configurations sorted specifically by end-use industries like apparel, automotive, or geotextiles.' 
    },
    { 
      title: 'Learning Center & Blog', 
      path: '/learning', 
      icon: <BookOpen className="w-6 h-6 text-accent" />, 
      desc: 'Explore comprehensive articles, terminology glossary, and guides on manufacturing faults and quality metrics.' 
    },
    { 
      title: 'Technical Downloads', 
      path: '/downloads', 
      icon: <Download className="w-6 h-6 text-accent" />, 
      desc: 'Download technical data sheets (TDS), product catalogs, certification documentation, and corporate brochures.' 
    }
  ];

  return (
    <>
      <Helmet>
        <title>Yarn Knowledge Platform | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Discover our core products (DTY, POY, FDY), use the Interactive Yarn Finder, compare yarn parameters, and access our comprehensive textile guides." />
      </Helmet>
      
      {/* Premium Hero Header */}
      <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-28 text-white mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 mb-6 uppercase tracking-wider animate-pulse">
            <ShieldCheck className="w-3.5 h-3.5" /> Polyester Selection Suite
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Yarn Knowledge & Selection Center
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Configure, compare, and source high-quality polyester yarns. Explore our technical resources, interactive tools, and certified catalog.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-neutral-light py-20 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* Section 1: Core Products */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Primary Portfolio</h2>
                <h3 className="text-3xl font-bold text-primary-dark">Core Yarn Products</h3>
              </div>
              <p className="text-gray-600 max-w-md mt-2 md:mt-0 text-sm md:text-base">
                Premium raw material trading and high-quality textured DTY manufactured directly at our Surat facility.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {coreProducts.map((product, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center shadow-md">
                        {product.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200/60">
                        {product.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors duration-200">
                      {product.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.desc}
                    </p>
                  </div>

                  <div className="px-8 py-5 bg-slate-50 border-t border-slate-100/80 flex items-center justify-between group-hover:bg-slate-100/50 transition-colors duration-200">
                    <span className="text-xs text-gray-500 font-medium">{product.specs}</span>
                    <Link to={product.path} className="flex items-center gap-1 text-sm font-bold text-accent group-hover:text-accent-light transition-colors">
                      Explore <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section 2: Interactive Decision Tools */}
          <div className="mb-20">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Interactive Utilities</h2>
              <h3 className="text-3xl font-bold text-primary-dark">Selection & Comparison Tools</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {interactiveTools.map((tool, idx) => (
                <div 
                  key={idx}
                  className={`relative rounded-2xl bg-gradient-to-br ${tool.color} p-8 md:p-10 text-white shadow-lg overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
                >
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
                  
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                        {tool.icon}
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{tool.title}</h4>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base mb-8">
                        {tool.desc}
                      </p>
                    </div>

                    <div>
                      <Link 
                        to={tool.path}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-dark font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
                      >
                        {tool.cta} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Technical Resources & Learning */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Resource Library</h2>
                <h3 className="text-3xl font-bold text-primary-dark">Technical Resources & Guides</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resourceGuides.map((guide, idx) => (
                <Link 
                  to={guide.path}
                  key={idx}
                  className="flex gap-5 bg-white p-6 md:p-8 rounded-xl border border-slate-100 hover:border-accent shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/5 group-hover:bg-accent/15 flex items-center justify-center transition-colors">
                    {guide.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-dark group-hover:text-accent transition-colors mb-2 flex items-center gap-1.5">
                      {guide.title}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default YarnKnowledgeCenter;
