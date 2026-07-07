import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageSquare, X } from 'lucide-react';

const StickyQuoteCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();
  const isQuotePage = location.pathname === '/quote';

  useEffect(() => {
    if (isQuotePage || dismissed) return;
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isQuotePage, dismissed]);

  if (isQuotePage || dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in">
      <div className="bg-primary-dark text-white rounded-2xl shadow-2xl flex items-center gap-3 px-5 py-3 border border-white/10 backdrop-blur-sm">
        <MessageSquare className="w-5 h-5 text-blue-300 shrink-0" />
        <span className="font-semibold text-sm">Need Yarn?</span>
        <Link
          to="/quote"
          className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
        >
          Request a Quote →
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-white transition-colors ml-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      <StickyQuoteCTA />
    </div>
  );
};

export default Layout;
