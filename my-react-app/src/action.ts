import { SAVED_MOVIE, LIKED_MOVIE, DETAILS_MOVIE } from "./const";

export function savedMovie(payload: any) {
  return {
    type: SAVED_MOVIE,
    payload,
  };
}

export function likedMovie(payload: any) {
  return {
    type: LIKED_MOVIE,
    payload,
  };
}

export function detailsMovie(payload: any) {
  return {
    type: DETAILS_MOVIE,
    payload,
  };
}


