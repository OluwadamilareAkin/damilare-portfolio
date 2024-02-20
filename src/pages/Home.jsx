import React, { useEffect, useState } from "react";
import { TbPlayerPlay, TbDownload, TbArrowNarrowLeft, TbArrowNarrowRight  } from "react-icons/tb";
import { Footer, Navbar, ImageSlider, Testimonial } from "../components/index";

import myImage from "../assets/images/user.png";
import userMain from "../assets/images/user-main.jpeg";
import topIcon from "../assets/images/portfolio-icon.png";
import ceo from "../assets/images/damilare_img.png";
import projectImage from "../assets/images/portfolio-image.png";
import projectPencil from "../assets/images/portfolio-pencil.png";
import projectWire from "../assets/images/portfolio-wire.png";
import projectVisual from "../assets/images/portfolio-visual.png";
import projectMotion from "../assets/images/portfolio-motion.png";
import projectBrand from "../assets/images/portfolio-brand.png";
import ceoIcon from "../assets/images/ceo-icons.png";
import ceoArrow from "../assets/images/ceo_arrow.png";

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

      <div className="mb-5">
        <div className="container" style={{color: "#171717"}}>
          
          {language !== "de" ?  
            <div>
              <div className="d-flex justify-content-center">
                <div className="project-maxwidth text-center">
                  <div className="d-flex justify-content-center">
                    <div className="position-relative">

                      <h6 className="fs-3 px-4" style={{border: "1px solid #000", borderRadius: "38.24px"}}>Hello!</h6>
                      <img src={topIcon} className="position-absolute" style={{top: "-22px", right: "-22px"}} alt="Just an icon"/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">

                    <h1 className="intro-font">I’m <span style={{color: "#100BF5"}}>Vincent</span>, UI/UX Designer</h1>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center">
                <div className="w-100">
                  <h5 className="fs-5 fs-md-4 fs-md-3 fs-sm-2">Get to Meet Vincent Oluwadamilare Akinyoyenu — a versatile UI/UX designer, functioning in the industry for 3+ years now. I'm passionate about the transformative power of creative designs and thrive on crafting exceptional user experiences. I’m currently writing my Master's thesis in Media Design at the University of Europe for Applied Sciences, Berlin. I currently volunteer as a UI/UX working student at TechLabs. Beyond design, I find fulfilment  in volunteering for eco-friendly causes. 
                  <br />
                  <br />
                  In essence, my philosophy is encapsulated by the mantra, "Everything starts with an idea, and in the end, the satisfaction of end users is paramount."</h5>
                  <button
                  onClick={downloadResume}
                  className="btn my-btn py-2 px-3 mt-3"
                  >
                    <span className="me-3">
                      {language === "de"
                        ? "Lebenslauf Herunterladen"
                        : "Download Resume"}
                    </span>{" "}
                    <TbDownload />
                </button>
              </div>


              <div className="w-100 d-flex justify-content-center ceo_bg">
                <img src={ceo} alt="Ceo image" className="w-100"/>
                <img src={ceoIcon} alt="icons img" className=" w-75 ceo-icon"/>
                <img src={ceoArrow} alt="icons img" className="w-25 ceo-arrow"/>
              </div>
            </div>
          </div>
          :
          <div>
            <div className="d-flex justify-content-center">
              <div className="project-maxwidth-germany text-center">
                <div className="d-flex justify-content-center">
                  <div className="position-relative">

                    <h6 className="fs-3 px-4 py-3" style={{border: "1px solid #000", borderRadius: "38.24px"}}>Hello!</h6>
                    <img src={topIcon} className="position-absolute" style={{top: "-22px", right: "-22px"}} alt="Just an icon"/>
                  </div>
                </div>
                <div className="d-flex justify-content-center">

                  <h1 className="intro-font">Ich bin <span style={{color: "#100BF5"}}>Vincent</span>, UI/ UX-Designer</h1>
                </div>
              </div>
            </div>
            <div className="d-md-flex align-items-center">
              <div className="w-100">
                <h5 className="fs-5">
                  Darf ich vorstellen: Vincent Oluwadamilare Akinyoyenu - ein vielseitiger UI/UX-Designer, der seit über 3 Jahren in der Branche tätig ist. Ich bin begeistert von der transformativen Kraft kreativer Designs und liebe es, außergewöhnliche Nutzererlebnisse zu gestalten. Derzeit schreibe ich meine Masterarbeit in Mediendesign an der Europäischen Fachhochschule Berlin. Derzeit arbeite ich ehrenamtlich als UI/UX-Werkstudentin bei TechLabs. Neben dem Design finde ich Erfüllung im ehrenamtlichen Engagement für umweltfreundliche Zwecke. <br />
                  <br />
                  <br />
                  Meine Philosophie lässt sich im Wesentlichen mit dem Mantra zusammenfassen: "Alles beginnt mit einer Idee, und am Ende steht die Zufriedenheit der Endnutzer an erster Stelle."
                </h5>
                <button
                  onClick={downloadResume}
                  className="btn my-btn py-2 px-3 mt-3"
                >
                  <span className="me-3">
                    {language === "de"
                      ? "Lebenslauf Herunterladen"
                      : "Download Resume"}
                  </span>{" "}
                  <TbDownload />
                </button>
              </div>

              <div className="w-100 d-flex justify-content-center ceo_bg">
                <img src={ceo} alt="Ceo image" className="w-100"/>
                <img src={ceoIcon} alt="icons img" className=" ceo-icon"/>
                <img src={ceoArrow} alt="icons img" className="w-25 ceo-arrow"/>
              </div>
              
            </div>
          </div>
}
        </div>
      </div>
      {/* <div className="mt-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-blue wave-bg position-relative text-white my-rounded p-4">
                <img
                  className="hero-img"
                  src={myImage}
                  alt="Oluwadamilare Vincent Akinyoyenu"
                />
                <div className="py-4 px-1 px-md-3 ">
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
      </div> */}
