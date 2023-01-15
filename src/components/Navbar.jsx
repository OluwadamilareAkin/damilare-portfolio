import React, { useState } from "react";
import profileImage from "../assets/images/profileImage.png";
import { TbMenu2, TbX } from "react-icons/tb";

import { Link, useLocation } from "react-router-dom";

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;

  const changeLanguage = (e) => {
    let lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <>
      <nav className="py-4 px-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="d-flex justify-content-between">
              <div className="">
                <img
                  className="myImg"
                  src={profileImage}
                  alt="Oluwadamilare Vincent Akinyoyenu"
                />
                <span className="fw-bold d-none d-lg-inline-block">
                  Oluwadamilare Vincent Akinyoyenu
                </span>
              </div>
              <div className={`d-none mt-2 pt-1 d-md-block sidebar ${isOpen}`}>
                <div
                  className="close d-block d-md-none"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <TbX />
                </div>
                {language === "de" ? (
                  <ul className="list-style-none">
                    {location === "/" ? (
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                    )}

                    {location === "/about" ? (
                      <li className="active">
                        <Link to="/about">Über</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/about">Über</Link>
                      </li>
                    )}

                    <li>
                      <Link to="#">Projekte</Link>
                    </li>

                    {location === "/contact" ? (
                      <li className="active">
                        <Link to="/contact">Kontakt</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/contact">Kontakt</Link>
                      </li>
                    )}
                  </ul>
                ) : (
                  <ul className="list-style-none">
                    {location === "/" ? (
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                    )}

                    {location === "/about" ? (
                      <li className="active">
                        <Link to="/about">About me</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/about">About me</Link>
                      </li>
                    )}

                    <li>
                      <Link to="#">Projects</Link>
                    </li>

                    {location === "/contact" ? (
                      <li className="active">
                        <Link to="/contact">Contact</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div>
                <div className="d-flex align-items-center mt-2">
                  <select
                    onChange={changeLanguage}
                    className="form-select cursor shadow-none bg-inherit me-3 me-md-0 py-1"
                  >
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                  </select>
                  <TbMenu2
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="d-block d-md-none"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
