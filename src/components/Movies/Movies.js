import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import useSearchFilter from "../../utils/useSearchFilter";

import { useEffect, useState } from "react";

import MOVIES_API from "../../utils/MoviesApi";

function Movies({
  handleMovieClickChenge,
  listMoviesLength,
  getMoviesMore,
  savedMovies,
}) {
  const [excuse, setExcuse] = useState("Введите название фильма для поиска");
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) ?? []
  );
  const [checkLocal, setCheckLocal] = useState(
    JSON.parse(localStorage.getItem("check-movies")) ?? false
  );
  const [valueLocal, setValueLocal] = useState(
    localStorage.getItem("movies-search-value") ?? ""
  );

  const filteredMovies = useSearchFilter(movies, checkLocal, valueLocal);

  const [moviesLocal, setMoviesLocal] = useState(
    JSON.parse(localStorage.getItem("filtered-movies")) ?? filteredMovies
  );

  function onChangeCheck(checked) {
    localStorage.setItem("check-movies", checked);
    setCheckLocal(checked);
  }

  function getMoviesAll() {
    setIsLoading(true);
    MOVIES_API.getMovies()
      .then((moviesList) => {
        if (moviesList.length) {
          localStorage.setItem("movies", JSON.stringify(moviesList));
          setMovies(moviesList);
        }
      })
      .catch(() =>
        setExcuse(
          `Во время запроса произошла ошибка. 
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз`
        )
      )
      .finally(() => setIsLoading(false));
  }

  function onChangeValue(value) {
    if (movies.length === 0) {
      getMoviesAll();
    }
    localStorage.setItem("movies-search-value", value);
    setValueLocal(value);
  }

  useEffect(() => {
    if (moviesLocal !== filteredMovies) {
      localStorage.setItem("filtered-movies", JSON.stringify(filteredMovies));
      setMoviesLocal(filteredMovies);
    }
  }, [filteredMovies, moviesLocal]);

  useEffect(() => {
    if (movies.length && !filteredMovies.length) {
      setExcuse("Ничего не найдено");
    }
  }, [movies.length, filteredMovies.length]);

  return (
    <>
      <SearchForm
        initialChecked={checkLocal}
        handleSearch={onChangeValue}
        initialValue={valueLocal}
        disabledCheck={!valueLocal}
        onChangeCheck={onChangeCheck}
      />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          handleMovieClickChenge={handleMovieClickChenge}
          movies={moviesLocal}
          savedMovies={savedMovies}
          listMoviesLength={listMoviesLength}
        />
      )}

      {filteredMovies.length === 0 ? (
        <p className='movies__excuse'>{excuse}</p>
      ) : (
        filteredMovies.length > listMoviesLength && (
          <button
            type='button'
            className='movies__more'
            onClick={getMoviesMore}
          >
            Ещё
          </button>
        )
      )}
    </>
  );
}

export default Movies;
