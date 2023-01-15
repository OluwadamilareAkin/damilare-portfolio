import React from "react";

import {
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  TbPlayerPlay,
} from "react-icons/tb";
import { Footer, Navbar } from "../components/index";

import myImage from "../assets/images/user.png";
import Ibook from "../assets/images/Ibook.png";
import userMain from "../assets/images/user-main.jpeg";
import testimonial from "../assets/images/testimonial-1.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-blue position-relative text-white my-rounded p-4">
                <img
                  className="hero-img"
                  src={myImage}
                  alt="Oluwadamilare Vincent Akinyoyenu"
                />
                <div className="py-4 px-1 px-md-3">
                  <h5 className="lh-3 fw-bold mb-4">
                    Hello there, I am Oluwadamilare Vincent Akinyoyenu,
                    <br />I am a UI/UX Designer.
                  </h5>
                  <p className="opaq mb-4 lh-3">
                    UI/UX Designer and Content writing.
                    <br />
                    Based in Berlin, Germany. I specialize responsive user-based
                    <br />
                    web and application design and visual development
                  </p>
                  <span className="text-underline text-md cursor">
                    Download Resume
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div className="px-3">
              <h4 className="fw-bold">A bit about me</h4>
              <p className="lh-2">
                I am Oluwadamilare Vincent Akinyoyenu, a product designer, UX
                leader, experience strategist, content creator and an
                environment loving introvert.
                <br />
                <br />
                I’ve generally respected how creative designs has the ability to
                change our reality. Regardless of whether it’s through improving
                current interaction or offering users a fresh opportunity to see
                from a different focal lens. I love dealing with projects that
                deliver a good user experience.
                <br />
                <br />
                The Covid 19 era launched me into the world of UIUX design,
                HTML, CSS and Human psychology. I am currently a master student
                at the University of Europe for Applied sciences studying New
                Media Design. I am also working with Coconet GmbH as a working
                student.
                <br />
                <br />
                I devote my spare time to volunteering and environment
                sustainable activities.
                <br />
                <br />
                Enjoying my profile? Well, here is a quote for you.
                <br />
                <span className="text-blue">
                  “It all begins with an idea, and in the end, the end-users
                  must be satisfied.”
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between px-3 mb-4">
            <div>
              <h4 className="fw-bold">Projects</h4>
            </div>
            <div>
              <TbArrowNarrowLeft className="arrows cursor me-3" />
              <TbArrowNarrowRight className="arrows cursor" />
            </div>
          </div>
        </div>
        <img src={Ibook} className="w-100" alt="Ibook" />
        <div className="dots text-center mt-4 mb-3">
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="container my-5 pt-4">
        <div className="row">
          <div className="col-12">
            <div className="px-3">
              <div className="row g-5">
                <div className="col-12 col-md-6">
                  <h4 className="fw-bold mb-3">
                    Employers and Clients Testimonial
                  </h4>
                  <p className="opaq lh-2">
                    Here are some testimonies from my previous and current
                    employers, collegues and clients.
                  </p>
                  <div className="testimony mb-5">
                    <p className="message my-0">
                      “Great designer, Vincent’s flexibility to change is a
                      great strengh. Always ready to learn from previous
                      mistakes.”
                    </p>
                    <div className="d-flex mt-5">
                      <img
                        className="me-3 rounded"
                        src={testimonial}
                        alt="Akinola Babalola"
                      />
                      <p className="align-self-end">
                        Akinola Babalola
                        <br />
                        Project Supervisor KodeCamp
                      </p>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3">My Services</h4>
                  <ul>
                    <li>Web design</li>
                    <li>Cooperate branding and graphic design</li>
                    <li>Wireframing</li>
                    <li>Wearable application designs</li>
                    <li>Mobile application design</li>
                    <li>Product design</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <div className="play-div">
                    <img
                      className="w-100"
                      src={userMain}
                      alt="Oluwadamilare Vincent Akinyoyenu"
                    />
                    <div className="play-btn shadow">
                      <TbPlayerPlay />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
