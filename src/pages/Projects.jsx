import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Footer, Navbar } from "../components/index";

const Projects = ({ language, setLanguage }) => {
  const { id } = useParams();

  const [portfolio, setPortfolio] = useState([]);

  const client = createClient({
    space: "jo2fczow80gl",
    accessToken: "mg_6N-Aic7XDYQH0n-CAlB9qkm8E8Udr0wnIYmdMd8M",
  });

  //getting all portfolio
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setPortfolio(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getPortfolio();
  }, [id, client]);

  return (
    <>
      <Navbar id={id} language={language} setLanguage={setLanguage} />

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="px-3">
              <p>{portfolio?.fields?.title}</p>
              <p>Role: {portfolio?.fields?.role}</p>
              <p>Context: {portfolio?.fields?.context}</p>
              <p>Duration: {portfolio?.fields?.duration}</p>
              <img
                key={portfolio?.sys?.id}
                src={portfolio?.fields?.displayImage?.fields?.file?.url}
                className="w-100 mt-3 mb-4"
                alt={portfolio?.fields?.title}
              />
              {documentToReactComponents(portfolio?.fields?.body)}
            </div>
          </div>
        </div>
      </div>
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Projects;
