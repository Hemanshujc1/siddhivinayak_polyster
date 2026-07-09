import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { brands as allBrands, getBrandsForYarn } from "../data/brands";

/* ─── Brand Monogram / Logo ─────────────────────────────────────── */
const BrandLogo = ({ brand, size = "md" }) => {
  const sizeClass =
    size === "sm"
      ? "w-12 h-12 text-base"
      : size === "lg"
        ? "w-24 h-24 text-2xl"
        : "w-20 h-20 text-xl";
  return (
    <div
      className={`${sizeClass} flex items-center justify-center font-extrabold shrink-0 transition-transform duration-300 group-hover:scale-105`}
      style={{
        color: brand.color,
      }}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-contain"
        />
      ) : (
        brand.initials
      )}
    </div>
  );
};

/* ─── Infinite Scroll Marquee Strip ─────────────────────────────── */
export const BrandScrollStrip = ({ yarnType = null, dark = false }) => {
  const displayBrands = yarnType ? getBrandsForYarn(yarnType) : allBrands;
  // Triplicate for seamless infinite loop
  const loopItems = [...displayBrands, ...displayBrands, ...displayBrands];

  return (
    <section
      className={`py-12 overflow-hidden ${dark ? "bg-primary-dark border-y border-white/10" : "bg-white border-y border-gray-100"}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div
              className={`text-xs font-bold tracking-widest uppercase mb-1.5 ${dark ? "text-blue-400" : "text-accent"}`}
            >
              Authorized Channel Partners
            </div>
            {/* <h2
              className={`text-2xl font-extrabold tracking-tight ${dark ? "text-white" : "text-primary-dark"}`}
            >
              Brands We Supply
            </h2> */}
          </div>
          <Link
            to="/brands"
            className={`text-sm font-bold flex items-center gap-1 transition-colors ${
              dark
                ? "text-gray-400 hover:text-white"
                : "text-accent hover:text-accent-light"
            }`}
          >
            View All <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
            dark
              ? "bg-gradient-to-r from-primary-dark to-transparent"
              : "bg-gradient-to-r from-white to-transparent"
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
            dark
              ? "bg-gradient-to-l from-primary-dark to-transparent"
              : "bg-gradient-to-l from-white to-transparent"
          }`}
        />

        <div className="flex gap-8 brand-marquee">
          {loopItems.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className={`flex flex-col items-center text-center gap-5 px-8 py-10 rounded-3xl border shrink-0 min-w-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${
                brand.highlight
                  ? dark
                    ? "bg-accent/15 border-accent/40"
                    : "bg-accent/5 border-accent/30 shadow-xl shadow-accent/5"
                  : dark
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white border-gray-150 shadow-md hover:border-gray-300"
              }`}
            >
              <BrandLogo brand={brand} size="lg" />
              <div className="w-full">
                <div
                  className={`font-extrabold text-lg leading-snug mb-1 ${dark ? "text-white" : "text-primary-dark"}`}
                >
                  {brand.name}
                </div>
                {brand.badge && (
                  <div
                    className={`text-xs font-semibold ${
                      brand.highlight
                        ? dark
                          ? "text-blue-300"
                          : "text-accent"
                        : dark
                          ? "text-gray-400"
                          : "text-gray-500"
                    }`}
                  >
                    {brand.badge}
                  </div>
                )}
                <div className="flex justify-center gap-1.5 mt-4">
                  {brand.yarns.map((y) => (
                    <span
                      key={y}
                      className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                        dark
                          ? "bg-white/10 text-white/85"
                          : "bg-primary/10 text-primary-light"
                      }`}
                    >
                      {y}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Full Section (card grid) ───────────────────────────────────── */
const BrandsSection = ({
  yarnType = null,
  title = "Our Brand Partners",
  subtitle = "We are authorized channel partners for India's leading polyester yarn manufacturers.",
  dark = false,
}) => {
  const displayBrands = yarnType ? getBrandsForYarn(yarnType) : allBrands;

  return (
    <section
      className={`py-16 ${dark ? "bg-primary-dark" : "bg-neutral-light"}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4 ${
              dark
                ? "bg-white/10 text-blue-300 border-white/20"
                : "bg-accent/10 text-accent border-accent/20"
            }`}
          >
            Authorized Channel Partners
          </div>
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-4 tracking-tight ${dark ? "text-white" : "text-primary-dark"}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {displayBrands.map((brand) => (
            <div
              key={brand.id}
              className={`relative group flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                brand.highlight
                  ? dark
                    ? "bg-accent/15 border-accent/40 hover:border-accent hover:bg-accent/25"
                    : "bg-accent/5 border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
                  : dark
                    ? "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                    : "bg-white border-gray-100 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {/* Highlight badge */}
              {brand.highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow">
                  ★ Our Own
                </div>
              )}

              <BrandLogo brand={brand} size="md" />

              <div
                className={`mt-5 text-base font-extrabold text-center leading-tight mb-1.5 ${dark ? "text-white" : "text-primary-dark"}`}
              >
                {brand.name}
              </div>
              {brand.badge && (
                <div
                  className={`text-xs text-center font-medium ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  {brand.badge}
                </div>
              )}
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {brand.yarns.map((y) => (
                  <Link
                    key={y}
                    to={`/products/${y.toLowerCase()}`}
                    className={`text-xs px-3 py-1 rounded-full font-bold transition-colors ${
                      dark
                        ? "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-accent hover:text-white"
                    }`}
                  >
                    {y}
                  </Link>
                ))}
              </div>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3.5 flex items-center gap-1 text-xs font-semibold transition-colors ${
                    dark
                      ? "text-gray-500 hover:text-blue-300"
                      : "text-gray-400 hover:text-accent"
                  }`}
                >
                  <ExternalLink className="w-3 h-3" /> Visit site
                </a>
              )}
            </div>
          ))}
        </div>

        <p
          className={`text-center text-xs mt-10 ${dark ? "text-gray-600" : "text-gray-400"}`}
        >
          All brands are authorized channel partners. We source directly from
          the mill.
        </p>
      </div>
    </section>
  );
};

export default BrandsSection;
