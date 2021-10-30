import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import "./Tour.css";

const Tour = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div id="tour" className="tour">
      <div className="container">
        <h1 className="p-5">AWESOME TOURS</h1>
        <Row xs={1} md={3} className="g-4">
          {places.map((place) => (
            <Col key={place._id}>
              <Card>
                <div className="image">
                  <div className="zoom-in">
                    <figure>
                      <img src={place.img} alt="" />
                    </figure>
                  </div>
                </div>

                <Card.Title className="city-name">{place.name}</Card.Title>
                <div className="d-flex container justify-content-between">
                  <div className="p-2   like   rounded">
                    <i className="far fa-thumbs-up"></i>
                    <span>{place.like}</span>
                  </div>
                  <div className="p-2   like   rounded">
                    <i className="far fa-comment"></i>
                    <span>{place.comment}</span>
                  </div>
                </div>
                <hr className="w-75  mx-auto" />
                <Card.Body className="text-center">
                  <span className="price">$ {place.price}</span>

                  <span className="days">{place.days} days</span>
                  <p>{place.discription}</p>
                  <Button variant="primary">Bookimg</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Tour;
