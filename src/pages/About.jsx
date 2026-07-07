import React from "react";
import { Helmet } from "react-helmet-async";
import { Target, Lightbulb } from "lucide-react";

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
        <title>About Us | Siddhi Vinayak Polyester</title>
        <meta
          name="description"
          content="Learn about Siddhi Vinayak Polyester's 20-year history, our founders, and our mission to provide the highest quality polyester yarns to the world."
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
                Over the past 20 years, we have evolved into a comprehensive polyester yarn solution provider. Unlike many companies, our expertise combines <strong>in-house manufacturing of Draw Textured Yarn (DTY)</strong> with extensive <strong>trading operations for POY and FDY</strong>. 
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As authorized channel partners, we source directly from India's leading polyester manufacturers including Reliance Industries, Bhilosa Industries, and Wellknown Polyester. This unique hybrid model allows our customers—spanning textile mills, knitting units, and exporters—to obtain multiple brands and precise yarn specifications from one trusted supplier.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-neutral-light p-6 rounded-lg border border-gray-100 text-center">
                  <h4 className="text-4xl font-bold text-accent mb-2">20+</h4>
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
                To continuously innovate our DTY manufacturing processes and leverage our strong mill partnerships to deliver the highest quality polyester yarns. We strive to empower our clients' supply chains through honest recommendations, competitive pricing, and a comprehensive product range.
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
      <section className="py-20 bg-white">
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
    </>
  );
};

export default About;
