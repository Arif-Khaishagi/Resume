import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCode,
  DiCss3,
  DiJavascript,
  DiHtml5
  // DiPython,
  // DiGit,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si"; //SiPytorch and SiTensorflow replaced inside curly brackets

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
