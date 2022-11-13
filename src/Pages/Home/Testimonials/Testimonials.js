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
      review:
        "The best dental care I have ever experienced! Professional, courteous, and friendly staff made me feel like family… would highly recommend to anyone!!!",
      location: "Berlin",
      img: people1,
    },
    {
      _id: 2,
      name: "Biplob Bipu",
      review:
        "I wish I had switched to them sooner. Great attention and service. You know you are in good hands when you learn things about your bone structure that you had no clue about. Keen eye on detail!",
      location: "Chemnitz",
      img: people2,
    },
    {
      _id: 3,
      name: "Saad Abdullah",
      review:
        " Always have a great, smooth experience here. The staff and (DN) are friendly, respectful, caring and courteous of your time. The office is run very smoothly and efficiently. Definitely recommend.",
      location: "Nürnberg",
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div className="">
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
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
