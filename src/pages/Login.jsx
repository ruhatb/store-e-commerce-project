import React from "react";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <form method="post" className="bg-blue-300 p-6 w-96 rounded-md shadow-md">
        <h4 className="text-3xl font-bold mb-4">LOGIN</h4>
        <FormInput
          type="email"
          label="email="
          name="identifier"
          value="name@mail.com"
          className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <FormInput
          type="password"
          label="password="
          name="password"
          value="secret"
          className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="mt-4">
          <SubmitButton text="Login" />
          <button
            type="button"
            className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ml-2"
          >
            Continue as a guest
          </button>
          <p className="mt-4 text-gray-900 ml-2">
            Not a member yet ?{" "}
            <Link
              to="/register"
              className="ml-2 line-clamp-2 capitalize text-violet-500 text-xl"
            >
              {" "}
              Register{" "}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
