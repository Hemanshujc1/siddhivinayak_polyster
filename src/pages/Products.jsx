import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Settings, Zap } from "lucide-react";

const Products = () => {
  const productList = [
    {
      id: "dty",
      title: "DTY (Draw Textured Yarn)",
      fullName: "Draw Textured Polyester Yarn",
      desc: "Manufactured in-house at our state-of-the-art Surat facility, our DTY is produced by drawing and texturizing POY simultaneously. It offers excellent bulkiness, high physical performance, soft hand-feel, and uniform dye consistency. Ideal for premium knitting, socks, high-end apparel, and sportswear.",
      img: "/images/products/dty-spool.png",
      badge: "In-House Manufactured",
      specs: [
        { label: "Denier Range", value: "75D to 600D" },
        { label: "Filaments", value: "36F to 288F" },
        { label: "Luster", value: "Semi-Dull (SD), Bright (BR), Trilobal Bright (TBR)" },
        { label: "Intermingling", value: "Non-Intermingled (NIM), Semi-Intermingled (SIM), High-Intermingled (HIM)" },
      ],
      features: ["Exceptional elasticity & stretch", "Perfect color homogeneity", "Premium bulkiness & texture"],
      colorTheme: "blue",
    },
    {
      id: "poy",
      title: "POY (Partially Oriented Yarn)",
      fullName: "Partially Oriented Polyester Yarn",
      desc: "As the primary feedstock for texturizing, our POY is sourced from India's top-tier petrochemical giants to guarantee top-tier drawing performance. It is highly uniform, has controlled shrinkage characteristics, and exhibits superior stability during downstream texturizing or draw-warping processes.",
      img: "/images/products/poy-spool.png",
      badge: "Premium Traded / Sourced",
      specs: [
        { label: "Denier Range", value: "115D to 480D" },
        { label: "Filaments", value: "36F to 144F" },
        { label: "Type", value: "Raw White, Dope Dyed (Black & Colors)" },
        { label: "Luster", value: "Semi-Dull (SD), Bright (BR)" },
      ],
      features: ["Optimal drawability & tenacity", "Uniform package weight", "Consistent thermal shrinkage"],
      colorTheme: "amber",
    },
    {
      id: "fdy",
      title: "FDY (Fully Drawn Yarn)",
      fullName: "Fully Drawn Polyester Yarn",
      desc: "FDY is a highly oriented, smooth filament yarn produced at high spinning speeds. It exhibits high strength, low elongation, and exceptional luster. It is widely preferred for direct warping and weaving into premium sarees, home textiles, curtain fabrics, embroidery threads, and linings.",
      img: "/images/products/fdy-spool.png",
      badge: "Premium Traded / Sourced",
      specs: [
        { label: "Denier Range", value: "50D to 300D" },
        { label: "Filaments", value: "24F to 108F" },
        { label: "Luster", value: "Semi-Dull (SD), Bright (BR), Full-Dull (FD)" },
        { label: "Intermingling", value: "Non-Intermingled (NIM), High-Intermingled (HIM)" },
      ],
      features: ["High tensile strength & low shrinkage", "Superior luster and smooth glide", "Perfect for high-speed looms"],
      colorTheme: "emerald",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Our Polyester Yarn Products | Siddhi Vinayak Polyester</title>
        <meta
          name="description"
          content="Explore our high-quality DTY, POY, and FDY polyester filament yarns. View specifications, denier ranges, and industry applications."
        />
      </Helmet>

      {/* Premium Hero Header */}
      <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-28 text-white mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 mb-6 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-accent-light" /> Certified Quality Standards
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Our Premium Yarn Catalog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            High-performance polyester filament yarns customized for global weaving, knitting, and industrial applications.
          </p>
        </div>
      </div>

      {/* Product List Section */}
      <div className="bg-neutral-light py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <motion.div
            className="flex flex-col gap-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {productList.map((product, idx) => {
              const isEven = idx % 2 === 0;
              const themeColor = 
                product.colorTheme === "blue" 
                  ? "border-blue-500/20 bg-blue-50/30 text-blue-600" 
                  : product.colorTheme === "amber"
                  ? "border-amber-500/20 bg-amber-50/30 text-amber-600"
                  : "border-emerald-500/20 bg-emerald-50/30 text-emerald-600";

              return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className={`bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 lg:p-12 items-center`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 flex justify-center ${!isEven ? "lg:order-last" : ""}`}>
                    <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 flex items-center justify-center border border-slate-100 group">
                      <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"; // fallback
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${themeColor}`}>
                          {product.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-extrabold text-primary-dark mb-1">
                        {product.title}
                      </h2>
                      <p className="text-sm font-semibold text-accent mb-4">{product.fullName}</p>
                      
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        {product.desc}
                      </p>

                      {/* Specs Mini Table */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-slate-50 rounded-xl p-5 border border-slate-100/80">
                        {product.specs.map((spec, specIdx) => (
                          <div key={specIdx} className="text-xs">
                            <span className="block text-gray-400 font-medium mb-0.5">{spec.label}</span>
                            <span className="block font-bold text-slate-800">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bullet Highlights */}
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                        {product.features.map((feat, featIdx) => (
                          <div key={featIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-bold rounded-xl shadow-sm hover:shadow transition-all text-sm"
                      >
                        Explore Specifications <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/quote"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-sm"
                      >
                        Get Price Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Products;
