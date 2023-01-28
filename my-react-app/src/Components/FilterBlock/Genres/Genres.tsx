import "./Genres.css";
import React from "react";
import { GENRES_LIST } from "../../../const";

interface TEST {
  getGenres: (id:number) => void
  valueCheckBox: boolean | undefined
}

function Genres({getGenres, valueCheckBox}:TEST) {
  return (
    <div>
      {GENRES_LIST.map((item) => (
        <div key={item.id} className="genres_wrapper">
          <input
            className="genres_check"
            type="checkbox"
            onClick={() => getGenres(item.id)}
            checked={valueCheckBox}
          ></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Genres };
