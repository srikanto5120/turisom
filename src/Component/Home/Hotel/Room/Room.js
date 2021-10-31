import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://fierce-everglades-90297.herokuapp.com/room")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div>
      {rooms.map((room) => (
        <div className="d-flex p-3 w-75 mx-auto align-items-center border my-5">
          <div className="">
            <h2>{room.name}</h2>
            <img src={room.img} alt="" />
          </div>
          <div className="w-50 ms-5">
            <span className="price">${room.price}</span> <span>per night</span>
            <p>{room.discription}</p>
            <Link to={"/hotel/rom/book"}>
              {" "}
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
