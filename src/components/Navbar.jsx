import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import siddhiLogo from "../assets/brands/Siddhi-Vinayak-polyster-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Company",
      isDropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Manufacturing & Quality", path: "/manufacturing" },
        { name: "Certifications", path: "/certifications" },
      ],
    },
    {
      name: "Products",
      isDropdown: true,
      items: [
        { name: "All Products", path: "/products" },
        { name: "DTY (Draw Textured)", path: "/products/dty" },
        { name: "POY (Partially Oriented)", path: "/products/poy" },
        { name: "FDY (Fully Drawn)", path: "/products/fdy" },
        { name: "Compare Yarn", path: "/products/compare" },
      ],
    },
    { name: "Brand Partners", path: "/brands" },
    { name: "Yarn Knowledge Center", path: "/yarn-knowledge-center" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={siddhiLogo} alt="siddhi logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-primary leading-none">
                Siddhi Vinayak
              </span>
              <span className="text-[11px] text-accent font-semibold tracking-[0.2em] mt-0.5">
                POLYESTER
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    className={`flex items-center text-sm font-medium hover:text-accent transition-colors ${link.items.some((item) => location.pathname === item.path) ? "text-accent" : "text-neutral-dark"}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="ml-1" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left border border-gray-100 py-1">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 text-sm font-medium hover:bg-neutral-light hover:text-accent transition-colors ${location.pathname === item.path ? "text-accent bg-neutral-light" : "text-neutral-dark"}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium hover:text-accent transition-colors ${location.pathname === link.path ? "text-accent" : "text-neutral-dark"}`}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              to="/quote"
              className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm hover:shadow"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t mt-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) =>
                link.isDropdown ? (
                  <div key={link.name} className="flex flex-col space-y-2">
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                      {link.name}
                    </div>
                    <div className="flex flex-col pl-4 space-y-2 border-l border-gray-200">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block text-md font-medium ${location.pathname === item.path ? "text-accent" : "text-neutral-dark"}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-lg font-medium ${location.pathname === link.path ? "text-accent" : "text-neutral-dark"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/quote"
                  className="block text-center bg-accent text-white px-6 py-3 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
