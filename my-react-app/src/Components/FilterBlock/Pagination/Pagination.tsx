import "./Pagination.css";
import React from "react";
import { useSelector } from "react-redux";
import { FIRST_PAGE, PAGINATION_VALUE, MAX_FILM_PAGE } from "../../../const";
import { useDispatch } from "react-redux";
import { PAGINATION_INTERFACE } from "../../../interface";

function Pagination({ currentFilms}:PAGINATION_INTERFACE) {
  const dispatch = useDispatch();
  const pages = useSelector((state:any) => state.pages);
  const lastPage = Math.trunc(currentFilms.length / MAX_FILM_PAGE);

  function nextPage() {
    pages === lastPage
      ? pages
      : dispatch({
          type: "NEXT_PAGE",
          payload: PAGINATION_VALUE,
        });
  }

  function prevPage() {
    pages === 1
      ? pages
      : dispatch({
          type: "PREV_PAGE",
          payload: PAGINATION_VALUE,
        });
  }
  return (
    <div>
      <div className="filter_btn">
        {pages === FIRST_PAGE ? (
          <button
            className="btn"
            style={{ background: "grey" }}
            onClick={() => prevPage()}
          >
            Назад
          </button>
        ) : (
          <button className="btn" onClick={() => prevPage()}>
            Назад
          </button>
        )}
        {pages === lastPage ? (
          <button
            className="btn"
            style={{ background: "grey" }}
            onClick={() => nextPage()}
          >
            Вперед
          </button>
        ) : (
          <button className="btn" onClick={() => nextPage()}>
            Вперед
          </button>
        )}
      </div>
      <div className="number_page">{pages + " из " + lastPage}</div>
    </div>
  );
}

export { Pagination };
