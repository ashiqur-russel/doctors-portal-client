import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section className="mt-32" style={{ background: `url(${appointment})` }}>
      <div className="p-6">
        <h4 className="text-primary text-lg font-bold text-center">
          Contact Us
        </h4>
        <h3 className="text-3xl font-bold text-center text-white">
          Stay connected with us
        </h3>
        <div className="flex justify-center">
          <form className=" flex flex-col items-center justify-center gap-4 mt-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input input-bordered input-accent w-full"
            />
            <textarea
              className="textarea textarea-accent w-full"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
