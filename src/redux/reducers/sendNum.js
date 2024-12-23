const initialState = {
  num: 1,
};

const sendNumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEND_NUM":
      return {
        ...state,
        num: action.payload,
      };

    default:
      return state;
  }
};

export default sendNumReducer;
