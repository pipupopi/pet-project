import { format } from "date-fns";
import {
  POPULAR_ASCENDING,
  DESCENDING_RANKING,
  RATING_ASCENDING,
} from "./const";
import { GENRES_LIST } from "./const";
import { LIST_FILMS } from "./listFilms";

export function getYear(date: number | Date | string) {
  return format(new Date(date), "yyyy");
}

export function sortMovie(
  type: string,
  year: string,
  genres: number[],
  array: any
) {
  const sortedRating = sortRating(type, array);
  const sortedYear = filterYear(year, sortedRating);
  const sortedGenres = filterGenres(genres, sortedYear);
  return sortedGenres;
}

export function findMovieFilter(popularity:string, vote:string, genre:string) {
  const genres:any = GENRES_LIST.find((item) => item.name === genre);
  const sortByGenres = filterGenres([genres.id], LIST_FILMS)
  const sortByVote = filterbyVote(vote, sortByGenres)
  const sortByPopularity = filterByPopularity(popularity, sortByVote)
  return sortByPopularity
}


function sortRating(type: string, array: any) {
  switch (type) {
    case POPULAR_ASCENDING:
      return array.sort((a: any, b: any) => a.popularity - b.popularity);
    case DESCENDING_RANKING:
      return array.sort((a: any, b: any) => b.vote_average - a.vote_average);
    case RATING_ASCENDING:
      return array.sort((a: any, b: any) => a.vote_average - b.vote_average);
    default:
      return array.sort((a: any, b: any) => b.popularity - a.popularity);
  }
}

function filterYear(year: string, array: any[]) {
  return array.filter((item) => getYear(item.release_date) === year);
}

function filterGenres(genres: number[], array: any[]) {
  return array.filter((item) =>
    genres.length !== 0
      ? item.genre_ids.some((id: number) => genres.includes(id))
      : item
  );
}

function filterbyVote(vote: string, array: any[]) {
  if (vote === "Высокая оценка") {
    return array.filter((item) => item.vote_average > 5);
  } else {
    return array.filter((item) => item.vote_average < 5);
  }
}

function filterByPopularity(popularity:string, array:any[]) {
  if (popularity === "Популярный") {
    return array.filter((item) => item.popularity > 100 && item.vote_count > 200);
  } else {
    return array.filter((item) => item.popularity < 100 && item.vote_count < 200);
  }
}

export { sortRating, filterYear, filterGenres, filterbyVote, filterByPopularity };
