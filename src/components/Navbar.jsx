import React from "react";
import profileImage from "../assets/images/profileImage.png";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="d-flex flex-row justify-content-between">
              <div className="">
                <img
                  className="myImg"
                  src={profileImage}
                  alt="Oluwadamilare Vincent Akinyoyenu"
                />
                <span className="fw-bold">
                  Oluwadamilare Vincent Akinyoyenu
                </span>
              </div>
              <div className="mt-2">
                <ul className="list-style-none">
                  <li className="active">Home</li>
                  <li>About me</li>
                  <li>Projects</li>
                  <li>Contact</li>
                  <li>
                    <TbWorld size={20} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
