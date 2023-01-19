import "./Pagination.css";
import React from "react";
import { PAGINATION_INTERFACE } from "../../../interface";
import { useSelector } from "react-redux";
import { LAST_PAGE, FIRST_PAGE } from "../../../const";


function Pagination({ nextPage, prevPage }: PAGINATION_INTERFACE) {
  const page = useSelector((state) => state);
  return (
    <div>
      <div className="filter_btn">
        {page === FIRST_PAGE ? null : (
          <button className="btn" onClick={() => prevPage()}>
            Назад
          </button>
        )}
        {page === LAST_PAGE ? null : (
          <button className="btn" onClick={() => nextPage()}>
            Вперед
          </button>
        )}
      </div>
      <div className="number_page">{page + " из " + LAST_PAGE}</div>
    </div>
  );
}

export { Pagination };
