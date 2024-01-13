import React from "react";
import { useForm } from "react-hook-form";
import api from "../Api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // POST isteği
      const response = await api.post(api.signupEndpoint, data);

      // Başarılı yanıtı işleyin
      console.log("Response:", response.data);
    } catch (error) {
      // Hata durumunu işleyin
      console.error("Error:", error.message);
    }
  };

  return (
    <div className=" flex items-center justify-center h-[800px] ">
      <div className="bg-gray-200 w-[400px] shadow-lg p-8 rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-200 to-blue-300 max-w-md mx-auto mt-8"
        >
          {/* Name */}
          <div className=" bg-200 to-blue-300 mb-4">
            <label
              htmlFor="name"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              placeholder="Your Name"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Your Email"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              placeholder="Password"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Store Name */}
          <div className="mb-4">
            <label
              htmlFor="storeName"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              {...register("storeName", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              })}
              placeholder="Store Name"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.storeName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.storeName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\+90[0-9]{10}$/,
                  message: "Invalid Turkish phone number, +90 XXX XXX XX XX",
                },
              })}
              placeholder="Your Phone"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Tax ID */}
          <div className="mb-4">
            <label
              htmlFor="taxId"
              className="block text-xl font-medium bg-blue-200 rounded-lg text-gray-600"
            >
              Tax ID
            </label>
            <input
              type="text"
              id="taxId"
              {...register("taxId", {
                required: "Tax ID is required",
                minLength: {
                  value: 11,
                  message: "Tax ID must be at least 11 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Tax ID must be at most 12 characters",
                },
              })}
              placeholder="Your Tax ID"
              className="mt-1 p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm w-full"
            />
            {errors.taxId && (
              <p className="mt-1 text-xs text-red-500">
                {errors.taxId.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
