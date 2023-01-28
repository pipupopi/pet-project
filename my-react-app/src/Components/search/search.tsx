import React, { useState } from "react";
import "./search.css";
import { GENRES_LIST } from "../../const";
import { findMovieFilter } from "../../filterSelect";
import { useDispatch, useSelector } from "react-redux";
import { detailsMovie } from "../../action";
import { Link } from "react-router-dom";

function Search() {
  const [popularity, setPopularity] = useState("Популярный");
  const [vote, setVote] = useState("Высокая оценка");
  const [genre, setGenre] = useState("боевик");
  const [currentFilms, setCurrentFilms] = useState<any>(
    findMovieFilter(popularity, vote, genre)
  );
  const detailsFilm = useSelector((state: any) => state.detailsMovie);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const lastFilmIndex = page * 1;
  const firstFilmIndex = lastFilmIndex - 1;
  const currentFilmsRender = currentFilms.slice(firstFilmIndex, lastFilmIndex);

  function findFilm() {
    setCurrentFilms(findMovieFilter(popularity, vote, genre));
  }

  function nextFilm() {
    if (page === currentFilms.length) {
      alert("Больше фильмов нет по этому критерию");
    } else {
      setPage((prev) => prev + 1);
    }
  }
  return (
    <div className="component">
      <div className="filter-block">
        <h2>
          Выбрать фильм по <br></br> любимым категориям:
        </h2>
        <div className="select-block">
          <p>Оценка:</p>
          <select onChange={(event) => setVote(event.target.value)}>
            <option>Высокая оценка</option>
            <option>Низкая оценка</option>
          </select>
          <div className="popularity">
            <p>Популярность:</p>
            <select onChange={(event) => setPopularity(event.target.value)}>
              <option>Популярный</option>
              <option>Неизвестный</option>
            </select>
          </div>
          <div className="genres">
            <p>Жанр:</p>
            <select
              onChange={(event) => {
                setGenre(event.target.value);
              }}
            >
              {GENRES_LIST.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button onClick={findFilm} className="find-btn">
            Найти
          </button>
          <div className="pagination-btn">
            <Link to={"/details"}>
              <button
                onClick={() => dispatch(detailsMovie(currentFilmsRender[0]))}
              >
                Подходит
              </button>
            </Link>
            <button onClick={nextFilm}>Не подходит</button>
          </div>
        </div>
        <div className="film">
          {currentFilmsRender.map((item: any) => (
            <div className="film-card" key={item.id}>
              <img
                className="film-img"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              ></img>
              <p>{item.title}</p>
              <p>Жанр: {genre}</p>
              <p>Рейтинг: {item.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export { Search };
