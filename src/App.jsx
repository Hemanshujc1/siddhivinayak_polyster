import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Manufacturing from "./pages/Manufacturing";
import Quality from "./pages/Quality";
import Certifications from "./pages/Certifications";
import Exports from "./pages/Exports";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Dty from "./pages/Dty";
import Poy from "./pages/Poy";
import Fdy from "./pages/Fdy";
import Compare from "./pages/Compare";
import LearningCenter from "./pages/LearningCenter";
import LearningDenier from "./pages/LearningDenier";
import LearningSpecs from "./pages/LearningSpecs";
import LearningIntermingling from "./pages/LearningIntermingling";
import LearningLuster from "./pages/LearningLuster";
import LearningManufacturing from "./pages/LearningManufacturing";
import LearningKnitting from "./pages/LearningKnitting";
import LearningDefects from "./pages/LearningDefects";
import YarnFinder from "./pages/YarnFinder";
import IndustryApplications from "./pages/IndustryApplications";
import Downloads from "./pages/Downloads";
import Brands from "./pages/Brands";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="brands" element={<Brands />} />
            <Route path="yarn-finder" element={<YarnFinder />} />
            <Route
              path="industry-applications"
              element={<IndustryApplications />}
            />
            <Route path="downloads" element={<Downloads />} />
            <Route path="learning" element={<LearningCenter />} />
            <Route path="learning/denier" element={<LearningDenier />} />
            <Route path="learning/specs" element={<LearningSpecs />} />
            <Route
              path="learning/intermingling"
              element={<LearningIntermingling />}
            />
            <Route path="learning/luster" element={<LearningLuster />} />
            <Route
              path="learning/manufacturing"
              element={<LearningManufacturing />}
            />
            <Route path="learning/knitting" element={<LearningKnitting />} />
            <Route path="learning/defects" element={<LearningDefects />} />
            <Route path="products/dty" element={<Dty />} />
            <Route path="products/poy" element={<Poy />} />
            <Route path="products/fdy" element={<Fdy />} />
            <Route path="products/compare" element={<Compare />} />
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
