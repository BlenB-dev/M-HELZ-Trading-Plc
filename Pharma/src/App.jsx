import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Navbar,
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

const Maincontent = () => {
  const location = useLocation();
  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden ">
      {location.pathname === "/Aboutus" && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/Mission" && <Navbar />}
      {location.pathname === "/MoreContactus" && <Navbar />}
      {location.pathname === "/Service" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Medicine />
              <Business />
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
