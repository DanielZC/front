import { createContext, useReducer, useState } from "react";
import { hotelReducer, initialState } from "../reducer/HotelReducer";
import {
  destroy,
  get,
  list,
  store,
  update,
} from "../api/services/hotel.services";

export const HotelContext = createContext({});

export const HotelContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelReducer, initialState);
  const { action, hotel, id } = state;

  const handleList = async (data) => {
    const response = await list(data);
    return response;
  };

  const handleGet = async (id) => {
    const response = await get(id);
    return response;
  };

  const handleSelect = async (hotel) => {
    dispatch({ type: "SET", payload: hotel });
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
    <HotelContext.Provider
      value={{
        id,
        hotel,
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
    </HotelContext.Provider>
  );
};
