import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Ashiqur Russel",
      review: "",
      location: "Berlin",
      img: people1,
    },
    {
      _id: 2,
      name: "Biplob Bipu",
      review: "",
      location: "Chemnitz",
      img: people2,
    },
    {
      _id: 3,
      name: "Saad Abdullah",
      review: "",
      location: "Nürnberg",
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div className="">
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4´3xl">What Our Patients Says</h2>
        </div>
        <figure>
          {" "}
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Testimonial key={review._id} review={review}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
