import React from "react";

export const tipo_habitacion = ["Estándar", "Junior", "Suite"];
export const acomodacion = ["Sencilla", "Doble", "Triple", "Cuádruple"];

export const useHelper = () => {
  const setErrorField = (form, errors) => {
    Object.entries(errors).map(([field, [error]]) => {
      form.setError(field, {
        type: "server",
        message: error,
      });
    });
  };

  return { setErrorField, tipo_habitacion, acomodacion };
};
