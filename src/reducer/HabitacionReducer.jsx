export const initialState = {
  id: null,
  habitacion: null,
  action: 0,
};

export const habitacionReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, habitacion: action.payload };
    case "ACTION":
      return { ...state, action: state.action + 1 };
    case "SET_ID":
      return { ...state, id: action.payload };
    default:
      return initialState;
  }
};
