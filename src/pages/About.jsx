import React from "react";

import { Footer, Navbar } from "../components/index";

const Home = ({ language, setLanguage }) => {
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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
                        <p className="opaq">
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

              <div className="bg-blue rounded px-3 px-md-5 py-5 text-white mb-5">
                <h5 className="fw-bold text-center mb-3 lh-3">
                  {language === "de" ? "Werkzeuge" : "Tools"}
                </h5>
                <p className="opaq lh-3 px-lg-5 mb-5">
                  {language === "de"
                    ? 'Werkzeuge sind großartig, aber sind sie auch wichtig? Die Ergebnisse sind das, was die Welt sehen will. Ich habe meine Karriere als Designer mit Adobe Photoshop begonnen. Seitdem habe ich mich dazu durchgerungen, so viele Geräte wie möglich zu benutzen, ohne einem anderen Werkzeug, das meinen Arbeitsprozess möglicherweise verbessern könnte, negativ gegenüberzustehen oder es zu überhöhen. In einem der Designbücher, die ich vor einiger Zeit gelesen habe, habe ich dieses Zitat gelesen: "Der frühe Vogel fängt den Wurm". Ich lese nicht nur Blogs über ein neues Tool, ich kämpfe mich wirklich durch und mache mich mit ihm vertraut.'
                    : 'Tools are great but do they matter? The results are what the world wants to see. I began my design career using Adobe Photoshop. Since then, I have driven myself to advance whatever number of devices would be prudent without being negative or pompous of another tool that might possibly improve my work process. I saw this quote in one of the design books I read sometimes ago, "the early bird gets the worm". I do not just read blogs about a new tool, I really battle through and get familiar with it.'}
                </p>
                <div className="row g-5">
                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/figma.jpeg")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Figma</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/sketch.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Sketch</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/xd.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Adobe XD</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/adobeId.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Adobe inDesign</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/adobePs.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Adobe Photoshop</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/adobeI.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">Adobe Illustrator</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/inVision.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">inVision</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/html.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">HTML 5</p>
                  </div>

                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <img
                      src={require("../assets/images/tools/css.png")}
                      alt="Figma"
                      className="tools-img mb-2"
                    />
                    <p className="opaq">CSS</p>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <p className="px-3">
                  {language === "de" ? (
                    <>
                      Als ich im westlichen Teil Nigerias aufwuchs, war ich
                      fasziniert von den Technikern und wie sie die Probleme der
                      Menschen mit Leichtigkeit lösen können. Ich habe mir
                      geschworen, eines Tages eine Lösung zu entwickeln, die
                      mich in die Welt der Technik bringt.
                      <br />
                      <br />
                      Diese Leidenschaft entwickelte sich später zu meiner Liebe
                      für Kreativität und Kommunikation, die meine Professoren
                      in mir sahen und mir rieten, einen Kreativitätskurs zu
                      belegen. So kam ich in den Bereich Design. Nach meinem
                      Bachelor-Abschluss entwickelte ich eine Art, meine Ideen
                      mit meinen Worten gründlich zu kommunizieren und konnte
                      sie auch visuell mit meinen Designs vermitteln.
                      <br />
                      <br />
                      Obwohl ich die Kommunikation und das Design liebe, war ich
                      immer noch nicht erfüllt, also begann ich, mir mehr Wissen
                      über Design und Code (HTML und CSS) anzueignen, damit ich
                      mich nicht nur dazu befähigen konnte, sondern auch, um
                      mich aufgrund der Beschäftigungssituation in meinem Land
                      zu etablieren.
                      <br />
                      <br />
                      Heute konzentriere ich meine Energie darauf, so viel wie
                      möglich zu lernen und dabei ein gesundes Gleichgewicht
                      zwischen Design, Kommunikation und Problemlösung zu
                      halten. Die Möglichkeit, etwas zu bewirken, indem ich
                      Produkte entwerfe, die den Menschen helfen, ein besseres
                      Leben zu führen, ist erfüllend.
                      <br />
                      <br />
                      -Vincent Oluwadamilare
                      <br />
                      +491786688559
                      <br />
                      vindamilare@gmail.com
                    </>
                  ) : (
                    <>
                      Growing up in the western part of Nigeria, I was
                      fascinated by tech guys and how they are able to solve
                      people's problems with ease. I vowed to one day create a
                      solution that will put me in the technology world.
                      <br />
                      <br />
                      This passion later developed into my love for creativity
                      and communication which my professors saw in me and
                      advised that I take any creativity course. This placed my
                      feet on the design part. After my bachelor's, I developed
                      a way of communicating my ideas thoroughly with my words
                      and was also able to communicate them visually with my
                      designs.
                      <br />
                      <br />
                      While I love communication and design, I was still not
                      fulfilled, I then began to teach myself more about design
                      and code (HTML and CSS) so that I could empower myself to
                      not only do that but also establish myself because of the
                      employment situation in my country.
                      <br />
                      <br />
                      Today, I focus my energy on learning as much as possible
                      while maintaining a healthy balance between design,
                      communication and solving problems. Having the ability to
                      make a difference by designing products that help people
                      live a better life is fulfilling.
                      <br />
                      <br />
                      -Vincent Oluwadamilare
                      <br />
                      +491786688559
                      <br />
                      vindamilare@gmail.com
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
