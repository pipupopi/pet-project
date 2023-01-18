import "./Genres.css";
import { nanoid } from "nanoid";
import React from "react";
import { genresList } from "../../../const";

function Genres() {
  return (
    <div>
      {genresList.map((item) => (
        <div key={nanoid()} className="genres_wrapper">
          <input className="genres_check" type="checkbox"></input>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export { Genres };
