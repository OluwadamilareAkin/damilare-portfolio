import React, { useState } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const ImageSlider = ({ imageArr, count, title, id, language }) => {
  const CollectionSize = count;
  const [index, setActiveStep] = useState(0);

  // if(imageArr.dispalyimage.fields.file.url){
  //   const image
  // }

  const goToNextPicture = () => {
    if (index < CollectionSize - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const goToPrevPicture = () => {
    if (index > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <>
      <div className="bg-white py-4">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between px-3 mb-4">
            <div>
              <h4 className="fw-bold">
                {language === "de" ? "Projekte" : "Projects"}
              </h4>
            </div>
            <div>
              <TbArrowNarrowLeft
                onClick={goToPrevPicture}
                className="arrows cursor me-3"
              />
              <TbArrowNarrowRight
                onClick={goToNextPicture}
                className="arrows cursor"
              />
            </div>
          </div>
        </div>
        <div className="carouselImages position-relative">
          <div className="hover-hidden">
            <div>
              <h3>{title[index]}</h3>
              <Link className="linky" to={`/project/${id[index]}`}>
                View Project
              </Link>
            </div>
          </div>
          <img
            className="w-100"
            src={`https://${imageArr[index].dispalyimage.fields.file.url}`}
            alt="portfolio"
          />
        </div>
        <p className="mt-4 text-center fw-bold text-md opaq">
          {index + 1}/{CollectionSize}
        </p>
      </div>
    </>
  );
};

export default ImageSlider;
