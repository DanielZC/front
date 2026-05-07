// Button.jsx o Button.tsx
import React from "react";

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 cursor-pointer rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    light: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    dark: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const variantStyles = variants[className] || variants.light;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
