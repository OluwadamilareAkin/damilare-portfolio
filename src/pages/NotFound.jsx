import React from "react";
import { Footer, Navbar } from "../components/index";
import { Link } from "react-router-dom";

const NotFound = ({ language, setLanguage }) => {
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="py-5 my-5 text-center">
              <h1 className="display-3 fw-bold">404</h1>
              <p className="mb-4">
                {language === "de"
                  ? "Seite nicht gefunden!"
                  : "Page not found!"}
              </p>
              <Link to="/">
                <button className="btn my-btn px-4">
                  {language === "de" ? "Zurück zuhause" : "Back Home"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default NotFound;
