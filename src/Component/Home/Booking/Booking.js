import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Booking.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
const Booking = () => {
  const { id } = useParams();
  const [singlePlace, setSinglePlace] = useState({});
  console.log(singlePlace);
  const { img, name, discription, price, days, start } = singlePlace;
  useEffect(() => {
    const uri = `https://fierce-everglades-90297.herokuapp.com/place/singlePlace/${id}`;
    console.log(uri);
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setSinglePlace(data));
  }, []);

  return (
    <div className="container py-5 mx-auto">
      <div>
        <h2 className="text-center">{name} Tour Details</h2>
        <div className="details mx-auto border">
          <div className="p-1 text-center">
            <img className="img-fluid" src={img} alt="" />

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="price">${price}</span>{" "}
                <span className="days"> {days}days</span>
              </div>
              <div>
                <span className="me-2">Ratting: </span>
                <Rating
                  className="icon"
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  initialRating={start}
                  readonly
                />
              </div>
            </div>

            <p>{discription}</p>

            <Link to={"/hotel/rom/book"}>
              <button className="btn btn-primary  mb-3">Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
