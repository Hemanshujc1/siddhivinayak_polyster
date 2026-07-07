import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, HelpCircle } from 'lucide-react';

const LearningCenter = () => {
  const categories = [
    {
      title: "Yarn Basics",
      icon: <BookOpen className="w-6 h-6 text-accent mb-4" />,
      articles: [
        { title: "Understanding Denier & Filament", path: "/learning/denier", readTime: "5 min read" },
        { title: "What is NIM, SIM, and HIM?", path: "/learning/intermingling", readTime: "3 min read" },
        { title: "Difference Between Bright and Semi Dull", path: "/learning/luster", readTime: "4 min read" },
        { title: "How Polyester Yarn is Manufactured", path: "/learning/manufacturing", readTime: "8 min read" },
      ]
    },
    {
      title: "Technical Guides",
      icon: <FileText className="w-6 h-6 text-accent mb-4" />,
      articles: [
        { title: "How to Read Yarn Specifications", path: "/learning/specs", readTime: "6 min read" },
        { title: "Yarn Buying Guide for Knitters", path: "/learning/knitting", readTime: "7 min read" },
        { title: "Common Yarn Defects & How to Avoid Them", path: "/learning/defects", readTime: "10 min read" },
      ]
    },
    {
      title: "Comparisons",
      icon: <HelpCircle className="w-6 h-6 text-accent mb-4" />,
      articles: [
        { title: "DTY vs FDY: Which Should You Choose?", path: "/products/compare", readTime: "Interactive" },
        { title: "POY vs FDY: The Ultimate Breakdown", path: "/products/compare", readTime: "Interactive" },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Learning Center | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Master polyester yarn with our comprehensive learning center. Read guides on denier, filaments, intermingling, and how to select the right yarn." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Learning Center</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know to make informed decisions about polyester yarn.
          </p>
        </div>
      </div>

      <section className="py-16 bg-neutral-light min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                {category.icon}
                <h2 className="text-2xl font-bold text-primary-dark mb-6 border-b border-gray-100 pb-4">{category.title}</h2>
                <ul className="space-y-4">
                  {category.articles.map((article, aIdx) => (
                    <li key={aIdx} className="group">
                      <Link 
                        to={article.path}
                        className={`block ${article.path === '#' ? 'cursor-not-allowed opacity-60' : 'hover:text-primary transition-colors'}`}
                        onClick={(e) => article.path === '#' && e.preventDefault()}
                      >
                        <h3 className={`font-bold text-lg mb-1 ${article.path !== '#' ? 'text-gray-800 group-hover:text-primary' : 'text-gray-500'}`}>
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">{article.readTime}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningCenter;
