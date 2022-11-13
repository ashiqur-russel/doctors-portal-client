import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Exceptional from "../Exceptional/Exceptional";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cards></Cards>
      <Services></Services>
      <Exceptional></Exceptional>
    </div>
  );
};

export default Home;
