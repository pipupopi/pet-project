import React from "react";
import { nanoid } from "nanoid";
import { YEAR_LIST } from "../../../const";

function ReleaseYear() {
  return (
    <select className="filter_selector">
      {YEAR_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { ReleaseYear };
