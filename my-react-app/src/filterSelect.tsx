
import {
  POPULAR_ASCENDING,
  DESCENDING_RANKING,
  RATING_ASCENDING,
} from "./const";

import { FILMS_INTERFACE, FILTER_INTERFACE, ARRAY_FILMS } from "./interface";

export function getYear(date: string) {
  return date.slice(0, 4);
}

function sortRating(type: string, array: Array<any>) {
  switch (type) {
    case POPULAR_ASCENDING:
      return array.sort((a, b) => a.popularity - b.popularity);
    case DESCENDING_RANKING:
      return array.sort((a, b) => b.vote_average - a.vote_average);
    case RATING_ASCENDING:
      return array.sort((a, b) => a.vote_average - b.vote_average);
    default:
      return array.sort((a, b) => b.popularity - a.popularity);
  }
}

function filterYear(year: string, array: Array<any>) {
  return array.filter((item) => getYear(item.release_date) === year);
}

export { sortRating, filterYear };
