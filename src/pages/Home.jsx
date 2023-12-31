import React, { useEffect, useState } from "react";

import { TbPlayerPlay } from "react-icons/tb";
import { Footer, Navbar, ImageSlider, Testimonial } from "../components/index";

import myImage from "../assets/images/user.png";
import userMain from "../assets/images/user-main.jpeg";

const Home = ({ portfolio, language, setLanguage }) => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [id, setId] = useState([]);
  const [count, setCount] = useState(0);

  let port = portfolio?.items;

  useEffect(() => {
    setCount(port?.length);

    port?.map((item) =>
      setImage((image) => [...image, item.fields.dispalyimage.fields.file.url])
    );

    port?.map((item) => setTitle((title) => [...title, item.fields.title]));

    port?.map((item) => setId((id) => [...id, item.sys.id]));
  }, [port]);

  const downloadResume = () => {
    fetch(window.location.origin + "/resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Vincent_Akinyoyenu_Resume.pdf";
        alink.click();
      });
    });
  };

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
              <div className="bg-blue wave-bg position-relative text-white my-rounded p-4">
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
                        UI/UX-Designer.
                        <br />
                        Mit Sitz in Berlin, Deutschland. Ich bin spezialisiert
                        auf nutzerorientiertes
                        <br />
                        Web- und Anwendungsdesign und visuelle Entwicklung.
                      </p>
                      <span
                        onClick={downloadResume}
                        className="text-underline text-md cursor"
                      >
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
                        UI/UX Designer
                        <br />
                        Based in Berlin, Germany. I specialize responsive
                        user-based
                        <br />
                        web and application design and visual development
                      </p>
                      <span
                        onClick={downloadResume}
                        className="text-underline text-md cursor"
                      >
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
                    Ich bin Oluwadamilare Vincent Akinyoyenu, ein Produktdesigner, UX-Mentor, Erlebnisstratege, Inhaltsersteller und umweltbegeisterter Introvertierter.
                    <br />
                    <br />
                    Ich habe schon immer bewundert, wie kreative Designs unsere Realität verändern können, sei es durch die Verbesserung aktueller Interaktionen oder indem sie den Benutzern eine neue Perspektive bieten. Es macht mir Spaß, an Projekten zu arbeiten, die außergewöhnliche Nutzererlebnisse bieten.
                    bieten.
                    <br />
                    <br />
                    Während meines ersten Bachelor-Studiums entdeckte ich meine Liebe für UI/UX-Design, HTML, CSS und menschliche Psychologie. Das hat mich dazu inspiriert, eine Karriere in diesem Bereich anzustreben, und ich bin derzeit Masterstudentin an der University of Europe for Applied Sciences und studiere Mediendesign. Außerdem bin ich UX-Mentorin für neue UX-Design-Studenten bei TechLabs.
                    <br />
                    <br />
                    In meiner Freizeit engagiere ich mich ehrenamtlich und nehme an umweltfreundlichen Aktivitäten teil. 
                    <br />
                    <br />
                    Um es mit einem Zitat zusammenzufassen: <span className="text-blue">"Alles beginnt mit einer Idee, und am Ende müssen die Endnutzer zufrieden sein."</span>
                  </p>
                </>
              ) : (
                <>
                  <h4 className="fw-bold">A bit about me</h4>
                  <p className="lh-2">
                    I am Oluwadamilare Vincent Akinyoyenu, a product designer, UX mentor, experience strategist, content creator, and environment-loving introvert.
                    <br />
                    <br />
                    I've always admired how creative designs have the ability to change our reality, whether it's through improving current interactions or offering users a fresh perspective. I enjoy working on projects that deliver exceptional user experiences.
                    <br />
                    <br />
                    During my first bachelor's degree, I discovered my love for UI/UX design, HTML, CSS, and human psychology. It inspired me to pursue a career in the field, and I am currently a master's student at the University of Europe for Applied Sciences studying Media Design. In addition, I am also a UX mentor for new UX design students at TechLabs.
                    <br />
                    <br />
                    During my free time, I am dedicated to volunteering and participating in environmentally sustainable activities.
                    <br />
                    <br />
                    To sum it up, as the quote goes, <span className="text-blue">"It all begins with an idea, and in the end, the end-users must be satisfied."</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <ImageSlider
              image={image}
              count={count}
              id={id}
              title={title}
              language={language}
            />
          </div>
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
                  <Testimonial />
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
                    <div className="play-btn shadow d-none">
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
