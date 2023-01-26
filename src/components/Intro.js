import React from "react";
import Typist from "react-typist";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import "../styles/Intro.css";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"adil"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection delay={`200ms`}>
          <div className="intro-subtitle">Web Developer.</div>
        </FadeInSection>
        <FadeInSection delay={`400ms`}>
          <div className="intro-desc">
            Je suis un étudiant en informatique spécialisé dans la réalisation
            d'applications. Je suis à la recherche d'un stage ou d'une
            alternance.
          </div>
        </FadeInSection>
        <FadeInSection delay={`600ms`}>
          <a href="mailto:chetouani.adil93@gmail.com" className="intro-contact">
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Contactez-moi"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
