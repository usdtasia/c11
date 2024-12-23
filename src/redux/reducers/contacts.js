const initialState = {
  name: "",
  telega: "",
  email: "",
  wallet: "",
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_TELEGA":
      return {
        ...state,
        telega: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_WALLET":
      return {
        ...state,
        wallet: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
