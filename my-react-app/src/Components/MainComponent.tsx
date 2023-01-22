import { Header } from "./Header/Header";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { ListFilms } from "./CardFilms/List/ListFilms";
import "./MainComponent.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LIST_FILMS } from "../listFilms";
import { MAX_FILM_PAGE, POPULAR_DESCENDING, YEAES } from "../const";
import { sortRating, filterYear } from "../filterSelect";

function MainComponent() {
  const page = useSelector((state: number) => state);
  const [currentFilms, setCurrentFilms] = useState(
    sortRating(POPULAR_DESCENDING, LIST_FILMS)
  );
  const [selectRating, setSelectRatting] = useState("Популярные по убыванию");
  const [selectYear, setSelectYear] = useState("2020");

  function sortByRatting(select: string) {
    setSelectRatting(select);
    setCurrentFilms(sortRating(select, [...currentFilms]));
  }

  function sortByYear(select: string) {
    setSelectYear(select);
    setCurrentFilms(filterYear(select, LIST_FILMS));
  }

  const lastFilmIndex = page * MAX_FILM_PAGE;
  const firstFilmIndex = lastFilmIndex - MAX_FILM_PAGE;
  const currentFilmsRender = currentFilms.slice(firstFilmIndex, lastFilmIndex);

  function resetFilters() {
    const resetByYears = filterYear(YEAES[2020], LIST_FILMS);
    setCurrentFilms(sortRating(POPULAR_DESCENDING, resetByYears));
    setSelectRatting(POPULAR_DESCENDING);
    setSelectYear(YEAES[2020]);
  }

  return (
    <div className="App">
      <Header />
      <div className="used_space">
        <FilterBlock
          selectValue={(event) => {
            sortByRatting(event.target.value);
          }}
          valueSelectRatting={selectRating}
          valueSelectYear={selectYear}
          resetFilters={resetFilters}
          selectYear={(event) => {
            sortByYear(event.target.value);
          }}
        />
        <div>
          <ListFilms films={currentFilmsRender} />
        </div>
      </div>
    </div>
  );
}

export { MainComponent };
