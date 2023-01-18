import "./Pagination.css";
import React from "react";

function Pagination() {
  return (
    <div>
    <div className="filter_btn">
      <button className="btn">Назад</button>
      <button className="btn">Вперед</button>
    </div>
    <div className="number_page">1 из 1455</div>
    </div>
  );
}

export {Pagination};