import React from "react";
import { Genres } from "./Genres/Genres";
import "./FilterBlock.css";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./Selector/Selector";
import { Pagination } from "./Pagination/Pagination";
import { FindFilm } from "../FindFilm/FindFilm";

function FilterBlock() {
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
      <Pagination />
    </div>
  );
}

export { FilterBlock };
