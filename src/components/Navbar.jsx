import React from "react";
import profileImage from "../assets/images/profileImage.png";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
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
              <div className="d-none mt-2 pt-1 d-md-block">
                <ul className="list-style-none">
                  <li className="active">Home</li>
                  <li>About me</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <div className="d-flex align-items-center mt-2">
                  <select className="form-select shadow-none bg-inherit me-3 me-md-0 py-1">
                    <option>EN</option>
                    <option>GE</option>
                  </select>
                  <TbMenu2 className="d-block d-md-none" size={30} />
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
