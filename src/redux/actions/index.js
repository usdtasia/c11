export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const setTelega = (telega) => ({
  type: "SET_TELEGA",
  payload: telega,
});

export const setWallet = (wallet) => ({
  type: "SET_WALLET",
  payload: wallet,
});

export const addHighlight = () => ({
  type: "ADD_HIGHLIGHT",
});

export const removeHighlight = () => ({
  type: "REMOVE_HIGHLIGHT",
});

export const addLogin = (login) => ({
  type: "ADD_LOGIN",
  payload: login,
});

export const removeLogin = () => ({
  type: "REMOVE_LOGIN",
});

export const setCurrencies = (currencies) => ({
  type: "SET_CURRENCIES",
  payload: currencies,
});

export const setRates = (rates) => ({
  type: "SET_RATES",
  payload: rates,
});

export const currCrypto_rates = (cryptoName) => ({
  type: "CURR_CRYPTO_RATES",
  payload: cryptoName,
});

export const setSendCurrency = (cryptoName) => ({
  type: "SET_SEND_CURRENCY",
  payload: cryptoName,
});

export const setGetCurrency = (cryptoName) => ({
  type: "SET_GET_CURRENCY",
  payload: cryptoName,
});

export const setSendNum = (num) => ({
  type: "SET_SEND_NUM",
  payload: num,
});

export const swapSendGet = () => ({
  type: "SWAP_SEND_GET",
});

export const setCurrencyImages = (images) => ({
  type: "SET_CURRENCY_IMAGES",
  payload: images,
});
