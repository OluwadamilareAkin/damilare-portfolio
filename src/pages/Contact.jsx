import React from "react";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbMail,
  TbPhone,
  TbSend,
} from "react-icons/tb";
import { Footer, Navbar } from "../components/index";

const Contact = ({ portfolio, language, setLanguage }) => {
  return (
    <>
      <Navbar
        portfolio={portfolio}
        language={language}
        setLanguage={setLanguage}
      />

      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-12 col-md-5 mb-5">
            <div className="px-3">
              {language === "de" ? (
                <>
                  <h4 className="fw-bold lh-4">
                    Brauchen Sie mich als Teil Ihres Team?
                  </h4>
                  <p className="opaq lh-3 mb-4">
                    Schicken Sie einfach eine Nachricht. Sie können mich gerne
                    kontaktieren. Ich antworte innerhalb von 24 Stunden.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="fw-bold lh-4">
                    Do you need me to be part of your team?
                  </h4>
                  <p className="opaq lh-3 mb-4">
                    Just send a message. Feel free to contact me. I reply within
                    24 hours.
                  </p>
                </>
              )}

              <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                  <div className="bordered py-2 px-2 text-blue">
                    <TbPhone size={35} />
                  </div>
                </div>
                <div>
                  <p className="mb-1 opaq text-uppercase small">
                    {language === "de" ? "Rufen Sie mich an" : "Call me"}
                  </p>
                  <p className="mb-0 text-md">+491786688559</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                  <div className="bordered py-2 px-2 text-blue">
                    <TbMail size={35} />
                  </div>
                </div>
                <div>
                  <p className="mb-1 opaq text-uppercase small">
                    {language === "de" ? "Chatten Sie mit mir" : "Chat with me"}
                  </p>
                  <p className="mb-0 text-md">vindamilare@gmail.com</p>
                </div>
              </div>

              <div className="bordered px-4 py-4 text-blue">
                <p className="mb-3">
                  {language === "de" ? "Folge mir" : "Follow Me"}
                </p>
                <a target="_blank" href="https://www.linkedin.com/in/oluwadamilare-vincent-akinyoyenu"><TbBrandLinkedin className="me-3 cursor" size={33} /></a>
                <TbBrandInstagram className="me-3 cursor d-none" size={33} />
                <TbBrandTwitter className="cursor d-none" size={33} />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7 mb-5">
            <div className="px-3">
              <form
                action="https://formsubmit.io/send/vindamilare@gmail.com"
                method="POST"
                target="_blank"
              >
                <input
                  name="_formsubmit_id"
                  type="text"
                  style={{ display: "none" }}
                />
                <div className="form-group mb-4">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control py-3 px-4 my-2"
                    name="Name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label>
                    {language === "de" ? "E-Mail Adresse" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    className="form-control py-3 px-4 my-2"
                    name="EmailAddress"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label>{language === "de" ? "Thema" : "Subject"}</label>
                  <input
                    type="text"
                    className="form-control py-3 px-4 my-2"
                    name="Subject"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label>{language === "de" ? "Nachricht" : "Message"}</label>
                  <textarea
                    className="form-control py-3 px-4 my-2"
                    name="Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="form-group mb-4">
                  <button type="submit" className="btn my-btn py-2 px-4">
                    {language === "de" ? "Nachricht Senden" : "Send Message"}{" "}
                    <TbSend className="ms-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Contact;
