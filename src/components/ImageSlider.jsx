import React, { useState, useEffect } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const ImageSlider = ({ image, language }) => {
    const SliderProperty = {
      ImageSrc: ""
    };

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageSrc } = sliderProperty;

    const [count, setCount] = useState(0);

    const [animationCls, setAnimationCls] = useState("displayBlock fade");

    const PreClick = () => {
      setAnimationCls(() => "displayNone fade");
      setTimeout(() => {
        setAnimationCls("displayBlock fade");
      }, 100);

      if (count > 0) {
        setCount((preCount) => preCount - 1);
      }

      if (count === 0) {
        setCount(image.length - 1);
      }
    };

    const NextClick = () => {
      setAnimationCls(() => "displayNone fade");
      setTimeout(() => {
        setAnimationCls("displayBlock fade");
      }, 100);

      if (count <= image.length - 2) {
        setCount((preCount) => preCount + 1);
      }

      if (count === image.length - 1) {
        setCount(0);
      }
    };

    useEffect(() => {
      setSliderProperty((previous) => ({
        ...previous,
        ImageSrc: image[count].ImageSrc,
      }));
    }, [count,image]);

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
                <TbArrowNarrowLeft onClick={PreClick} className="arrows cursor me-3" />
                <TbArrowNarrowRight onClick={NextClick} className="arrows cursor" />
              </div>
            </div>
          </div>
          <div className={`carouselImages ${animationCls}`}>
            <img src={`https://${ImageSrc}`} alt="portfolio" />
          </div>
          <div className="dots text-center mt-4 mb-3">
            <div className="active"></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
};

export default ImageSlider;
