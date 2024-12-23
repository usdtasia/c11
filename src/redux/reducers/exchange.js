const initialState = {
  currencies: [],
  rates: [],
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCIES":
      return { ...state, currencies: action.payload };
    case "SET_RATES":
      return { ...state, rates: action.payload };
    default:
      return state;
  }
};

export default exchangeReducer;
