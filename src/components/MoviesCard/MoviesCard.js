import "./MoviesCard.css";
import mainApi from "../../utils/MainApi";
import TooltipContext from "../../context/TooltipContext";
import {
  MESSAGE_DEFAULT,
  NO_CONNECT_SERVER,
  TIME_HOUR,
} from "../../utils/constants";

import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  const [savedId, setSavedId] = useState("");
  const [saved, setSaved] = useState(false);
  const location = useLocation();
  const { setTooltipMessage } = useContext(TooltipContext);

  const handleSetSaved = (evt) => {
    if (!saved) {
      const newMovie = {};
      const { image, id } = movie;
      Object.assign(newMovie, movie);
      delete newMovie.id;
      delete newMovie.created_at;
      delete newMovie.updated_at;
      Object.entries(newMovie).forEach((key) => {
        if (!key[1]) {
          newMovie[key[0]] = "...";
        }
      });

      mainApi
        .saveFilm({
          ...newMovie,
          image: `https://api.nomoreparties.co/${image.url}`,
          thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
          movieId: id,
        })
        .then((savedMovie) => {
          setSaved(true);
          setSavedId(savedMovie._id);
          let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          if (!savedMovies) {
            savedMovies = [];
          }
          savedMovies.push(savedMovie);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        })
        .catch((err) => {
          if (err.status === 400) {
            setTooltipMessage(MESSAGE_DEFAULT);
          } else {
            setTooltipMessage(NO_CONNECT_SERVER);
          }
        });
    } else {
      mainApi
        .deleteFilm(savedId)
        .then(() => {
          setSaved(false);
          const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));

          let index = 0;
          for (let i = 0; i < savedMovies.length; i += 1) {
            const film = savedMovies[i];
            if (film._id === movie._id) {
              index = i;
            }
          }
          savedMovies.splice(index, 1);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          if (location.pathname === "/saved-movies") {
            evt.target.closest(".movies-card").remove();
          }
        })
        .catch(() => setTooltipMessage(NO_CONNECT_SERVER));
    }
  };

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    if (savedMovies) {
      savedMovies.forEach((savedMovie) => {
        if (savedMovie.movieId === movie.id || savedMovie._id === movie._id) {
          setSaved(true);
          setSavedId(savedMovie._id);
        }
      });
    }
  }, []);

  return (
    <li className='movies-card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='movies-card__image'
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={movie.image.name}
        />
      </a>
      <div className='movies-card__info'>
        <h3 className='movies-card__title movies-card__text'>{movie.nameRU}</h3>
        {location.pathname !== "/saved-movies" ? (
          <button
            className={`movies-card__btn movies-card__btn-save ${
              saved && "movies-card__btn-save_active"
            }`}
            type='button'
            onClick={handleSetSaved}
          ></button>
        ) : (
          <button
            className='movies-card__btn movies-card__btn-delete'
            type='button'
            onClick={handleSetSaved}
          />
        )}
      </div>
      <p className='movies-card__time movies-card__text'>
        {`${Math.floor(movie.duration / TIME_HOUR)}ч ${
          movie.duration % TIME_HOUR
        }м`}
      </p>
    </li>
  );
}

export default MoviesCard;
