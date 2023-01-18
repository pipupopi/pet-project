import "./Genres.css";
import React from "react";
import { genresList } from "../../../const";

function Genres() {
  return (
    <div>
      {genresList.map((item) => (
        <div key={item.id} className="genres_wrapper">
          <input className="genres_check" type="checkbox"></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Genres };
