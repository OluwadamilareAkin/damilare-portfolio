import React from "react";
import { Footer, Navbar } from "../components/index";

const Contact = ({ language, setLanguage }) => {
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Contact;
