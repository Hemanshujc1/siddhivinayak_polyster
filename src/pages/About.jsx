import React from "react";
import { Helmet } from "react-helmet-async";
import { Target, Lightbulb, Globe, FileText, Ship } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2006",
      title: "Company Foundation",
      desc: "Started with 5 texturing machines in Maharashtra.",
    },
    {
      year: "2012",
      title: "Capacity Expansion",
      desc: "Added POY spinning lines, doubling capacity.",
    },
    {
      year: "2016",
      title: "Global Export",
      desc: "Initiated export division, reaching SE Asia and Middle East.",
    },
    {
      year: "2023",
      title: "Sustainable Yarns",
      desc: "Introduced recycled polyester (rPET) lines.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us & Global Exports | Siddhi Vinayak Polyester</title>
        <meta
          name="description"
          content="Learn about Siddhi Vinayak Polyester's 15-year history, our founders, mission, and our expanding global export footprint serving international markets."
        />
      </Helmet>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            About Siddhi Vinayak
          </h1>
          <p className="text-xl text-blue-200">
            Two Decades of Excellence in Polyester Yarn Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded circa 2006 by a family deeply rooted in the textile
                weaving industry, Siddhi Vinayak Polyester was born out of a
                vision to supply consistent, high-quality raw materials to local
                weavers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past 15 years, we have evolved into a comprehensive
                polyester yarn solution provider. Unlike many companies, our
                expertise combines{" "}
                <strong>
                  in-house manufacturing of Draw Textured Yarn (DTY)
                </strong>{" "}
                with extensive{" "}
                <strong>trading operations for POY and FDY</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As authorized channel partners, we source directly from India's
                leading polyester manufacturers including Reliance Industries,
                Bhilosa Industries, and Wellknown Polyester. This unique hybrid
                model allows our customers—spanning textile mills, knitting
                units, and exporters—to obtain multiple brands and precise yarn
                specifications from one trusted supplier.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-neutral-light p-6 rounded-lg border border-gray-100 text-center">
                  <h4 className="text-4xl font-bold text-accent mb-2">15+</h4>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Years of Trust
                  </p>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg border border-gray-100 text-center">
                  <h4 className="text-4xl font-bold text-accent mb-2">500+</h4>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    B2B Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-xl aspect-[4/5] overflow-hidden shadow-sm">
                  <img
                    src="/images/about/dty-machinery.png"
                    alt="DTY Winding Machinery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-200 rounded-xl aspect-square overflow-hidden shadow-sm">
                    <img
                      src="/images/about/machinery-detail.png"
                      alt="Precision Texturizing Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-200 rounded-xl aspect-square overflow-hidden shadow-sm">
                    <img
                      src="/images/about/boardroom.png"
                      alt="Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To continuously innovate our DTY manufacturing processes and
                leverage our strong mill partnerships to deliver the highest
                quality polyester yarns. We strive to empower our clients'
                supply chains through honest recommendations, competitive
                pricing, and a comprehensive product range.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the globally preferred partner for synthetic yarns,
                recognized for our ethical business practices, technological
                advancement, and commitment to sustainable textile
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-16">
            Journey & Milestones
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <span className="text-xs font-bold">
                    {item.year.substring(2)}
                  </span>
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-light p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-lg text-primary-dark">
                      {item.title}
                    </h4>
                    <span className="text-accent font-bold md:hidden">
                      {item.year}
                    </span>
                  </div>
                  <span className="hidden md:block text-accent font-bold mb-2">
                    {item.year}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Exports Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12 flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Global Presence</h2>
              <h3 className="text-3xl font-bold text-primary-dark mb-4">Export Capabilities</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                As we expand our footprint, Siddhi Vinayak Polyester is actively preparing to serve international markets, bringing our premium quality yarns to buyers across Asia, the Middle East, Africa, and the Americas.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are a registered exporter holding a valid IEC code and RCMC from the Synthetic & Rayon Textiles Export Promotion Council of India.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 relative overflow-hidden shadow-md">
                <img src="/images/exports-shipping.png" alt="Global Logistics" className="w-full h-full object-cover" />
                <Globe className="w-32 h-32 text-white/20 absolute -right-10 -bottom-10" />
                <span className="text-white font-bold text-2xl relative z-10 drop-shadow-md">Ready for the World</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Documentation */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark">Documentation</h4>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our dedicated export team ensures seamless customs clearance by providing all necessary documentation:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Commercial Invoice & Packing List
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Bill of Lading (B/L) / Air Waybill
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Certificate of Origin (GSP / Preferential)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Insurance Certificate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Quality Inspection Certificates
                </li>
              </ul>
            </div>

            {/* Incoterms & Packaging */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Ship className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark">Logistics & Incoterms</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                We offer flexible shipping terms to accommodate buyer preferences. Typical incoterms include:
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">FOB (Mumbai)</span>
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">CIF</span>
                <span className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded border border-accent/20">EXW</span>
              </div>
              <h5 className="font-bold text-primary-dark mb-2 text-sm">Export Packaging:</h5>
              <p className="text-gray-600 text-xs leading-relaxed">
                Cartons containing 12-15 cones (~20-25 kg) are securely shrink-wrapped and strapped onto wooden/plastic pallets, optimized for 20ft and 40ft containers to prevent transit damage.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
