import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);

  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
      price,
    };
    console.log(7 > 6 && 8 < 6 && 6 > 4);

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast

    fetch("https://doctors-portal-server-six-theta.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        toast.error("Booking Failed", err);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
