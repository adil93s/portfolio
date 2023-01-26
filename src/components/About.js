import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        Je suis étudiant en <b>2ème de BUT informatique</b> spécialisé en
        réalisation d'applications à l'
        <a href="https://www.iut.univ-paris8.fr//">IUT de Montreuil</a>. En
        parallèle, je travaille dans différents projets personnels.
      </p>
    );
    const two = (
      <p>
        En dehors du travail, j'adore jouer aux jeux vidéo et lire des mangas de
        tous genres.
      </p>
    );

    const tech_stack = [
      "Java",
      "PHP",
      "React.js",
      "Python",
      "Node.js",
      "HTML & CSS",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Voici quelques technologies auquel j'ai pu travailler avec :"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
