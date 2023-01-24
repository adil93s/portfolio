import React from "react";
import "../styles/Intro.css";
import FractalTree from "./FactralTree";

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
        <FractalTree></FractalTree>
        <div className="intro-subtitle">Je crée des choses parfois.</div>
        <div className="intro-desc">
          Je suis un developpeur web qui étudie à l'IUT de Montreuil. Je porte
          un grand intérêt à l'informatique, un domaine où l'on peut mettre en
          pratique le travail d'équipe, la cohésion mais également l'autonomie.
        </div>
      </div>
    );
  }
}

export default Intro;
