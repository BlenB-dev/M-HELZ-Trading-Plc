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
} from "./components";
import Mission from "./components/Mission";

const Maincontent = () => {
  const location = useLocation();
  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden ">
      {location.pathname === "/Aboutus" && <Navbar />}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === "/Mission" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Medicine />
              <Business />
              <Footer />
            </>
          }
        />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Mission" element={<Mission />} />
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
