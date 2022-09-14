import "./MoviesCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import deleteCard from "../../images/delete-card.svg";

import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ handleMovieClickChenge, movie, savedMovies }) {
  const [isLike, setIsLike] = useState(false);
  const location = useLocation();
  const isCard = location.pathname === "/saved-movies" ? true : false;

  function getdurationMovie(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <div className='movies-card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          src={
            isCard
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.nameRU}
          className='movies-card__img'
        />
      </a>
      <div className='movies-card-container'>
        <p className='movies-card-title'>{movie.nameRU}</p>
        <button
          className={`movies-card-button ${
            isCard ? "movies-card-delete" : "movies-card-like"
          }`}
          onClick={() => {
            setIsLike(!isLike);
            handleMovieClickChenge(movie);
          }}
        >
          <img
            src={
              isCard
                ? deleteCard
                : savedMovies.some((m) => m.movieId === movie.id)
                ? likeActive
                : like
            }
            alt={isCard ? "закрыть" : "лайк"}
          />
        </button>
      </div>
      <span className='movies-card__duration'>
        {getdurationMovie(movie.duration)}
      </span>
    </div>
  );
}

export default MoviesCard;
