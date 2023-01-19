import { createStore } from "redux";

const reduserPages = (state = 1, action: any) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return state + action.payload;
    case "PREV_PAGE":
      return state - action.payload;
    default:
      return state;
  }
};

export const storePages = createStore(reduserPages);
