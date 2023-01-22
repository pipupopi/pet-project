import React from "react";
import { Genres } from "./Genres/Genres";
import "./FilterBlock.css";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./SelectElement/SelectFilter";
import { Pagination } from "./Pagination/Pagination";
import { FindFilm } from "../FindFilm/FindFilm";
import { useDispatch, useSelector } from "react-redux";
import { LAST_PAGE, PAGINATION_VALUE } from "../../const";
import { FILTER_INTERFACE } from "../../interface";

function FilterBlock({selectValue, valueSelectRatting, resetFilters, selectYear, valueSelectYear}:FILTER_INTERFACE) {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state);

  function nextPage() {
    pages === LAST_PAGE
      ? pages
      : dispatch({
          type: "NEXT_PAGE",
          payload: PAGINATION_VALUE,
        });
  }

  function prevPage() {
    pages === 1
      ? pages
      : dispatch({
          type: "PREV_PAGE",
          payload: PAGINATION_VALUE,
        });
  }

  return (
    <div className="filter_wrapper">
      <div className="filter_header">Найти:</div>
      <FindFilm />
      <div className="filter_header">Фильтры:</div>
      <button className="filter_reset" onClick={resetFilters} >Сбросить все фильтры</button>

      <div className="">Сортировать по:</div>
      <SelectFilter selectValue={selectValue} valueSelectRatting={valueSelectRatting}/>

      <div>Год релиза:</div>
      <ReleaseYear selectYear={selectYear} valueSelectYear={valueSelectYear}/>
      <Genres />
      <Pagination nextPage={nextPage} prevPage={prevPage}/>
    </div>
  );
}

export { FilterBlock };
