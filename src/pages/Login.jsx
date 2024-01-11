// LoginFormWithTailwind1.js
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/Actions/thunkActions";

import "tailwindcss/tailwind.css"; // Import your Tailwind CSS file

const LoginFormWithTailwind1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      // Dispatch the login thunk action
      await dispatch(login(data.email, data.password));
      // Redirect user to home page (use react-router-dom for navigation)
      // history.push('/home');
    } catch (error) {
      console.error("Login failed:", error);
      // Show error message (use toaster library)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="email"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="password"
            name="password"
            ref={register({ required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginFormWithTailwind1;