<div className="bg-white project-padding">


<div className="container">
          <div className="d-flex align-items-center justify-content-between px-3 mb-4">
            <div>
              <h4 className="fw-bold">
                {language === "de" ? "Projekte" : "Projects"}
              </h4>
            </div>
            <div>
              <TbArrowNarrowLeft
                // onClick={goToPrevPicture}
                className="arrows cursor me-3"
              />
              <TbArrowNarrowRight
                // onClick={goToNextPicture}
                className="arrows cursor"
              />
            </div>
          </div>
        </div>  
<div className="">
  <img src={projectImage} alt="Project images picture" className="w-100"/>
</div>
        </div>

      {/* <div className="container">
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
      </div> */}

      <div className=" project-padding bg-blue-light p-2 p-sm-3 p-lg-5">
        
        <h4 className="fw-bold mb-4">
                  {language === "de"
                    ? "Meine Dienstleistungen"
                    : "My Services"}
                </h4>
                <div className="d-lg-flex">
<div className="w-100 row gy-3">
<div className="col-6 d-flex align-items-center gap-3">
<img src={projectPencil} alt="TOols icon" className="design-img"/>
<h6 className="fw-bold">UX DESIGN</h6>
</div>
<div className="col-sm-6 col-12 d-flex align-items-center gap-3">
<img src={projectMotion} alt="TOols icon" className="design-img"/>
<h6 className="fw-bold">MOTION DESIGN</h6>
</div>
<div className="col-sm-6 col-12 d-flex align-items-center gap-3">
<img src={projectWire} alt="TOols icon" className="design-img"/>
<h6 className="fw-bold">WIREFRAMING</h6>
</div>
<div className="col-sm-6 col-12 d-flex align-items-center gap-3">
<img src={projectVisual} alt="TOols icon" className="design-img"/>
<h6 className="fw-bold">VISUAL DESIGN</h6>
</div>
<div className="col-sm-6 col-12 d-flex align-items-center gap-3">
<img src={projectBrand} alt="TOols icon" className="design-img"/>
<h6 className="fw-bold">COOPERATE BRANDING AND GRAPHIC DESIGN</h6>
</div>
</div>
<div className="w-100"></div>
                </div>
        
      </div>

      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
