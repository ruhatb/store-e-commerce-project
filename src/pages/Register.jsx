import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <form method="post" className="bg-blue-300 p-6 w-96 rounded-md shadow-lg">
        <h4 className="text-3xl font-bold mb-4">REGISTER</h4>
        <div className="grid grid-cols-2 gap-4 w-full">
          <FormInput
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-gray-500 rounded-md p-2 my-4 focus:outline-none focus:ring focus:border-blue-300"
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="mt-4">
          <SubmitButton text="Register" />
          <p className="mt-2 text-gray-700">
            Already a member ?{" "}
            <Link
              to="/login"
              className="ml-2 line-clamp-2 capitalize text-violet-500 text-xl"
            >
              {" "}
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
