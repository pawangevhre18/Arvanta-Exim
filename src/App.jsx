
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Certifications from "./Pages/Certifications";
import Contact from "./Pages/Contact";
import Quote from "./Pages/Quote";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

