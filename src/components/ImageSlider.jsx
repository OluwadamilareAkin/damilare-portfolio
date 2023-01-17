import React, { useState } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const ImageSlider = ({ image, language }) => {
  const CollectionSize = image.length - 2;
  const [index, setActiveStep] = useState(0);

  const goToNextPicture = () => {
    if (index <= CollectionSize) {
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
        <div className="carouselImages">
          <img
            className="w-100"
            src={`https://${image[index]}`}
            alt="portfolio"
          />
        </div>
        <p className="mt-4 text-center fw-bold text-md opaq">
          {index + 1}/{CollectionSize + 2}
        </p>
        {/* <div className="dots text-center mt-4 mb-3">
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
    </>
  );
};

export default ImageSlider;
