import React, { useEffect, useState } from "react";
import { Genres } from "./Genres/Genres";
import "./FilterBlock.css";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./SelectElement/SelectFilter";
import { LogInSelect } from "../login-select/LogInSelect";
import { YEAES, POPULAR_DESCENDING } from "../../const";
import { sortMovie } from "../../filterSelect";
import { FILTER_BLOCK_INTERFACE } from "../../interface";
import { Pagination } from "./Pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { LIST_FILMS } from "../../listFilms";
import { LOGIN_SELECT } from "../../const";
import { Link } from "react-router-dom";

function FilterBlock({
  currentFilms,
  setCurrentFilms,
}: FILTER_BLOCK_INTERFACE) {
  const [selectRating, setSelectRatting] = useState(POPULAR_DESCENDING);
  const [selectYear, setSelectYear] = useState(YEAES[2020]);
  const [valueCheckBox, setValueCheckBox] = useState<boolean>();
  const localGetUser = localStorage.getItem("logIn");
  const dispatch = useDispatch();
  const genres: number[] = [];
  const isLogin = useSelector((state: any) => state.isLogin);
  const savedFilms = useSelector((state: any) => state.savedMovie);
  const likedFilms = useSelector((state: any) => state.likedMovie);
  const [selectLogIn, setSelectLogIn] = useState<string>();

  function resetFilters() {
    setValueCheckBox(false);
    setSelectRatting(POPULAR_DESCENDING);
    setSelectYear(YEAES[2020]);
  }

  function filterByGenres(id: number) {
    if (genres.includes(id)) {
      genres.splice(genres.indexOf(id), 1);
    } else {
      genres.push(id);
    }
    setCurrentFilms(sortMovie(selectRating, selectYear, genres, LIST_FILMS));
  }

  useEffect(() => {
    if (localGetUser) {
      dispatch({
        type: "IS_LOGIN",
        payload: true,
      });
    }
  }, [localGetUser]);

  function filterListFilms(select: string) {
    if (select === LOGIN_SELECT.SAVED) {
      setCurrentFilms(savedFilms);
    } else if (select === LOGIN_SELECT.FAVORITES) {
      setCurrentFilms(likedFilms);
    } else {
      setCurrentFilms(LIST_FILMS);
    }
  }

  function selectFilmList() {
    if (selectLogIn === LOGIN_SELECT.SAVED) {
      return savedFilms;
    } else if (selectLogIn === LOGIN_SELECT.FAVORITES) {
      return likedFilms;
    } else {
      return LIST_FILMS;
    }
  }

  return (
    <div className="filter_wrapper">
      <div className="filter_header">Фильтры:</div>
      <Link to={"/search"}>
        <button className="filter_reset">Найти фильм</button>
      </Link>
      <button className="filter_reset" onClick={resetFilters}>
        Сбросить все фильтры
      </button>
      <div className="">Сортировать по:</div>
      {isLogin ? (
        <LogInSelect
          selectLogIn={(event) => {
            setSelectLogIn(event.target.value);
            filterListFilms(event.target.value);
          }}
        />
      ) : null}

      <SelectFilter
        selectRating={(event) => {
          setSelectRatting(event.target.value),
            setCurrentFilms(
              sortMovie(
                event.target.value,
                selectYear,
                genres,
                selectFilmList() || LIST_FILMS
              )
            );
        }}
        selectRatingValue={selectRating}
      />
      <div>Год релиза:</div>
      <ReleaseYear
        selectYear={(event) => {
          setSelectYear(event.target.value),
            setCurrentFilms(
              sortMovie(
                selectRating,
                event.target.value,
                genres,
                selectFilmList() || LIST_FILMS
              )
            );
        }}
        selectYearValue={selectYear}
      />
      <Genres getGenres={filterByGenres} valueCheckBox={valueCheckBox} />
      <Pagination currentFilms={currentFilms} />
    </div>
  );
}

export { FilterBlock };
