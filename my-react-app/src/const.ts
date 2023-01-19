import { LIST_FILMS } from "./listFilms";

export const GENRES_LIST = [
  {
    id: 28,
    name: "боевик",
  },
  {
    id: 12,
    name: "приключения",
  },
  {
    id: 16,
    name: "мультфильм",
  },
  {
    id: 35,
    name: "комедия",
  },
  {
    id: 80,
    name: "криминал",
  },
  {
    id: 99,
    name: "документальный",
  },
  {
    id: 18,
    name: "драма",
  },
  {
    id: 10751,
    name: "семейный",
  },
  {
    id: 14,
    name: "фэнтези",
  },
  {
    id: 36,
    name: "история",
  },
  {
    id: 27,
    name: "ужасы",
  },
  {
    id: 10402,
    name: "музыка",
  },
  {
    id: 9648,
    name: "детектив",
  },
  {
    id: 10749,
    name: "мелодрама",
  },
  {
    id: 878,
    name: "фантастика",
  },
  {
    id: 10770,
    name: "телевизионный фильм",
  },
  {
    id: 53,
    name: "триллер",
  },
  {
    id: 10752,
    name: "военный",
  },
  {
    id: 37,
    name: "вестерн",
  },
];

export const YEAR_LIST = [
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
  1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022, 2023,
];

export const FILTER_LIST = ["Популярность", "Рейтинг"];

export const MAX_FILM_PAGE = 6
export const LAST_PAGE = Math.ceil(LIST_FILMS.length / MAX_FILM_PAGE);
export const FIRST_PAGE = 1
export const PAGINATION_VALUE = 1

