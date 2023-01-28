import React from "react";
import { useSelector } from "react-redux";
import "./details-film.css";
import { format } from "date-fns";

function DetailsFilm() {
  const detailsFilm = useSelector((state: any) => state.detailsMovie);
  const imgFilm = `https://image.tmdb.org/t/p/w500/${detailsFilm.poster_path}`;
  const releaseDate = format(new Date(detailsFilm.release_date), 'P' )
  return (
    <div className="component">
      <div className="posters-film">
        <img src={imgFilm} alt="Постер фильма" className="poster" />
      </div>
      <div className="info-film">
        <p className="title-film">{detailsFilm.title}</p>
        <p>Рейтинг: {detailsFilm.vote_average}</p>
        <p>{detailsFilm.overview}</p>
      </div>
      <div className="film-details">
        <p>Язык оригинала: {detailsFilm.original_language}</p>
        <p>Дата выхода: {releaseDate}</p>
        <p>Оригинальное название: {detailsFilm.original_title}</p>

      </div>
    </div>
  );
}

export { DetailsFilm };
