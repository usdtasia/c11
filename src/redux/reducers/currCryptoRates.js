const initialState = {
  crypto: "USDT",
};

const currCryptoRatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURR_CRYPTO_RATES":
      return { ...state, crypto: action.payload };
    default:
      return state;
  }
};

export default currCryptoRatesReducer;
