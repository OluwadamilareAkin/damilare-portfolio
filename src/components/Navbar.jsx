import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import profileImage from "../assets/images/profileImage.png";
import { TbMenu2, TbWorld, TbX } from "react-icons/tb";

const Navbar = ({ portfolio, language, setLanguage, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <>
      <nav className="py-4 px-3 mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <TbMenu2
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="d-block d-md-none me-3"
                  size={20}
                />
                <img
                  className="myImg d-none d-lg-inline-block"
                  src={profileImage}
                  alt="Oluwadamilare Vincent Akinyoyenu"
                />
                <span className="fw-bold">
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
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                    )}

                    {location === "/about" ? (
                      <li className="active">
                        <Link className="nav-link" to="/about">
                          Über
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/about">
                          Über
                        </Link>
                      </li>
                    )}

                    {location === "/project/" + id ? (
                      <li className="active my-dropdown">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">Projekte</span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    ) : (
                      <li className="my-dropdown">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">Projekte</span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    )}

                    {location === "/contact" ? (
                      <li className="active">
                        <Link className="nav-link" to="/contact">
                          Kontakt
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/contact">
                          Kontakt
                        </Link>
                      </li>
                    )}
                  </ul>
                ) : (
                  <ul className="list-style-none">
                    {location === "/" ? (
                      <li className="active">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                    )}

                    {location === "/about" ? (
                      <li className="active">
                        <Link className="nav-link" to="/about">
                          About me
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/about">
                          About me
                        </Link>
                      </li>
                    )}

                    {location === "/project/" + id ? (
                      <li className="active my-dropdown">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">Project</span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    ) : (
                      <li className="my-dropdown">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">Project</span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    )}

                    {location === "/contact" ? (
                      <li className="active">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div>
                <div className="d-flex align-items-center mt-1 mt-md-2 pt-1">
                  <li className="my-dropdown">
                    <Link className="nav-link" to="#">
                      <TbWorld size={20} />
                    </Link>
                    <div className="my-dropcontent r-5">
                      <span
                        onClick={() => {
                          changeLanguage("en");
                        }}
                        className="my-dropcontent-link"
                      >
                        EN
                      </span>
                      <span
                        onClick={() => {
                          changeLanguage("de");
                        }}
                        className="my-dropcontent-link"
                      >
                        GE
                      </span>
                    </div>
                  </li>
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
