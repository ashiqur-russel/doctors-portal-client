import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { price, treatment, appointmentDate, slot } = booking;
  return (
    <div>
      {" "}
      <h3 className="text-2xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong className="text-2xl">{price} €</strong> for your
        appointment in{" "}
        <span className="bg-yellow-200 p-1">{appointmentDate} </span> at{" "}
        <span className="bg-yellow-200 p-1">{slot}</span>
      </p>
      <div className="mt-4 p-4 w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
