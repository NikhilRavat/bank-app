import React from "react";

function Input({ id, label, type, register }) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" {...register} />
    </>
  );
}

export default Input;
