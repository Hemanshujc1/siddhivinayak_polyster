import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">Siddhi Vinayak</span>
                <span className="text-[10px] text-accent-light font-medium tracking-widest">POLYESTER</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              With 20 years of excellence, Siddhi Vinayak Polyester is a leading B2B polyester yarn manufacturer and trader serving domestic and export markets globally.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm bg-primary/50 px-3 py-1 rounded-full border border-gray-600">
                <CheckCircle size={14} className="text-green-400" />
                <span>ISO 9001</span>
              </div>
              <div className="flex items-center gap-1 text-sm bg-primary/50 px-3 py-1 rounded-full border border-gray-600">
                <CheckCircle size={14} className="text-green-400" />
                <span>OEKO-TEX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/products' },
                { name: 'Manufacturing', path: '/manufacturing' },
                { name: 'Quality Standards', path: '/quality' },
                { name: 'Exports', path: '/exports' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-accent-light transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>Corp. Office:</strong> Mumbai, MH<br/>
                  <strong className="mt-1 block">Factories:</strong> Silvassa (D&NH) & Vapi (GJ)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm">export@siddhivinayakpoly.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Get a Quote</h3>
            <p className="text-sm mb-4">Looking for bulk polyester yarn? Contact our sales team for competitive pricing.</p>
            <Link 
              to="/quote" 
              className="inline-block bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-md font-medium transition-colors w-full text-center"
            >
              Request Estimate
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Siddhi Vinayak Polyester. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
