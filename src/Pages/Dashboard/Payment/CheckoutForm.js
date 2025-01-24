import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { price, email, patient, _id } = booking;

  const stripe = useStripe();
  const elements = useElements();

  // Fetch clientSecret for PaymentIntent when the component mounts
  useEffect(() => {
    fetch("https://doctors-portal-server-six-theta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken-portal")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((err) => console.error("Error fetching clientSecret:", err));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure Stripe and Elements are ready
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setCardError("Please enter your card details.");
      return;
    }

    // Clear previous errors and success messages
    setCardError("");
    setSuccess("");
    setProcessing(true);

    // Create a PaymentMethod
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: patient,
        email: email,
      },
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    }

    // Confirm the PaymentIntent
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      // Save payment info to the database
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };

      fetch("https://doctors-portal-server-six-theta.vercel.app/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken-portal")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congrats! Your payment was successful.");
            setTransactionId(paymentIntent.id);
          }
        })
        .catch((err) => console.error("Error saving payment:", err));
    }

    setProcessing(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? "Processing..." : "Pay"}
        </button>
      </form>

      {/* Error and Success Messages */}
      {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
      {success && (
        <div className="mt-4">
          <p className="text-green-500">{success}</p>
          <p>
            Your transaction ID: <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
