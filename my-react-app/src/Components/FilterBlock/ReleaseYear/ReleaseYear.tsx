import React from "react";
import { nanoid } from "nanoid";
import { YEAR_LIST } from "../../../const";
import { RELEASE_YEAR_INTERFACE } from "../../../interface";

function ReleaseYear({selectYearValue, selectYear }: RELEASE_YEAR_INTERFACE) {
  return (
    <select
      className="filter_selector"
      value={selectYearValue}
      onChange={selectYear}
    >
      {YEAR_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { ReleaseYear };
