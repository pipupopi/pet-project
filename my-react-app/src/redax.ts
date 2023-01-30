import { combineReducers, createStore } from "redux";
import { localFavoritesFilm, localSavedFilm, localDetailsFilm } from "./const";

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

const isLogin = (state: any = false, action: any) => {
  switch (action.type) {
    case "IS_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

const savedMovie = (state = localSavedFilm || [], action: any) => {
  switch (action.type) {
    case "SAVED_MOVIE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const likedMovie = (state = localFavoritesFilm || [], action: any) => {
  switch (action.type) {
    case "LIKED_MOVIE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const detailsMovie = (state = localDetailsFilm || [], action: any) => {
  switch (action.type) {
    case "DETAILS_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

const reduser = combineReducers({
  pages: reduserPages,
  isLogin,
  savedMovie,
  likedMovie,
  detailsMovie,
});

export const storePages = createStore(reduser);
