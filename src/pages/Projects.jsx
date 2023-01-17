import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Footer, Navbar } from "../components/index";

const Projects = ({ portfolio, language, setLanguage }) => {
  const [lPortfolio, setLPortfolio] = useState([]);

  const { id } = useParams();

  //getting all portfolio
  useEffect(() => {
    const client = createClient({
      space: "jo2fczow80gl",
      accessToken: "mg_6N-Aic7XDYQH0n-CAlB9qkm8E8Udr0wnIYmdMd8M",
    });

    const getPortfolio = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setLPortfolio(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getPortfolio();
  }, [id]);

  return (
    <>
      {lPortfolio && (
        <>
          <Navbar
            id={id}
            portfolio={portfolio}
            language={language}
            setLanguage={setLanguage}
          />

          <div className="container my-5">
            <div className="row">
              <div className="col-12">
                <div className="px-3">
                  <p>{lPortfolio?.fields?.title}</p>
                  <p>Role: {lPortfolio?.fields?.role}</p>
                  <p>Context: {lPortfolio?.fields?.context}</p>
                  <p>Duration: {lPortfolio?.fields?.duration}</p>
                  <img
                    key={lPortfolio?.sys?.id}
                    src={lPortfolio?.fields?.displayImage?.fields?.file?.url}
                    className="w-100 mt-3 mb-4"
                    alt={lPortfolio?.fields?.title}
                  />
                  {documentToReactComponents(lPortfolio?.fields?.body)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Projects;