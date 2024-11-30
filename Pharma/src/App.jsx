import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Business,
  Hero,
  Footer,
  Medicine,
  Aboutus,
  Testimonials,
} from "./components";
import Mission from "./components/Mission";
import Contactus from "./components/Contactus";
import MoreContactus from "./components/MoreContactus";
import { Service } from "./components";
import ImportProducts from "./components/ImportProducts";
import ExportProducts from "./components/ExportProducts";

const Maincontent = () => {
  return (
    <div className=" w-full min-h-screen overflow-hidden ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="bg-secondary">
                <Business />
              </div>

              <Medicine />
              <Testimonials />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/MoreContactus" element={<MoreContactus />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ImportProducts" element={<ImportProducts />} />
        <Route path="/ExportProducts" element={<ExportProducts />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Maincontent />
    </Router>
  );
};

export default App;
