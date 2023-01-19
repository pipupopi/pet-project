import React from "react";
import { Genres } from "./Genres/Genres";
import "./FilterBlock.css";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./Selector/Selector";
import { Pagination } from "./Pagination/Pagination";
import { FindFilm } from "../FindFilm/FindFilm";
import { useDispatch, useSelector } from "react-redux";
import { LAST_PAGE, FIRST_PAGE, PAGINATION_VALUE } from "../../const";

function FilterBlock() {
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
    pages === FIRST_PAGE
      ? alert("Вы на первой странице!")
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
      <button className="filter_reset">Сбросить все фильтры</button>

      <div className="">Сортировать по:</div>
      <SelectFilter />

      <div>Год релиза:</div>
      <ReleaseYear />
      <Genres />
      <Pagination nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export { FilterBlock };
