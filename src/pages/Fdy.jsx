import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ArrowRight, X, Download } from "lucide-react";
import BrandsSection, { BrandScrollStrip } from "../components/BrandsSection";

const IndustryRating = ({ label, rating, max = 5 }) => (
  <div className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
    <span className="text-gray-700 font-medium text-sm w-36 shrink-0">
      {label}
    </span>
    <div className="flex gap-1 flex-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-2 rounded-full ${i < rating ? "bg-accent" : "bg-gray-200"}`}
        />
      ))}
    </div>
    <span className="text-xs font-bold text-gray-500 w-8 text-right shrink-0">
      {rating}/{max}
    </span>
  </div>
);

const TABS = ["Advantages", "FDY vs DTY", "Tech Specs", "Buyers"];

const Fdy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advantages = [
    {
      title: "Maximum Tenacity (Strength)",
      desc: "Fully drawn polymer chains make FDY one of the strongest polyester yarns. It handles extreme weaving tension without breaking.",
    },
    {
      title: "Silk-Like Smooth Finish",
      desc: "Flat, parallel filaments create a perfectly smooth fabric surface prized in sarees, linings, and luxury home textiles.",
    },
    {
      title: "Superior Lustre",
      desc: "FDY Bright (BR) is extremely shiny — an ideal, cost-effective replacement for silk in high-gloss apparel and furnishings.",
    },
    {
      title: "Excellent Dimensional Stability",
      desc: "Does not stretch under tension, making it perfect as warp yarn in weaving where consistent, controlled tension is critical.",
    },
    {
      title: "Wide Luster Range",
      desc: "Available in Bright, Semi Dull, and Full Dull — precise control over the final fabric appearance.",
    },
    {
      title: "Low Boiling Water Shrinkage",
      desc: "Maintains dimensions during wet processing, essential for consistent dimensionally-stable woven fabrics.",
    },
  ];

  const specs = [
    ["Denier Range", "50D, 75D, 100D, 150D, 200D, 300D, 450D, 600D"],
    ["Filament Count", "24F, 36F, 48F, 72F, 96F, 144F"],
    ["Luster", "Bright (BR) / Semi Dull (SD) / Full Dull (FD)"],
    ["Intermingling", "NIM / SIM / HIM (typically HIM for weaving)"],
    ["Tenacity", "≥ 3.8 g/d (higher than DTY)"],
    ["Elongation at Break", "20% – 30%"],
    ["Boiling Water Shrinkage", "1% – 4%"],
    ["Cross Section", "Round / Trilobal"],
    ["Oil Content %", "0.3% – 0.6%"],
    ["Cone Weight", "~4 kg – 10 kg (warp beam available)"],
    ["HS Code", "5402.47 / 5402.52"],
    ["Packing", "Cone / Paper Tube / Warp Beam"],
  ];

  const fdyVsDty = [
    { prop: "Texture", fdy: "Flat, smooth", dty: "Crimped, bulky" },
    { prop: "Shine", fdy: "⭐⭐⭐⭐⭐", dty: "⭐⭐⭐" },
    { prop: "Softness", fdy: "⭐⭐⭐", dty: "⭐⭐⭐⭐⭐" },
    { prop: "Stretch", fdy: "Low (stable)", dty: "High (stretchy)" },
    { prop: "Tenacity", fdy: "≥ 3.8 g/d", dty: "≥ 3.5 g/d" },
    { prop: "Best for", fdy: "Weaving, sarees", dty: "Knitting, socks" },
    { prop: "Avoid for", fdy: "Socks, hosiery", dty: "High-gloss weaving" },
  ];

  return (
    <>
      <Helmet>
        <title>FDY (Fully Drawn Yarn) | Siddhi Vinayak Polyester</title>
        <meta
          name="description"
          content="FDY: Smooth, lustrous, high-tenacity polyester yarn for weaving sarees, curtains, and linings. Full specs, advantages, and industry guide."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-dark to-primary pt-32 pb-12 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block bg-purple-500/20 text-purple-200 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-purple-500/30 mb-4">
                Traded from Leading Mills
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                FDY — Fully Drawn Yarn
              </h1>
              <p className="text-blue-200 text-lg mb-6">
                Smooth • Strong • Lustrous Weaving Yarn
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "50D – 600D",
                  "Bright / Semi Dull / Full Dull",
                  "High Tenacity Grade",
                ].map((t) => (
                  <span
                    key={t}
                    className="bg-white/10 text-white text-sm px-3 py-1 rounded-full border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Request Quote
                </Link>
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold transition-all"
                >
                  <Download className="w-4 h-4" /> Datasheet
                </Link>
              </div>
            </div>
            {/* Quick verdict cards */}
            <div className="w-full md:w-72 space-y-3 shrink-0">
              <div className="bg-green-500/15 border border-green-400/30 rounded-xl p-4">
                <div className="text-green-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Best For
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Sarees",
                    "Curtains",
                    "Suitings",
                    "Embroidery",
                    "Warp Yarn",
                    "Industrial Cord",
                  ].map((v) => (
                    <span
                      key={v}
                      className="bg-white/10 text-white text-xs px-2 py-1 rounded-md"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-red-500/15 border border-red-400/30 rounded-xl p-4">
                <div className="text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Avoid If
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    "High stretch needed",
                    "Socks / hosiery",
                    "Blankets / fleece",
                  ].map((v) => (
                    <span
                      key={v}
                      className="bg-white/10 text-white text-xs px-2 py-1 rounded-md"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is FDY — compact 3-col */}
      <section className="py-10 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Spool Image */}
            <div className="w-full lg:w-40 h-40 rounded-xl overflow-hidden shadow-md border border-gray-200 shrink-0 bg-white">
              <img
                src="/images/products/fdy-spool.png"
                alt="FDY Yarn Bobbin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-dark mb-3">
                What is FDY?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fully Drawn Yarn is a continuous filament where all polymer
                chains have been stretched to their maximum limit during
                spinning. This makes it incredibly strong, smooth, and naturally
                lustrous. Unlike{" "}
                <Link
                  to="/products/dty"
                  className="text-accent font-bold hover:underline"
                >
                  DTY
                </Link>
                , FDY filaments lie flat and parallel — creating a silk-like
                fabric surface.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm shrink-0 w-full lg:w-80">
              <h3 className="font-bold text-primary-dark mb-3 text-sm uppercase tracking-wider">
                When should you choose FDY?
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    label: "Need smooth, flat fabric",
                    desc: "Sleek fabrics preferred for sarees & linings.",
                  },
                  {
                    label: "Need high strength (Tenacity)",
                    desc: "Handles extreme weaving tension without breaking.",
                  },
                  {
                    label: "Need high-shine finish",
                    desc: "Reflects light far better than textured yarns.",
                  },
                ].map((b) => (
                  <li key={b.label} className="flex items-start gap-2">
                    <Check className="text-accent mt-0.5 w-3.5 h-3.5 shrink-0" />
                    <div>
                      <div className="font-bold text-gray-800 text-xs">
                        {b.label}
                      </div>
                      <div className="text-gray-500 text-[11px]">{b.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex gap-1 bg-neutral-light p-1 rounded-xl mb-8 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === i
                    ? "bg-primary-dark text-white shadow"
                    : "text-gray-600 hover:text-primary-dark"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="flex items-start gap-3 p-5 bg-neutral-light rounded-xl border border-gray-100"
                >
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark text-sm mb-1">
                      {adv.title}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-dark to-primary">
                    <th className="py-3 px-4 text-left font-bold text-white text-sm">
                      Property
                    </th>
                    <th className="py-3 px-4 text-left font-bold text-blue-200 text-sm">
                      FDY
                    </th>
                    <th className="py-3 px-4 text-left font-bold text-green-200 text-sm">
                      DTY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fdyVsDty.map((row) => (
                    <tr
                      key={row.prop}
                      className="border-b border-gray-100 hover:bg-neutral-light transition-colors"
                    >
                      <td className="py-2.5 px-4 text-sm font-semibold text-gray-600">
                        {row.prop}
                      </td>
                      <td className="py-2.5 px-4 text-sm font-medium text-blue-700">
                        {row.fdy}
                      </td>
                      <td className="py-2.5 px-4 text-sm font-medium text-green-700">
                        {row.dty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-dark to-primary text-white">
                    <th className="py-3 px-4 text-left font-bold text-white text-sm">
                      Parameter
                    </th>
                    <th className="py-3 px-4 text-left font-bold text-white text-sm">
                      Value / Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b border-gray-100 hover:bg-neutral-light transition-colors"
                    >
                      <td className="py-2.5 px-4 text-sm font-semibold text-gray-600">
                        {label}
                      </td>
                      <td className="py-2.5 px-4 text-sm text-gray-800">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Saree Manufacturers",
                "Weaving Mills",
                "Curtain Manufacturers",
                "Suiting Manufacturers",
                "Embroidery Units",
                "Home Textile Cos.",
                "Industrial Cord Mfrs.",
                "Export Houses",
              ].map((b) => (
                <div
                  key={b}
                  className="bg-primary-light p-4 rounded-xl border border-primary-light/20 text-center text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] duration-200"
                >
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brands Scroll Strip */}
      <BrandScrollStrip yarnType="FDY" />

      {/* Related Products */}
      <section className="py-10 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-xl font-bold text-primary-dark mb-4">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/products/dty"
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 font-bold group-hover:bg-green-600 group-hover:text-white transition-colors">
                DTY
              </div>
              <div className="flex-1">
                <div className="font-bold text-primary-dark group-hover:text-accent transition-colors">
                  DTY (Draw Textured Yarn)
                </div>
                <div className="text-gray-500 text-sm">
                  Soft, stretchable alternative for knitting.
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </Link>
            <Link
              to="/products/poy"
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                POY
              </div>
              <div className="flex-1">
                <div className="font-bold text-primary-dark group-hover:text-accent transition-colors">
                  POY (Partially Oriented Yarn)
                </div>
                <div className="text-gray-500 text-sm">
                  The raw material from which FDY is drawn.
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fdy;
