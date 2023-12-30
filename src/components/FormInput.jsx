import React from "react";

const FormInput = ({ label, name, type, value, placeholder }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="border-2 border-gray-500 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300  "
      />
    </div>
  );
};

export default FormInput;
