import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Adddoctors = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: treatmentOptions, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:5000/appointmentSpeciality"
      );
      const data = await response.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {
    const imageHostingKey = process.env.REACT_APP_API_KEY;

    console.log(data);
    console.log(imageHostingKey);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);

          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imageData.data.url,
          };

          //save doctors information to the database

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem(
                "accessToken-portal"
              )}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Doctor Added Successfullyy");
              navigate("/dashboard/managedoctors");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-6">
        <h1>Add a New Doctor</h1>
        <div className="flex justify-center items-center p-3 bg-gray-200">
          <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                name="name"
                type="text"
                className="input input-bordered w-full max-w-xs"
              />

              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input input-bordered w-full max-w-xs"
              />

              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label
                className="text-sm font-medium text-gray-900 block mb-2"
                htmlFor="user_avatar"
              >
                Upload Photo
              </label>
              <input
                {...register("image")}
                className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                name="image"
                type="file"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}{" "}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select
                {...register("treatment", {
                  required: "Treatment is required",
                })}
                className="select select-bordered w-full max-w-xs"
              >
                {treatmentOptions?.map((treatment) => (
                  <option
                    name="treatment"
                    value={treatment?.name}
                    key={treatment._id}
                  >
                    {treatment.name}
                  </option>
                ))}
              </select>
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}{" "}
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                className="btn btn-accent w-full  mt-3"
                value="Signup"
                type="submit"
              />
            </div>

            <div>
              <p className="text-red-600"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adddoctors;
