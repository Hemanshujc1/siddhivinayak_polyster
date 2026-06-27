import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Settings, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const products = [
    {
      title: 'Filament Yarn (FDY / POY)',
      desc: 'Smooth, strong, and lustrous continuous filaments used in weaving sarees, linings, and technical fabrics.',
      img: 'https://images.unsplash.com/photo-1544980720-bc2d61fc7262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Textured Yarn (DTY / ATY)',
      desc: 'Crimped, stretchy, and bulky yarn ideal for activewear, hosiery, and casual knitwear.',
      img: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Spun Polyester Yarn',
      desc: 'Soft, cotton-like feel for casual clothing, denim blends, bedding, and upholstery.',
      img: 'https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Specialty Yarns',
      desc: 'High-tenacity, flame-retardant, and recycled (rPET) yarns for specialized industrial applications.',
      img: 'https://images.unsplash.com/photo-1558009250-d4d216245a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Polyester Yarn Manufacturer India | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Siddhi Vinayak Polyester – 20 years in manufacturing premium polyester yarn (POY, FDY, DTY, Spun). Trusted ISO/OEKO-TEX certified exporter." />
      </Helmet>
      
      <Hero />

      {/* Core Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm text-accent font-bold tracking-widest uppercase mb-2">Our Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Premium Quality Yarns</h3>
            <p className="text-gray-600 text-lg">We manufacture and supply a comprehensive range of polyester yarns tailored to meet the exacting standards of the global textile industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-light border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-1">{item.desc}</p>
                  <Link to="/products" className="inline-flex items-center text-accent font-semibold hover:text-accent-light transition-colors mt-auto">
                    View Specifications <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-sm text-accent-light font-bold tracking-widest uppercase mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Certified Excellence & Reliability</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our stringent quality control processes ensure every cone of yarn meets international standards. We are proud to hold global certifications that reflect our commitment to excellence, as we gear up for global expansion.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-400 text-sm">Rigorous quality management systems across all manufacturing processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">OEKO-TEX® Standard 100</h4>
                    <p className="text-gray-400 text-sm">Tested for harmful substances, ensuring safety for human ecology.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div 
                className="aspect-video bg-primary rounded-xl overflow-hidden relative shadow-2xl border border-gray-700"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                 <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Yarn Manufacturing" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/60 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Ready to Source Premium Yarn?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Get in touch with our export team today to discuss your requirements, request samples, or get a competitive quote.
          </p>
          <Link 
            to="/quote"
            className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-md font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
