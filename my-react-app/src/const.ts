
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

export const YEAR_LIST = [2017, 2018, 2019, 2020];

export const FILTER_LIST = [
  "Популярные по убыванию",
  "Популярные по возрастанию",
  "Рейтинг по убыванию",
  "Рейтинг по возрастанию",
];

export const POPULAR_DESCENDING = "Популярные по убыванию";
export const POPULAR_ASCENDING = "Популярные по возрастанию";
export const DESCENDING_RANKING = "Рейтинг по убыванию";
export const RATING_ASCENDING = "Рейтинг по возрастанию";

export const YEAES = {
  2017: "2017",
  2018: "2018",
  2019: "2019",
  2020: "2020",
};

export const MAX_FILM_PAGE = 6;
export const FIRST_PAGE = 1;
export const PAGINATION_VALUE = 1;
export const DEFAULT_PASSWORD = '123'
export const DEFAULT_LOGIN = '123'

export const SAVED_MOVIE = "SAVED_MOVIE";
export const LIKED_MOVIE = "LIKED_MOVIE";
export const DETAILS_MOVIE = 'DETAILS_MOVIE'

export const LOGIN_SELECT = {
  SAVED: 'Смотреть позже', 
  FAVORITES: 'Избранные',
  ALL_FILMS: 'Весь список'
}

export const localSavedFilm = JSON.parse(localStorage.getItem('savedFilm') as any)
export const localFavoritesFilm = JSON.parse(localStorage.getItem('favoritesFilm') as any)
export const localDetailsFilm = JSON.parse(localStorage.getItem('detailsFilm') as any)
