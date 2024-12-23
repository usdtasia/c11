const initialState = {
  currencyImages: {},
};

const currencyImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_IMAGES":
      return {
        ...state,
        currencyImages: {
          ...state.currencyImages,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default currencyImageReducer;
