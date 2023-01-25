import React, { useState } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";

const references = [
  {
    name: "Oyebode Kunle",
    position: "Mentor at KodeCamp Institute",
    image: window.origin + "/testimonial/oyebode-kunle.JPG",
    email: "kunleseun35@gmail.com",
    remark:
      "Vincent was a pleasure to work with, always open to feedback and willing to make revisions until I was completely satisfied with the final product.",
  },
  {
    name: "Kingsley Reuben",
    position:
      "CEO Blek-scon construction colony Limited, Port Harcourt Nigeria.",
    image: window.origin + "/testimonial/kingsley-reuben.JPG",
    email: "bleksconcolony@gmail.com",
    remark:
      "Vincent was able to take our vague ideas and turn them into a visually stunning design that exceeded our expectations. The end result is a product that is not only aesthetically pleasing but also highly functional and user-friendly.",
  },
  {
    name: "Iyaomolere Mayokun",
    position: "Chief plogga, Plogging Nigeria Club",
    image: window.origin + "/testimonial/iyaomolere-mayokun.JPG",
    email: "info@ploggingnieria.org",
    remark:
      "The design of our website has been a huge success, and we've received numerous compliments on the look and feel. Vincent, a member of the website design team, and our design team lead truly took the time to understand our brand and create a design that represents us perfectly.",
  },
  {
    name: "Coconet Innovation",
    position: "Coconet Innovation Team",
    image: window.origin + "/testimonial/coconet-innovation.JPG",
    email: "info@coconet.de",
    remark:
      "I was impressed with Vincent's ability to take our complex system and make it easy to navigate. The new design system has greatly improved efficiency for our team.",
  },
];

const Testimonial = () => {
  const CollectionSize = references.length;

  const [index, setActiveStep] = useState(0);

  const goToNext = () => {
    if (index < CollectionSize - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const goToPrev = () => {
    if (index > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };
  return (
    <>
      <div className="testimony mb-5 mt-4">
        <p className="message my-0">“{references[index].remark}”</p>
        <div className="text-end mt-4 px-4">
          <TbArrowNarrowLeft
            onClick={goToPrev}
            className="arrows cursor me-3"
          />
          <TbArrowNarrowRight onClick={goToNext} className="arrows cursor" />
        </div>
        <div className="d-flex mt-2">
          <img
            className="me-3 rounded"
            src={references[index].image}
            alt={references[index].name}
          />
          <p className="align-self-end me-lg-5">
            <span className="d-block mb-2">{references[index].name}</span>
            <span className="opaq small text-break">
              {references[index].position}
            </span>
            <a
              target="_blank"
              href={`mailto:${references[index].email}`}
              rel="noreferrer"
              className="text-primary small"
            >
              <u>{references[index].email}</u>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
