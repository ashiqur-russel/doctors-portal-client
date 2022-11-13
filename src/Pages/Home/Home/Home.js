import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Exceptional from "../Exceptional/Exceptional";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Cards></Cards>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
