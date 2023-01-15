import React from "react";

import { Footer, Navbar } from "../components/index";
import myImage from "../assets/images/user.png";

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
                <div className="py-4 px-1">
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
      <Footer />
    </>
  );
};

export default Home;
