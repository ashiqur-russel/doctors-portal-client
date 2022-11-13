import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cards></Cards>
      <Services></Services>
    </div>
  );
};

export default Home;
