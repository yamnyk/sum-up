import types from "./types";

const initialState = null;

const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return action.payload;
    case types.ERROR_USER:
      return action.payload;
    case types.LOGOUT_USER:
      return null;
    default:
      return currentState
  }
};

export default userReducer;
