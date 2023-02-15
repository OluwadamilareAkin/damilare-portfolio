import React from "react";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbDownload,
  TbMail,
  TbPhone,
} from "react-icons/tb";

const Footer = ({ language, setLanguage }) => {
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
      <footer className="mt-4">
        <div className="bg-white px-3 py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-md-7">
                <h4 className="fw-bold mb-2">
                  {language === "de"
                    ? "Begeistert von meinem Portfolio?"
                    : "Excited with my portfolio?"}
                </h4>
                <p className="lh-3 opaq mb-3">
                  {language === "de"
                    ? "Ich bin bereit, Teil Ihres Teams zu werden. Gemeinsam können wir Ihren Kunden das beste Nutzererlebnis bieten."
                    : "I am set to be a part of your team. Together we can give your customers the best user experience."}
                </p>
                <button
                  onClick={downloadResume}
                  className="btn my-btn py-2 px-3"
                >
                  <span className="me-3">
                    {language === "de"
                      ? "Lebenslauf Herunterladen"
                      : "Download Resume"}
                  </span>{" "}
                  <TbDownload />
                </button>
              </div>
              <div className="col-12 col-md-5">
                <div className="bordered cursor px-4 py-3 d-flex mb-4">
                  <div className="me-3">
                    <TbMail className="text-blue" size={35} />
                  </div>
                  <div>
                    <p className="mb-0 opaq text-uppercase small">
                      {language === "de"
                        ? "Chatten Sie mit mir"
                        : "Chat with me"}
                    </p>
                    <p className="mb-0 text-md">vindamilare@gmail.com</p>
                  </div>
                </div>

                <div className="bordered cursor px-4 py-3 d-flex">
                  <div className="me-3">
                    <TbPhone className="text-blue" size={35} />
                  </div>
                  <div>
                    <p className="mb-0 opaq text-uppercase small">
                      {language === "de" ? "Rufen Sie mich an" : "Call me"}
                    </p>
                    <p className="mb-0 text-md">+491786688559</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3">
          <hr className="bg-blue" />
          <div className="container py-3">
            <div className="row g-5 align-items-center">
              <div className="col-12 col-md-3 d-flex align-items-center">
                <img
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                  }}
                  className="me-2"
                  src={require("../assets/images/footerImage.jpeg")}
                  alt="Vincent Oluwadamilare Akinyoyenu"
                />
                <p className="mb-0 small">
                  Vincent Oluwadamilare Akinyoyenu
                  <br />
                  Celsiusstraße 4, 12207 Berlin
                </p>
              </div>
              <div className="col-6 col-md-3">
                <p className="mb-0 small">
                  Phone
                  <br />
                  +491786688559
                  <br />
                  +4915219319686
                </p>
              </div>
              <div className="col-6 col-md-3">
                <p className="mb-0 small">
                  Email
                  <br />
                  vindamilare@gmail.com
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p className="mb-2 small">
                  {language === "de" ? "Folge mir" : "Follow Me"}
                </p>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oluwadamilare-vincent-akinyoyenu"><TbBrandLinkedin className="me-3 cursor" size={33} /></a>
                <TbBrandInstagram className="me-3 d-none cursor" size={33} />
                <TbBrandTwitter className="cursor d-none" size={33} />
              </div>
            </div>
          </div>
          <hr className="bg-blue" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
