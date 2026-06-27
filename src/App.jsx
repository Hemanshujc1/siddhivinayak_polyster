import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Manufacturing from './pages/Manufacturing';
import Quality from './pages/Quality';
import Certifications from './pages/Certifications';
import Exports from './pages/Exports';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="quality" element={<Quality />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="exports" element={<Exports />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<Quote />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
