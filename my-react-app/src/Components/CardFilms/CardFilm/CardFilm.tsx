import React from "react";
import "./CardFilm.css";

interface CARD_FILM {
  vote: number;
  title: string;
  key: number;
}

function CardFilm({ vote, title }: CARD_FILM) {
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
