import { Header } from "./Header/Header";
import { FilterBlock } from "./FilterBlock/Filterblock";
import { ListFilms } from "./CardFilms/List/ListFilms";
import "./MainComponent.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  MAX_FILM_PAGE,
  YEAES,
  POPULAR_DESCENDING,
} from "../const";
import { sortMovie } from "../filterSelect";
import { Outlet } from "react-router-dom";
import { LIST_FILMS } from "../listFilms";

function MainComponent() {
  const page = useSelector((state: any) => state.pages);
  const [currentFilms, setCurrentFilms] = useState(
    sortMovie(POPULAR_DESCENDING, YEAES[2020], [], LIST_FILMS)
  );

  const lastFilmIndex = page * MAX_FILM_PAGE;
  const firstFilmIndex = lastFilmIndex - MAX_FILM_PAGE;
  const currentFilmsRender = [...currentFilms].slice(firstFilmIndex, lastFilmIndex);

  return (
    <div className="App">
      <Header />
      <div className="used_space">
        <FilterBlock
          currentFilms={currentFilms}
          setCurrentFilms={setCurrentFilms}
        />
        <div><ListFilms films={currentFilmsRender} /></div>
      </div>
      <Outlet/>
    </div>
  );
}

export { MainComponent };
