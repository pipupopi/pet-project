import {
  FILMS_INTERFACE,
  INITIAL_STATE_INTERFACE,
} from "./interface";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { LIST_FILMS } from "./listFilms";
import {
  LOCAL_GET_SAVED,
  LOCAL_GET_FAVORITE,
  LOCAL_GET_ISLOGIN,
  LOCAL_GET_DETAILS_FILM,
  FIRST_PAGE,
  DEFAULT_FILMS_SEARCH,
  LOCAL_GET_SEARCH_FILMS,
  LOCAL_GET_PAGES,
} from "./const";

const initialState: INITIAL_STATE_INTERFACE = {
  page: JSON.parse(LOCAL_GET_PAGES) || FIRST_PAGE,
  pageSearch: FIRST_PAGE,
  films: LIST_FILMS,
  genres: [],
  login: LOCAL_GET_ISLOGIN || false,
  favoriteFilms: JSON.parse(LOCAL_GET_FAVORITE) || [],
  savedFilms: JSON.parse(LOCAL_GET_SAVED) || [],
  detailsFilm: JSON.parse(LOCAL_GET_DETAILS_FILM) || [],
  searchFilms:
    JSON.parse(LOCAL_GET_SEARCH_FILMS) || DEFAULT_FILMS_SEARCH,
};

export const pageSlice = createSlice({
  name: "films pages",
  initialState,
  reducers: {
    ACTION_NEXT_PAGE: (state) => {
      state.page += 1;
    },
    ACTION_PREVIOUS_PAGE: (state) => {
      state.page -= 1;
    },
    ACTION_NEXT_PAGE_SEARCH: (state) => {
      state.pageSearch += 1;
    },
    ACTION_REMOVE_PAGE: (state) => {
      state.page = 1;
    },
  },
});

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    ACTION_ADD_CURRENT_FILMS: (state, action) => {
      state.films = action.payload;
    },
    ACTION_ADD_FAVORITE_FILM: (state, action) => {
      state.favoriteFilms.push(action.payload);
    },
    ACTION_REMOVE_FAVORITE_FILM: (state, action) => {
      state.favoriteFilms = state.favoriteFilms.filter(
        (item: FILMS_INTERFACE) => item.title !== action.payload
      );
    },
    ACTION_ADD_SAVED_FILM: (state, action) => {
      state.savedFilms.push(action.payload);
    },
    ACTION_REMOVE_SAVED_FILM: (state, action) => {
      state.savedFilms = state.savedFilms.filter(
        (item: FILMS_INTERFACE) => item.title !== action.payload
      );
    },
    ACTION_ADD_CURRENT_SEARCH_FILM: (state, action) => {
      state.searchFilms = action.payload;
    },
  },
});

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    ACTION_ADD_GENRES: (state, action) => {
      state.genres.push(action.payload);
    },
    ACTION_REMOVE_GENRES: (state, action) => {
      state.genres = state.genres.filter(
        (item) => item !== action.payload
      );
    },
    ACTION_RESET_GENRES: (state) => {
      state.genres = [];
    },
  },
});

export const detailsSlice = createSlice({
  name: "detailsFilm",
  initialState,
  reducers: {
    ACTION_ADD_DETAILS_FILM: (state, action) => {
      state.detailsFilm = action.payload;
    },
  },
});

export const isLoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    ACTION_LOGIN: (state) => {
      state.login = true;
    },
    ACTION_LOGOUT: (state) => {
      state.login = false;
    },
  },
});

export const {
  ACTION_NEXT_PAGE,
  ACTION_PREVIOUS_PAGE,
  ACTION_NEXT_PAGE_SEARCH,
  ACTION_REMOVE_PAGE,
} = pageSlice.actions;

export const {
  ACTION_ADD_CURRENT_FILMS,
  ACTION_ADD_FAVORITE_FILM,
  ACTION_REMOVE_FAVORITE_FILM,
  ACTION_ADD_SAVED_FILM,
  ACTION_REMOVE_SAVED_FILM,
  ACTION_ADD_CURRENT_SEARCH_FILM,
} = filmsSlice.actions;

export const { ACTION_LOGIN, ACTION_LOGOUT } = isLoginSlice.actions;

export const {
  ACTION_ADD_GENRES,
  ACTION_REMOVE_GENRES,
  ACTION_RESET_GENRES,
} = genresSlice.actions;

export const { ACTION_ADD_DETAILS_FILM } = detailsSlice.actions;
export const store = configureStore({
  reducer: {
    filmPages: pageSlice.reducer,
    currentFilms: filmsSlice.reducer,
    genres: genresSlice.reducer,
    isLogin: isLoginSlice.reducer,
    savedFilms: filmsSlice.reducer,
    favoriteFilms: filmsSlice.reducer,
    detailsFilm: detailsSlice.reducer,
    pageSearch: pageSlice.reducer,
    searchFilms: filmsSlice.reducer,
  },
});
