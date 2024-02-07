import React, { useState } from "react";
import "./Register.css";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";

export default function Register({ input, showInput }) {
  const [submission, setSubmission] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const doneSubmission = (input) => {
    setSubmission(true);
  };

  return (
    <>
      <NavBar />
      <div className="box">
        <form
          action=""
          onSubmit={handleSubmit(doneSubmission)}
          onChange={() => setSubmission(false)}
        >
          <h1>{submission ? "registration successful 🎉" : null}</h1>

          <h2>Your name</h2>
          <input
            name="name"
            type="text"
            placeholder="Enter name ✍"
            {...register("name", {
              required: "Enter your name please ⚠️",
              maxLength: {
                value: 30,
                message: "Name must be smaller than 30 characters ⚠️",
              },
              minLength: {
                value: 3,
                message: "Name must be greater than 3 characters ⚠️",
              },
            })}
          />
          <h3>{errors.name?.message}</h3>

          <h2>Email address</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter email address ✍"
            {...register("email", {
              required: "Enter your email address please ⚠️",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email ⚠️",
              },
            })}
          />
          <h3>{errors.email?.message}</h3>

          <h2>Password</h2>
          <input
            name="password"
            type="password"
            placeholder="Enter your password ✍"
            {...register("password", {
              required: "Enter your password please ⚠️",
              minLength: {
                value: 10,
                message: "Password should have atleast 10 characters ⚠️",
              },
              pattern: {
                value: /.*[\W_].*/,
                message:
                  "Password should have at least one special character ⚠️",
              },
            })}
          />
          <h3>{errors.password?.message}</h3>

          <h2>Confirm Password</h2>
          <input
            name="confirm"
            type="password"
            placeholder="Confirm your password ✍"
            {...register("confirm", {
              required: "Confirm your password please ⚠️",
              validate: (passval) =>
                passval != getValues("password")
                  ? "Your passwords don't match ⚠️"
                  : null,
            })}
          />
          <h3>{errors.confirm?.message}</h3>
          <br />
          <button id="register" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
