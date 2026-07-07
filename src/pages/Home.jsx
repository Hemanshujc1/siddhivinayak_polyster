import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { Settings, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const products = [
    {
      title: "DTY (Draw Textured Yarn)",
      desc: "Soft, stretchable, and textured polyester yarn manufactured in-house. Ideal for knitting, socks, and sportswear.",
      img: "/images/products/dty-spool.png",
      link: "/products/dty",
    },
    {
      title: "POY (Partially Oriented Yarn)",
      desc: "The primary raw material for DTY. We trade premium POY sourced from India's leading manufacturers.",
      img: "/images/products/poy-spool.png",
      link: "/products/poy",
    },
    {
      title: "FDY (Fully Drawn Yarn)",
      desc: "Smooth, lustrous continuous filaments used in weaving sarees, linings, and home textiles.",
      img: "/images/products/fdy-spool.png",
      link: "/products/fdy",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Polyester Yarn Manufacturer & Trader India | Siddhi Vinayak Polyester
        </title>
        <meta
          name="description"
          content="Siddhi Vinayak Polyester – 20 years of expertise. In-house DTY manufacturing and premium trading of POY and FDY from leading Indian mills."
        />
      </Helmet>

      <Hero />

      {/* Tagline + Social Proof Strip */}
      <div className="bg-primary-dark border-b border-white/10 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white font-bold text-lg tracking-wide text-center md:text-left">
              Learn. <span className="text-blue-300">Compare.</span> Choose.{" "}
              <span className="text-accent">Source.</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>
                  <strong className="text-white">500+</strong> B2B Clients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>
                  <strong className="text-white">20+</strong> Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>
                  <strong className="text-white">15+</strong> Countries Served
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span>ISO 9001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm text-accent font-bold tracking-widest uppercase mb-2">
              Our Capabilities
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Core Products
            </h3>
            <p className="text-gray-600 text-lg">
              We specialize in manufacturing high-quality DTY and provide a
              comprehensive trading inventory for POY and FDY from India's most
              trusted mills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-primary-dark mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-accent font-semibold hover:text-accent-light transition-colors mt-auto"
                  >
                    View Specifications <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-24 bg-gradient-to-b from-primary-dark to-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-sm text-accent-light font-bold tracking-widest uppercase mb-2">
                Why Choose Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Certified Excellence & Reliability
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our stringent quality control processes ensure every cone of
                yarn meets international standards. We are proud to hold global
                certifications that reflect our commitment to excellence, as we
                gear up for global expansion.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      ISO 9001:2015 Certified
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Rigorous quality management systems across all
                      manufacturing processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      OEKO-TEX® Standard 100
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Tested for harmful substances, ensuring safety for human
                      ecology.
                    </p>
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
                <img
                  src="/images/hero-yarn.png"
                  alt="Yarn Manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/60 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block bg-white/10 text-blue-200 text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20 mb-6">
            Ready to Source?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Get a Competitive Quote in 24 Hours
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Tell us your denier, filament count, quantity, and delivery
            location. Our sales team will respond with pricing and availability
            within one business day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/quote"
              className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote →
            </Link>
            <Link
              to="/yarn-finder"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Use the Yarn Finder
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            No commitment required. We respond within 24 business hours.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
