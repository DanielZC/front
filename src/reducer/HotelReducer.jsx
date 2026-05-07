export const initialState = {
  id: null,
  hotel: null,
  action: 0,
};

export const hotelReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, hotel: action.payload };
    case "ACTION":
      return { ...state, action: state.action + 1 };
    case "SET_ID":
      return { ...state, id: action.payload };
    default:
      return initialState;
  }
};
