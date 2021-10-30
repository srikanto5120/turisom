import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./Hotel.css";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div id="hotel" className="tour">
      <div className="container">
        <h1 className="my-5">RECOMMENDED HOTELS </h1>
        <Row xs={1} md={2} className="  g-4">
          {hotels.map((hotel) => (
            <Col key={hotel._id}>
              <Card className="p-1">
                <Row>
                  <Col>
                    <Card.Img
                      className="hotel-img"
                      variant="top"
                      src={hotel.img}
                    />
                    <Card.Title className="city-name">{hotel.name}</Card.Title>

                    <Rating
                      className="icon"
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      initialRating={hotel.star}
                      readonly
                    />
                  </Col>
                  <Col className="p-2">
                    <div className="d-flex container justify-content-between">
                      <div className="p-2   like   rounded">
                        <i className="far fa-thumbs-up"></i>
                        <span>{hotel.like}</span>
                      </div>

                      <div className="p-2   like   rounded">
                        <i className="far fa-comment"></i>
                        <span>{hotel.comment}</span>
                      </div>
                    </div>

                    <Card.Body className="text-center">
                      <span className="price">$ {hotel.price}</span>

                      <span className="days">
                        {hotel.days} <small>per night</small>{" "}
                      </span>
                      <p>{hotel.discription}</p>
                      <button className="btn btn-primary">Details</button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Hotel;
