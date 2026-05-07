import React from "react";

export const CardBody = ({ children, className = "" }) => {
  return <div className={`bg-neutral-900 ${className}`}>{children}</div>;
};
