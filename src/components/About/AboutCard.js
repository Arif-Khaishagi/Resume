import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arif Khaishagi </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am pursuiating B.Tech from IGEC,Sagar (M.P.). In Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fashion.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "We can be a lot of things,
            But we choose to be us..."{" "}
          </p>
          <footer className="blockquote-footer">Arif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
