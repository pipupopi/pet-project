export interface FILMS_INTERFACE {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ARRAY_FILMS {
  films: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export interface CARD_FILM {
  vote: number;
  title: string;
  key: number;
  src: string | undefined;
}

export interface FILTER_INTERFACE {
  selectValue: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  valueSelectRatting: string;
}

export interface SELECT_INTERFACE {
  selectValue: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  valueSelectRatting: string;
}

export interface RELEASE_YEAR_INTERFACE {
  selectYearValue: string,
  selectYear: React.ChangeEventHandler<HTMLSelectElement> | undefined

}

export interface FILTER_BLOCK_INTERFACE {
  currentFilms: any[];
  setCurrentFilms: (arg0: any[]) => void;
}

export interface GENRES_INTERFACE {
  valueCheckBox: boolean
}

export interface PAGINATION_INTERFACE {
  currentFilms: any[];
}