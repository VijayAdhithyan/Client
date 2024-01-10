const getAllTaskReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_TASK":
      return { ...state, data: action.payload };
    case "SUBMIT_TASK":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default getAllTaskReducer;
