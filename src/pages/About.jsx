import React from "react";
import tool1 from "../assets/images/tool-1.png";
import tool2 from "../assets/images/tool-2.png";
import tool3 from "../assets/images/tool-3.png";
import tool4 from "../assets/images/tool-4.png";
import tool5 from "../assets/images/tool-5.png";
import tool6 from "../assets/images/tool-6.png";
import tool7 from "../assets/images/tool-7.png";
import tool8 from "../assets/images/tool-8.png";
import tool9 from "../assets/images/tool-9.png";
import tool10 from "../assets/images/tool-10.png";
import tool11 from "../assets/images/tool-11.png";
import tool12 from "../assets/images/tool-12.png";
import tool13 from "../assets/images/tool-13.png";
import tool14 from "../assets/images/tool-14.png";


import { Footer, Navbar } from "../components/index";

const Home = ({ portfolio, language, setLanguage }) => {
  return (
    <>
      <Navbar
        portfolio={portfolio}
        language={language}
        setLanguage={setLanguage}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="px-3">
              <h4 className="fw-bold text-center mb-3">
                {language === "de"
                  ? "Ich freue mich, Sie kennenzulernen"
                  : "I am happy to meet you"}
              </h4>
              <p className="opaq lh-3 mb-5">
                {language === "de"
                  ? "Ich bin UI/UX-Designer und lebe in Berlin, Deutschland. UX ist zentral für alles, was ich tue. Ich liebe es, an sinnvollen Projekten mit inspirierenden, kreativen Menschen zu arbeiten, die den Status quo mit dem Fokus auf User Experience in Frage stellen."
                  : "I am a UI/UX designer living in Berlin, Germany. UX is central to everything I do. I love to work on meaningful projects with inspiring, creative people that challenge the status quo with a focus on user experience."}
              </p>
              <div className="bg-blue rounded px-3 px-md-5 py-5 text-white mb-5">
                <h5 className="fw-bold text-center mb-5 lh-3">
                  {language === "de"
                    ? "Wie ich Design als Problemlösungsinstrument einsetze."
                    : "How I leverage design as a problem-solving tool"}
                </h5>
                <div className="row g-5 px-lg-5">
                  {language === "de" ? (
                    <>
                      <div className="col-12 col-md-6">
                        <p className="">
                          1. Strategie und Forschung
                          <br />
                          <br />
                          Der erste Schritt bei jedem Projekt besteht darin, den
                          Kunden besser zu verstehen. Es lohnt sich, diese
                          Arbeit zu erledigen, bevor auch nur ein einziges Pixel
                          bewegt wird, um ein stärkeres Gefühl des Vertrauens zu
                          schaffen und jedem Kunden zu zeigen, dass mir sein
                          Geschäft und sein langfristiger Erfolg am Herzen
                          liegen.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          2. UX-Design und Interaktionsdesign
                          <br />
                          <br /> Das Design eines Projekts ist ähnlich, wenn
                          auch möglicherweise nicht bedeutender als das, wie es
                          aussieht und funktioniert. Ich verwende Design
                          Thinking in jedem Projekt, um die beste
                          nutzerzentrierte Lösung zu finden. Meine Designlösung
                          konzentriert sich auf die Erfahrungen der Benutzer und
                          nicht auf mich selbst, d.h. Voreingenommenheit kommt
                          nicht in Frage.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          3. UI-Entwurf & Prototyping
                          <br />
                          <br />
                          Wunderschöne UI-Designs können je nach Benutzer
                          abstrakt sein. Ich genieße die Herausforderung,
                          generell schöne Designs zu entwerfen, die zusätzlich
                          die Miniaturkommunikation beeinflussen. Mit visuellem
                          Design und Prototyping habe ich die Möglichkeit, den
                          Stil meines Kunden zu treffen.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          4. Benutzertests und Iteration
                          <br />
                          <br />
                          Ein Produkt zu entwerfen und es in die Welt zu setzen,
                          ist außerordentlich erfüllend. Dennoch ist es
                          wesentlich befriedigender, Kritik anzunehmen und
                          Korrekturen vorzunehmen, um das Produkt an die
                          Bedürfnisse der Nutzer anzupassen. Es ist wichtig
                          herauszufinden, wie man den Fortschritt messen und
                          iterieren kann.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 col-md-6">
                        <p className="">
                          1. Strategy & Research
                          <br />
                          <br />
                          The first step in any project is to get a better
                          understanding of the client. The worth in
                          accomplishing this work prior to moving a solitary
                          pixel is to lay out a more prominent feeling of trust
                          and to show every client that I care about their
                          business and long-haul achievement.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          2. UX Design & Interaction Design
                          <br />
                          <br />
                          The design of a project is similar, while possibly not
                          more significant than what it looks like and works. I
                          use design thinking in each project to get the best
                          user-centred solution. My design solution is focused
                          on the user experiences and not myself in order words,
                          bias is out of the question.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          3. UI Design & Prototyping
                          <br />
                          <br />
                          Wonderful UI designs can be abstract depending on the
                          user, I enjoy the challenge of making generally lovely
                          designs that additionally influence miniature
                          communications. With visual design and prototyping, I
                          have an opportunity to please my client's style.
                        </p>
                      </div>

                      <div className="col-12 col-md-6">
                        <p className="">
                          4. User Testing & Iteration
                          <br />
                          <br />
                          Designing a product and putting it out into the world
                          is exceptionally fulfilling. Nonetheless, accepting
                          totalling criticism, and making corrections such that
                          it fits in view of user needs is considerably more
                          satisfying. Figuring out how to gauge progress and
                          iterate is significant.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-blue-light rounded px-3 px-md-5 py-5 text-white mb-5">
                <h5 className="fw-bold text-center mb-3 lh-3">
                  {language === "de" ? "Werkzeuge" : "Tools"}
                </h5>
                
                <div className="about-row justify-content-center p-lg-5 p-md-3 p-sm-2 p-1 ">
                  <div  className="about-image-div">
                    <img src={tool1} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool2} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool3} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool4} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool5} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool6} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool7} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool8} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool9} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool10} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool11} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool12} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool13} alt="Ux design tools icon" className="about-image"/>
                  </div>
                  <div  className="about-image-div">
                    <img src={tool14} alt="Ux design tools icon" className="about-image"/>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <p className="px-3">
                  {language === "de" ? (
                    <>
                      Ich bin im westlichen Teil Nigerias aufgewachsen und war immer fasziniert von der Fähigkeit von Technikern, komplexe Probleme mit Leichtigkeit zu lösen. Diese Faszination führte mich schließlich in den Bereich des Designs, wo ich meine wahre Leidenschaft für Kreativität und Kommunikation entdeckte.
                      <br />
                      <br />
                      Nach meinem Bachelor-Abschluss begann ich, mich darauf zu konzentrieren, meine Fähigkeiten im Bereich Design und Kommunikation auszubauen, um meine Fähigkeit zu verbessern, Ideen visuell und mit Worten zu vermitteln. Ich erkannte jedoch auch, wie wichtig technische Fähigkeiten auf dem umkämpften Arbeitsmarkt sind, und brachte mir HTML und CSS bei, um meine Beschäftigungsfähigkeit zu verbessern.
                      <br />
                      <br />
                      Heute bin ich bestrebt, ständig zu lernen und mein Wissen zu erweitern, während ich gleichzeitig ein Gleichgewicht zwischen Design, Kommunikation und Problemlösung anstrebe. Die Möglichkeit, durch die Schaffung von Produkten, die das Leben der Menschen verbessern, etwas Positives zu bewirken, motiviert mich, mich weiterzuentwickeln und an meine Grenzen zu gehen. In meiner Freizeit erforsche ich gerne neue Tools und Techniken, um meine Designfähigkeiten zu verbessern und mit den neuesten Trends in der Branche Schritt zu halten. Außerdem bin ich ein begeisterter Leser und lerne gerne über eine Vielzahl von Themen, von Psychologie bis hin zu Nachhaltigkeit.
                      <br/>
                      Zusätzlich zu meinen Designfähigkeiten habe ich Erfahrung in der Arbeit in funktionsübergreifenden Teams und in der Zusammenarbeit mit Interessengruppen, um den Erfolg eines Projekts zu gewährleisten. Ich arbeite gerne in agilen Umgebungen und passe mich an wechselnde Prioritäten an.
                      <br/>
                      Und schließlich ist es mir ein Anliegen, einen positiven Einfluss auf die Welt zu nehmen und mit meinen Fähigkeiten zu ökologischer Nachhaltigkeit und sozialer Gerechtigkeit beizutragen.
                      <br />
                      <br />
                      Wenn Sie mit mir Kontakt aufnehmen möchten, erreichen Sie mich unter +491786688559 oder per E-Mail unter vindamilare@gmail.com.
                    </>
                  ) : (
                    <>
                      Growing up in the western part of Nigeria, I was always intrigued by the ability of tech professionals to solve complex problems with ease. This fascination eventually led me towards the field of design, where I found my true passion for creativity and communication.
                      <br />
                      <br />
                      After completing my bachelor's degree, I began to focus on enhancing my skills in design and communication, seeking to improve my ability to convey ideas visually and through words. However, I also recognized the importance of technical skills in the competitive job market, and taught myself HTML and CSS to increase my employability.
                      designs.
                      <br />
                      <br />
                      Today, I am dedicated to constantly learning and expanding my knowledge, while also striving to strike a balance between design, communication, and problem-solving. The ability to make a positive impact by creating products that enhance people's lives is what motivates me to continue growing and pushing my limits. In my spare time, I enjoy exploring new tools and techniques to improve my design skills and stay up-to-date with the latest trends in the industry. I'm also an avid reader and enjoy learning about a variety of topics, from psychology to sustainability.
                      <br/>
                      In addition to my design skills, I have experience working in cross-functional teams and collaborating with stakeholders to ensure the success of a project. I'm comfortable working in agile environments and adapting to changing priorities.
                      <br/>
                      Finally, I'm committed to making a positive impact on the world and using my skills to contribute to environmental sustainability and social justice initiatives.
                      <br />
                      <br />
                      If you need to contact me, feel free to reach me at +491786688559 or via email at vindamilare@gmail.com.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Home;
