import React, {  useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile, logout } = useContext(AuthContext); 

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo) 
          .then(() => {
            saveUser(data.name, data.email); 
            logout(); 
            navigate("/login"); 
          })
          .catch((err) => console.log("Error updating profile: ", err));
      })
      .catch((err) => console.log("Error creating user: ", err));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`https://doctors-portal-server-six-theta.vercel.app/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}{" "}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Signup"
            type="submit"
          />
          <div>
            <p className="text-red-600"></p>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );

};

export default Signup;
