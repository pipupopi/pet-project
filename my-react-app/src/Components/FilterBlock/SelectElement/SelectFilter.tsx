import React from "react";
import { FILTER_LIST } from "../../../const";
import { nanoid } from "nanoid";

interface TEST {
  selectRating: React.ChangeEventHandler<HTMLSelectElement> | undefined
  selectRatingValue: string
}

function SelectFilter({ selectRatingValue, selectRating }: TEST) {

  return (
    <select
      value={selectRatingValue}
      className="filter_selector"
      onChange={selectRating}
    >
      {FILTER_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { SelectFilter };
