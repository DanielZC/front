import { createContext, useReducer, useState } from "react";
import { hotelReducer, initialState } from "../reducer/HotelReducer";
import {
  destroy,
  get,
  list,
  store,
  update,
} from "../api/services/habitacion.services";
import { habitacionReducer } from "../reducer/HabitacionReducer";

export const HabitacionContext = createContext({});
export const HabitacionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitacionReducer, initialState);
  const { action, habitacion, id } = state;

  const handleList = async (id) => {
    const response = await list(id);
    return response;
  };

  const handleGet = async (id) => {
    const response = await get(id);
    return response;
  };

  const handleSelect = async (habitacion) => {
    dispatch({ type: "SET", payload: habitacion });
  };

  const handleSelectId = async (id) => {
    dispatch({ type: "SET_ID", payload: id });
  };

  const handleStore = async (data) => {
    const response = await store(data);
    if (response.status == 201) dispatch({ type: "ACTION" });
    return response;
  };

  const handleUpdate = async (data, id) => {
    const response = await update(data, id);
    if (response.status == 200) {
      dispatch({ type: "SET", payload: null });
      dispatch({ type: "ACTION" });
    }
    return response;
  };

  const handleDelete = async (id) => {
    const response = await destroy(id);
    if (response.status == 200) dispatch({ type: "ACTION" });
    return response;
  };

  return (
    <HabitacionContext.Provider
      value={{
        id,
        habitacion,
        action,
        handleGet,
        handleList,
        handleSelectId,
        handleSelect,
        handleStore,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </HabitacionContext.Provider>
  );
};
