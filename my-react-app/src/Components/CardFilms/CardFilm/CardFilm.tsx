import React from "react";
import "./CardFilm.css";
import { CARD_FILM } from "../../../interface";

function CardFilm({ vote, title, src }: CARD_FILM) {
  const img = `https://image.tmdb.org/t/p/w500/${src}`
  return (
    <div className="containerCard">
      <div className="wrapperCard">
        <div className="halfs">
          <div className="img_container">
            <img
              className="img"
              src={img}
            />
          </div>

          <div className="right">
            <div className="header_card">
              <div>Рейтинг {vote}</div>
              {/* <img className="btn_favorit" src="/svg/saveFilm.svg"></img> */}
              <img className="btn_star" src="/svg/star.svg"></img>
            </div>

            <div className="name_card">{title}</div>
            <div className="button_info">Подробнее</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardFilm };
