import { Header } from "./Header/Header";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { ListFilms } from "./CardFilms/List/ListFilms";
import "./MainComponent.css";
import React from "react";
import { useSelector } from "react-redux";
import { LIST_FILMS } from "../listFilms";
import { MAX_FILM_PAGE } from "../const";

function MainComponent() {
  const page: any = useSelector((state) => state);
  const lastFilmIndex = page * MAX_FILM_PAGE;
  const firstFilmIndex = lastFilmIndex - MAX_FILM_PAGE;
  const currentFilms = LIST_FILMS.slice(firstFilmIndex, lastFilmIndex);

  return (
    <div className="App">
      <Header />
      <div className="used_space">
        <FilterBlock />
        <div>
          <ListFilms films={currentFilms} />
        </div>
      </div>
    </div>
  );
}

export { MainComponent };
