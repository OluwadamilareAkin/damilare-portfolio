// import React, { useState, useEffect } from "react";
// import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const ImageSlider = (props) => {
  //   const SliderProperty = {
  //     ImageNo: "",
  //     ImageName: "",
  //     ImageSrc: "",
  //   };

  //   const [sliderProperty, setSliderProperty] = useState(SliderProperty);

  //   const { ImageNo, ImageName, ImageSrc } = sliderProperty;

  //   const [count, setCount] = useState(0);

  //   const [animationCls, setAnimationCls] = useState("displayBlock fade");

  //   const PreClick = () => {
  //     setAnimationCls(() => "displayNone fade");
  //     const myTimeout = setTimeout(() => {
  //       setAnimationCls("displayBlock fade");
  //     }, 100);

  //     if (count > 0) {
  //       setCount((preCount) => preCount - 1);
  //     }

  //     if (count === 0) {
  //       setCount(props.ImageData.length - 1);
  //     }
  //   };

  //   const NextClick = () => {
  //     setAnimationCls(() => "displayNone fade");
  //     const myTimeout = setTimeout(() => {
  //       setAnimationCls("displayBlock fade");
  //     }, 100);

  //     if (count <= props.ImageData.length - 2) {
  //       setCount((preCount) => preCount + 1);
  //     }

  //     if (count === props.ImageData.length - 1) {
  //       setCount(0);
  //     }
  //   };

  //   useEffect(() => {
  //     setSliderProperty((previous) => ({
  //       ...previous,
  //       ImageNo: props.ImageData[count].ImageNo,
  //       ImageName: props.ImageData[count].ImageName,
  //       ImageSrc: props.ImageData[count].ImageSrc,
  //     }));
  //   }, [count]);

  //   return (
  //     <>
  //       <div className="bg-white py-4">
  //         <div className="container">
  //           <div className="d-flex align-items-center justify-content-between px-3 mb-4">
  //             <div>
  //               <h4 className="fw-bold">
  //                 {props.language === "de" ? "Projekte" : "Projects"}
  //               </h4>
  //             </div>
  //             <div>
  //               <TbArrowNarrowLeft className="arrows cursor me-3" />
  //               <TbArrowNarrowRight className="arrows cursor" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="carouselImages">
  //           <img src={ImageSrc} alt="portfolio" />
  //         </div>
  //         <div className="dots text-center mt-4 mb-3">
  //           <div className="active"></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //         </div>
  //       </div>
  //     </>
  //   );

  return <>Hello</>;
};

export default ImageSlider;