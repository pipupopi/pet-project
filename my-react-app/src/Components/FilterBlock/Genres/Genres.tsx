import "./Genres.css";
import React from "react";
import { GENRES_LIST } from "../../../const";

function Genres() {
  return (
    <div>
      {GENRES_LIST.map((item) => (
        <div key={item.id} className="genres_wrapper">
          <input className="genres_check" type="checkbox"></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Genres };
