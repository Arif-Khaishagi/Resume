import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/A1.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/webpage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="A_Slack_Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as we can see live peoples and who created group and who are sending messages."
              link="https://github.com/Arif-Khaishagi/Slack-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Foodie"
              description="A food ordering website with Modal in it and with features. With inbuild database and React Fragment libraries."
              link="https://github.com/Arif-Khaishagi/Food-web-app-REACT-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blogs"
              description="An online blog reader created by HTML, CSS and javascript bootstrap Application which fetches the data from google and login yourself with google."
              link="https://github.com/Arif-Khaishagi/blog-page"
              live="https://blog-page-daf35.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Pages"
              description="Some webpages build by HTML AND CSS , currently I'm working on trying new WebApps"
              link="https://github.com/Arif-Khaishagi/Fitness-Webpage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
