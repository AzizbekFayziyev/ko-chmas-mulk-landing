import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type} 
      className="border border-white px-10 py-3 text-white font-mono rounded-full my-6 hover:bg-white hover:text-black transition-colors font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;
