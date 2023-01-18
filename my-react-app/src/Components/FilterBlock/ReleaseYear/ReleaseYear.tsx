import React from "react";
import { nanoid } from "nanoid";
import { yearsList } from "../../../const";

function ReleaseYear() {
  return (
    <select className="filter_selector">
      {yearsList.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { ReleaseYear };
