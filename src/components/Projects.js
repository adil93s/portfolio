import React from "react";
import "../styles/Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      MineSurvivor: {
        title: "MineSurvivor",
        desc: "Un jeu de survie en 2D, inspiré de Minecraft et de Terraria.",
        techStack: "JAVA (JAVAFX)",
        link: "https://github.com/adil93s/MineSurvivor",
        image: "/assets/minesurvivor.jpg",
      },
      HubEvents: {
        title: "HubEvents",
        desc: "Un site web visant à mettre en avant les associations ainsi que leurs événements.",
        techStack: "HTML/CSS, JS, PHP, MYSQL",
        link: "https://github.com/adil93s/HubEvents",
        image: "/assets/hubevents.jpg",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Projects;
