
import React from "react";
import './CardFilm.css'

function CardFilm() {
  return (
    <div className="containerCard">
      <div className="wrapperCard">
        <div className="halfs">
          <div className="img_container">
            <img
              className="img"
              src="https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/9b395abc-e304-41ba-8816-3aab6db5541c/300x450"
            />
          </div>

          <div className="right">
            <div className="header_card">
              <div>Рейтинг: 5,7</div>
              <img className="btn_star" src="/svg/star.svg"></img>
              <img className="btn_favorit" src="/svg/saveFilm.svg"></img>
            </div>

            <div className="name_card">Истребитель демонов: Поезд Бесконечный</div>
            <button className="button_info">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export {CardFilm};
