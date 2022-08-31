import "./MoviesCardList.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  AMOUNT_MOVIES_WIDTH_SCREEN_1280,
  AMOUNT_MOVIES_WIDTH_SCREEN_990,
  AMOUNT_MOVIES_WIDTH_SCREEN_630,
  AMOUNT_MOVIES_WIDTH_SCREEN_DEFAULT,
  AMOUNT_MOVIES_ITEMS_1280,
  AMOUNT_MOVIES_ITEMS_990,
  AMOUNT_MOVIES_ITEMS_DEFAULT,
} from "../../utils/constants";

function MoviesCardList({ movies, errorMessage }) {
  const location = useLocation();
  const [item, setItem] = useState(0);
  const [moviesMax, setMoviesMax] = useState(0);

  const showMoviesMore = () => {
    setMoviesMax(moviesMax + item);
  };

  const setTemplateCards = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setMoviesMax(AMOUNT_MOVIES_WIDTH_SCREEN_1280);
      setItem(AMOUNT_MOVIES_ITEMS_1280);
    } else if (width >= 990) {
      setMoviesMax(AMOUNT_MOVIES_WIDTH_SCREEN_990);
      setItem(AMOUNT_MOVIES_ITEMS_990);
    } else if (width >= 630) {
      setMoviesMax(AMOUNT_MOVIES_WIDTH_SCREEN_630);
      setItem(AMOUNT_MOVIES_ITEMS_DEFAULT);
    } else {
      setMoviesMax(AMOUNT_MOVIES_WIDTH_SCREEN_DEFAULT);
      setItem(AMOUNT_MOVIES_ITEMS_DEFAULT);
    }
    if (location.pathname === "/saved-movies") {
      setMoviesMax(movies.length);
    }
  };

  useEffect(() => {
    setTemplateCards();
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setTemplateCards();
      }, 500);
    });
  }, []);

  return (
    <div className='movies-card-list'>
      {errorMessage ? (
        <p className='movies-card-list__error-message'>{errorMessage}</p>
      ) : (
        <ul className='movies-card-list__container'>
          {movies.map((movie, index) => {
            if (index < moviesMax) {
              return (
                <MoviesCard key={movie.id || movie.movieId} movie={movie} />
              );
            }
            return null;
          })}
        </ul>
      )}
      {movies.length > moviesMax && location.pathname !== "/saved-movies" && (
        <div className='movies-card-list__btn'>
          <button
            className='movies-card-list__btn-more'
            type='button'
            onClick={showMoviesMore}
          >
            Ещё
          </button>
        </div>
      )}
    </div>
  );
}

export default MoviesCardList;
