import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

//importing english pages
import { About, Contact, Home, NotFound, Projects } from "./en/index";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/en/about" element={<About />} />
          <Route exact path="/en/contact" element={<Contact />} />
          <Route exact path="/en/project" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
