export const codeReducer = (state = false, action) => {
  switch (action.type) {
    case "PROMOCODE_APPLIED":
      return action.payload;
    default:
      return state;
  }
};
