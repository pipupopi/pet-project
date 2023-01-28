import React from "react";
import "./ListFilms.css";
import { CardFilm } from "../CardFilm/CardFilm";
import { ARRAY_FILMS } from "../../../interface";

function ListFilms({films}:ARRAY_FILMS) {
  return (
    <div className="grid_wrapper">
      {films.map((item) => (
        <CardFilm vote={item.vote_average} title={item.title} key={item.id} src={item.poster_path}/>
      ))}
    </div>
  );
}

export { ListFilms };
