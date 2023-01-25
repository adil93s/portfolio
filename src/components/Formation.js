import React from "react";
import List from "./List";
import "../styles/Formation.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ training</span>
          </div>
          <List></List>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
