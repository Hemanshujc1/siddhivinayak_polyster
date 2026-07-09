import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  AlertTriangle,
  ArrowRight,
  X,
  Download,
  ArrowDown,
} from "lucide-react";
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

const TABS = ["Advantages", "Industry Fit", "Tech Specs", "Buyers"];

const Poy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advantages = [
    {
      title: "Lowest Price Point",
      desc: "Being semi-finished, POY is significantly cheaper per kilogram — attractive for processors who can convert it themselves.",
    },
    {
      title: "Flexible Processing",
      desc: "Can be converted into DTY (textured), FDY (flat drawn), or ATY (air textured) — giving processors maximum output flexibility.",
    },
    {
      title: "Excellent Draw Ratio",
      desc: "The partially oriented structure allows significant stretching during texturizing, resulting in a strong, consistent final product.",
    },
    {
      title: "Wide Denier Range",
      desc: "From fine 75D microfilament to heavy 250D industrial grades — covers virtually all downstream manufacturing requirements.",
    },
  ];

  const specs = [
    ["Denier Range", "75D, 100D, 125D, 150D, 200D, 250D"],
    ["Filament Count", "36F, 48F, 72F, 96F"],
    ["Luster", "Semi Dull (SD) / Bright (BR) / Full Dull (FD)"],
    ["Tenacity", "2.5 – 3.0 g/d (lower — not stable for fabric use)"],
    ["Elongation at Break", "110% – 130% (high — unstable)"],
    ["Birefringence", "0.050 – 0.065"],
    ["Oil Content %", "0.3% – 0.6%"],
    ["Tube Weight", "~8 kg – 12 kg per tube"],
    ["HS Code", "5402.46 / 5402.47"],
    ["Packing", "Paper Tube / Cardboard Box"],
  ];

  return (
    <>
      <Helmet>
        <title>POY (Partially Oriented Yarn) | Siddhi Vinayak Polyester</title>
        <meta
          name="description"
          content="POY: The essential feed yarn for texturizing units. Traded from Reliance, Bhilosa, Wellknown. Full specs, advantages, and industry usage guide."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-dark to-primary pt-32 pb-12 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block bg-blue-500/20 text-blue-200 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-blue-500/30 mb-4">
                Traded from Leading Mills
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                POY — Partially Oriented Yarn
              </h1>
              <p className="text-blue-200 text-lg mb-6">
                The Essential Feed Yarn for Texturizing
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "75D – 250D",
                  "For Texturizing Units Only",
                  "SD / BR / FD",
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
                    "DTY Manufacturing",
                    "Texturizing Units",
                    "Draw Warping",
                    "Industrial Processing",
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
                  Not for
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Garment factories", "Knitting mills", "Weaving units"].map(
                    (v) => (
                      <span
                        key={v}
                        className="bg-white/10 text-white text-xs px-2 py-1 rounded-md"
                      >
                        {v}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is POY — compact 3-col */}
      <section className="py-10 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Spool Image */}
            <div className="w-full lg:w-40 h-40 rounded-xl overflow-hidden shadow-md border border-gray-200 shrink-0 bg-white">
              <img
                src="/images/products/poy-spool.png"
                alt="POY Yarn Bobbin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-dark mb-3">
                What is POY?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Partially Oriented Yarn is the first form of yarn made by
                spinning polyester chips. The polymer chains are only "partially
                oriented" — the yarn is not yet stable enough for direct fabric
                production. It must be further processed into{" "}
                <Link
                  to="/products/dty"
                  className="text-accent font-bold hover:underline"
                >
                  DTY
                </Link>{" "}
                or{" "}
                <Link
                  to="/products/fdy"
                  className="text-accent font-bold hover:underline"
                >
                  FDY
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm shrink-0 w-full lg:w-80">
              <h3 className="font-bold text-primary-dark mb-3 text-sm uppercase tracking-wider">
                Who buys POY?
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "DTY Manufacturers", desc: "Convert POY into DTY." },
                  {
                    label: "Texturizing Units",
                    desc: "Perform false-twist texturing.",
                  },
                  {
                    label: "Draw Warping Units",
                    desc: "Convert POY into FDY.",
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
            <div className="max-w-lg mx-auto bg-neutral-light rounded-2xl p-6 border border-gray-100">
              <p className="text-xs text-gray-400 mb-4 text-center font-medium">
                POY is only for industrial processors — not direct fabric
                production
              </p>
              <IndustryRating label="DTY Manufacturing" rating={5} />
              <IndustryRating label="Draw Warping" rating={4} />
              <IndustryRating label="Industrial Processing" rating={3} />
              <IndustryRating label="Weaving (Direct)" rating={1} />
              <IndustryRating label="Knitting (Direct)" rating={1} />
              <IndustryRating label="Garment Use" rating={0} />
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
                "DTY Manufacturers",
                "Texturizing Units",
                "Draw Warping Units",
                "Industrial Processors",
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

      {/* Warning + CTAs */}
      <section className="py-10 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <AlertTriangle className="w-12 h-12 text-yellow-400 shrink-0" />
            <div className="flex-1">
              <h2 className="text-xl font-extrabold text-white mb-2">
                Why garment factories never buy POY directly
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                POY lacks the tenacity for direct fabric use. It stretches
                unpredictably and snaps during weaving/knitting. It must first
                be texturized into DTY or drawn into FDY.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <Link
                to="/products/compare"
                className="text-blue-300 font-bold hover:text-white border border-blue-300/30 px-5 py-2.5 rounded-full text-sm text-center transition-colors"
              >
                Compare All Yarns →
              </Link>
              <Link
                to="/yarn-finder"
                className="bg-accent hover:bg-accent-light text-white font-bold px-5 py-2.5 rounded-full text-sm text-center transition-all"
              >
                Use Yarn Finder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Scroll Strip */}
      <BrandScrollStrip yarnType="POY" />

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
                  The most common end product made from POY.
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </Link>
            <Link
              to="/products/fdy"
              className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0 font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">
                FDY
              </div>
              <div className="flex-1">
                <div className="font-bold text-primary-dark group-hover:text-accent transition-colors">
                  FDY (Fully Drawn Yarn)
                </div>
                <div className="text-gray-500 text-sm">
                  Smooth, lustrous. Made by fully drawing POY.
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

export default Poy;
