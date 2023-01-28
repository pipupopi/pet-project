import React, { useState } from "react";
import "./CardFilm.css";
import { CARD_FILM } from "../../../interface";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LIST_FILMS } from "../../../listFilms";
import { savedMovie, likedMovie, detailsMovie} from "../../../action";

function CardFilm({ vote, title, src }: CARD_FILM) {
  const img = `https://image.tmdb.org/t/p/w500/${src}`;
  const isLogin = useSelector((state: any) => state.isLogin);
  const savedFilms = useSelector((state: any) => state.savedMovie);
  const likedFilms = useSelector((state: any) => state.likedMovie);
  const detailsFilm = useSelector((state: any) => state.detailsMovie);

  const dispatch = useDispatch();

function addFilm(title:string, array:any) {
  const movie = LIST_FILMS.find((item) => item.title === title);
  dispatch(array(movie))

  localStorage.setItem("savedFilm", JSON.stringify(savedFilms));
  localStorage.setItem("favoritesFilm", JSON.stringify(likedFilms));
  localStorage.setItem("detailsFilm", JSON.stringify(detailsFilm));
}

  return (
    <div className="containerCard">
      <div className="wrapperCard">
        <div className="halfs">
          <div className="img_container">
            <img className="img" src={img} />
          </div>

          <div className="right">
            <div className="header_card">
              <div>Рейтинг {vote}</div>

              {isLogin ? (
                <>
                  <img
                    className="btn_favorit"
                    src="/svg/saveFilm.svg"
                    onClick={() => addFilm(title, savedMovie)}
                  ></img>
                  <img
                    className="btn_star"
                    src="/svg/star.svg"
                    onClick={() => addFilm(title, likedMovie)}
                  ></img>
                </>
              ) : (
                <Link to={"/authorization"}>
                  <img className="btn_favorit" src="/svg/saveFilm.svg"></img>
                  <img className="btn_star" src="/svg/star.svg"></img>
                </Link>
              )}
            </div>

            <div className="name_card">{title}</div>
            <Link to={'/details'}>
            <button className="button_info" onClick={() => addFilm(title, detailsMovie)}>Подробнее</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardFilm };
