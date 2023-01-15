import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./assets/css/style.css";

import { About, Contact, Home, NotFound, Projects } from "./pages/index";

const App = () => {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage("en");
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home language={language} setLanguage={setLanguage} />}
          />
          <Route
            exact
            path="/about"
            element={<About language={language} setLanguage={setLanguage} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/project"
            element={<Projects language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="*"
            element={<NotFound language={language} setLanguage={setLanguage} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
