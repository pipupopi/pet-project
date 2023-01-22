import React from "react";
import { nanoid } from "nanoid";
import { YEAR_LIST } from "../../../const";
import { SELECT_YEAR_INTERFACE } from "../../../interface";

function ReleaseYear({selectYear, valueSelectYear}:SELECT_YEAR_INTERFACE) {
  return (
    <select className="filter_selector" value={valueSelectYear} onChange={selectYear}>
      {YEAR_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { ReleaseYear };
