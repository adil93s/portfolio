import React from "react";
import Typist from "react-typist";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
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
        <div className="intro-subtitle">Je cree des choses parfois.</div>
        <div className="intro-desc">
          Je suis à la recherche d'un stage ou d'une alternance en informatique.
          Depuis petit, je porte un grand interet à l'informatique, un domaine
          où l'on peut mettre en pratique le travail d'équipe, la cohésion mais
          également l'autonomie.
        </div>
        <a href="mailto:chetouani.adil93@gmail.com" className="intro-contact">
          <EmailRoundedIcon></EmailRoundedIcon>
          {"  " + "Contactez-moi"}
        </a>
      </div>
    );
  }
}

export default Intro;
