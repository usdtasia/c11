const initialState = {
  highlight: false,
};

const highlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HIGHLIGHT":
      return { ...state, highlight: true };
    case "REMOVE_HIGHLIGHT":
      return { ...state, highlight: false };
    default:
      return state;
  }
};

export default highlightReducer;
