import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";

import Contact from "./Contact/Contact";

import Hotel from "./Hotel/Hotel";

import Tour from "./Tour/Tour";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>

      <Tour></Tour>
      <Hotel></Hotel>
      <Contact></Contact>
      <About></About>
    </div>
  );
};

export default Home;
