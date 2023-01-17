import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import profileImage from "../assets/images/profileImage.png";
import { TbCaretDown, TbMenu2, TbX } from "react-icons/tb";

const Navbar = ({ portfolio, language, setLanguage, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;

  const changeLanguage = (e) => {
    const lang = e.target.value;
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
                      <li className="active my-dropdown lr">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">
                            Projekte
                            <TbCaretDown />
                          </span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              key={slug.sys.id}
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    ) : (
                      <li className="my-dropdown lr">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">
                            Projekte
                            <TbCaretDown />
                          </span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              key={slug.sys.id}
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
                      <li className="active my-dropdown lr">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">
                            Project
                            <TbCaretDown />
                          </span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              key={slug.sys.id}
                              className="my-dropcontent-link"
                              to={`/project/${slug.sys.id}`}
                            >
                              {slug.fields.slug}
                            </Link>
                          ))}
                        </div>
                      </li>
                    ) : (
                      <li className="my-dropdown lr">
                        <Link className="nav-link" to="#">
                          <span className="my-dropbtn">
                            Project <TbCaretDown />
                          </span>
                        </Link>
                        <div className="my-dropcontent">
                          {portfolio?.items?.map((slug) => (
                            <Link
                              key={slug.sys.id}
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
                <div className="d-flex align-items-center mt-0 mt-md-2 pt-1">
                  <select onChange={changeLanguage} value={language} class="form-select shadow-none">
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                  </select>
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
