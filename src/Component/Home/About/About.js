import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div id="about" className=" about m-5 ">
      <Row className=" container align-items-center">
        <Col>
          <h2>EPIC JOURNEYS</h2>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            duis aute irure dolor quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat duis aute.
          </p>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            duis aute irure dolor.
          </p>
          <blockquote>
            <li>5 Star Accommodations</li>
            <li>Inclusive Packages</li>
            <li> Latest Model Vehicles</li>
            <li>Handpicked Hotels</li>
            <li>10 Languages available</li>
          </blockquote>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src={"https://i.ibb.co/tYdXhgN/about-us-4.png"}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
