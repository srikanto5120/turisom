import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";

const BookingInformation = () => {
  const [id, setId] = useState();
  const [userInformation, setUserInformation] = useState([]);

  console.log(id);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    fetch("http://localhost:5000/booking-information", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setId(data));
    e.target.reset();
  };

  useEffect(() => {
    fetch("http://localhost:5000/booking-information")
      .then((res) => res.json())
      .then((data) => setUserInformation(data));
  }, [id]);

  return (
    <div className="   bg-secondary py-5 ">
      <h1 className="text-center py-5">Submit This From</h1>
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex  mx-auto ">
          <div className="w-100 ps-5 ms-2">
            <label htmlFor="">Name:</label>
            <br />
            <input
              className="w-75 py-2  "
              {...register("firstName", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <br />
            <label htmlFor="date">Check in:</label>
            <br />
            <input
              className=" w-75 py-2    "
              type="date"
              {...register("date")}
            />
            <br />
            <label htmlFor="date">Check Out: </label>
            <br />
            <input
              className=" w-75   p-2   "
              type="date"
              {...register("date2")}
            />
            <br />
            <label htmlFor="">Adult:</label>
            <br />
            <select className=" w-75 py-2   " {...register("adult")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <br />
            <label htmlFor="">Child</label>
            <br />
            <select className="w-75   py-2" {...register("child")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <br />

            <br />
          </div>
          <div className="w-100">
            <label htmlFor="">Email:</label>
            <br />
            <input
              className="w-75   py-2"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
            <br />
            <label htmlFor="">Phone Number:</label>
            <br />
            <input
              className="w-75    py-2"
              type="number"
              {...register("phone")}
              placeholder="Phone Number"
            />
            <br />
            <label htmlFor="">Address:</label>
            <br />
            <input
              className="w-75   py-2"
              {...register("address")}
              placeholder="Address"
            />
            <br />
            <label htmlFor="">Write something :</label>
            <br />
            <textarea
              className="w-75 h-25    py-2"
              {...register("discription")}
              placeholder="Write something"
            />
            <br />
          </div>
        </div>
        <button className="submit-btn px-5 ms-5 mt-5  btn btn-primary">
          Place Order
        </button>
      </form>

      <div className="bg-light w-25 mx-auto p-3 border rounded rounded-5">
        <h2 className="text-center">Your Order Details </h2>
        {userInformation.map((information) => (
          <ul>
            <li>{information.firstName}</li>
            <li>Email:{information.email}</li>
            <li>Phone:{information.phone}</li>
            <li>Adult Person:{information.adult}</li>
            <li>Child Person:{information.child}</li>
            <li>
              Your Package date:{information.date}-{information.date2}
            </li>
            <li>
              <p> Your Feedback:{information.discription}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default BookingInformation;
