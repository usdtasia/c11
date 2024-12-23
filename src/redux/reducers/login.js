const initialState = {
  login: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LOGIN":
      return { ...state, login: action.payload };
    case "REMOVE_LOGIN":
      return { ...state, login: false };
    default:
      return state;
  }
};

export default loginReducer;
