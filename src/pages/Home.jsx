import React from "react";

import {
  TbArrowNarrowLeft,
  TbArrowNarrowRight,
  TbPlayerPlay,
} from "react-icons/tb";
import { Footer, Navbar } from "../components/index";

import myImage from "../assets/images/user.png";
import userMain from "../assets/images/user-main.jpeg";
import testimonial from "../assets/images/testimonial-1.jpeg";

const Home = ({ portfolio, language, setLanguage }) => {
  return (
    <>
      <Navbar
        portfolio={portfolio}
        language={language}
        setLanguage={setLanguage}
      />

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
                  {language === "de" ? (
                    <>
                      <h5 className="lh-3 fw-bold mb-4">
                        Hallo, ich bin Oluwadamilare Vincent Akinyoyenu,
                        <br />
                        Ich bin ein UI/UX Designer.
                      </h5>
                      <p className="opaq mb-4 lh-3">
                        UI/UX-Designer und Content-Schreiber.
                        <br />
                        Mit Sitz in Berlin, Deutschland. Ich bin spezialisiert
                        auf nutzerorientiertes
                        <br />
                        Web- und Anwendungsdesign und visuelle Entwicklung.
                      </p>
                      <span className="text-underline text-md cursor">
                        Lebenslauf Herunterladen
                      </span>
                    </>
                  ) : (
                    <>
                      <h5 className="lh-3 fw-bold mb-4">
                        Hello there, I am Oluwadamilare Vincent Akinyoyenu,
                        <br />I am a UI/UX Designer.
                      </h5>
                      <p className="opaq mb-4 lh-3">
                        UI/UX Designer and Content writing.
                        <br />
                        Based in Berlin, Germany. I specialize responsive
                        user-based
                        <br />
                        web and application design and visual development
                      </p>
                      <span className="text-underline text-md cursor">
                        Download Resume
                      </span>
                    </>
                  )}
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
              {language === "de" ? (
                <>
                  <h4 className="fw-bold">Ein wenig über mich</h4>
                  <p className="lh-2">
                    Ich bin Oluwadamilare Vincent Akinyoyenu, ein
                    Produktdesigner, UX-Führer, Erlebnisstratege, Content
                    Creator und ein umweltliebender Introvertierter.
                    <br />
                    <br />
                    Ich respektiere generell, dass kreatives Design die
                    Fähigkeit hat, unsere Realität zu verändern. Ganz gleich, ob
                    es um die Verbesserung der aktuellen Interaktion geht oder
                    darum, den Nutzern eine neue Möglichkeit zu bieten, aus
                    einem anderen Blickwinkel zu sehen. Ich liebe es, mich mit
                    Projekten zu beschäftigen, die ein gutes Nutzererlebnis
                    bieten.
                    <br />
                    <br />
                    Die Ära Covid 19 hat mich in die Welt des UIUX-Designs,
                    HTML, CSS und der menschlichen Psychologie eingeführt.
                    Derzeit bin ich Masterstudentin an der University of Europe
                    for Applied Sciences und studiere New Media Design. Außerdem
                    bin ich bei der Coconet GmbH als Werkstudent tätig.
                    <br />
                    <br />
                    In meiner Freizeit engagiere ich mich ehrenamtlich und
                    nachhaltig für die Umwelt.
                    <br />
                    <br />
                    Gefällt Ihnen mein Profil? Dann habe ich hier ein Zitat für
                    Sie.
                    <br />
                    <span className="text-blue">
                      "Alles beginnt mit einer Idee, und am Ende muss der
                      Endnutzer zufrieden sein."
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h4 className="fw-bold">A bit about me</h4>
                  <p className="lh-2">
                    I am Oluwadamilare Vincent Akinyoyenu, a product designer,
                    UX leader, experience strategist, content creator and an
                    environment loving introvert.
                    <br />
                    <br />
                    I’ve generally respected how creative designs has the
                    ability to change our reality. Regardless of whether it’s
                    through improving current interaction or offering users a
                    fresh opportunity to see from a different focal lens. I love
                    dealing with projects that deliver a good user experience.
                    <br />
                    <br />
                    The Covid 19 era launched me into the world of UIUX design,
                    HTML, CSS and Human psychology. I am currently a master
                    student at the University of Europe for Applied sciences
                    studying New Media Design. I am also working with Coconet
                    GmbH as a working student.
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between px-3 mb-4">
            <div>
              <h4 className="fw-bold">
                {language === "de" ? "Projekte" : "Projects"}
              </h4>
            </div>
            <div>
              <TbArrowNarrowLeft className="arrows cursor me-3" />
              <TbArrowNarrowRight className="arrows cursor" />
            </div>
          </div>
        </div>
        <div className="carouselImages">
          {portfolio?.items?.map((item) => (
            <div key={item.sys.id}>
              <img
                src={`https:${item.fields.displayImage.fields.file.url}`}
                className="w-100"
                alt={item.fields.title}
              />
            </div>
          ))}
        </div>
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
                    {language === "de"
                      ? "Erfahrungsberichte von Arbeitgebern und Kunden"
                      : "Employers and Clients Testimonial"}
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
                  <h4 className="fw-bold mb-3">
                    {language === "de"
                      ? "Meine Dienstleistungen"
                      : "My Services"}
                  </h4>
                  <ul className="lh-3">
                    {language === "de" ? (
                      <>
                        <li>Webgestaltung</li>
                        <li>Gemeinsames Branding und Grafikdesign</li>
                        <li>Wireframing</li>
                        <li>Entwürfe für Wearable-Anwendungen</li>
                        <li>Design für mobile Anwendungen</li>
                        <li>Produktdesign</li>
                      </>
                    ) : (
                      <>
                        <li>Web design</li>
                        <li>Cooperate branding and graphic design</li>
                        <li>Wireframing</li>
                        <li>Wearable application designs</li>
                        <li>Mobile application design</li>
                        <li>Product design</li>
                      </>
                    )}
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

      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
