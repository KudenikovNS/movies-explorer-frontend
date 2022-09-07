import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import useSearchFilter from "../../utils/useSearchFilter";

import { useState, useEffect } from "react";

function SavedMovies({ handleMovieClickChenge, movies }) {
  const [valueLocal, setValueLocal] = useState(
    localStorage.getItem("movies-saved-search") ?? ""
  );
  const [checkLocal, setCheckLocal] = useState(
    JSON.parse(localStorage.getItem("movies-saved-check")) ?? false
  );
  const filteredMovies = useSearchFilter(movies, checkLocal, valueLocal);
  const [localMoviesSaved, setLocalMoviesSaved] = useState(
    JSON.parse(localStorage.getItem("movies-saved-filtered")) ?? filteredMovies
  );
  const [excuse, setExcuse] = useState("Введите название фильма для поиска");

  function onChangeValue(value) {
    localStorage.setItem("movies-saved-search", value);
    setValueLocal(value);
  }

  function onChangeCheck(checked) {
    localStorage.setItem("movies-saved-check", checked);
    setCheckLocal(checked);
  }
  useEffect(() => {
    if (localMoviesSaved !== filteredMovies) {
      localStorage.setItem(
        "movies-saved-filtered",
        JSON.stringify(filteredMovies)
      );
      setLocalMoviesSaved(filteredMovies);
    }
  }, [filteredMovies, localMoviesSaved]);

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
        onChangeCheck={onChangeCheck}
        initialValue={valueLocal}
      />

      <MoviesCardList
        handleMovieClickChenge={handleMovieClickChenge}
        movies={localMoviesSaved}
      />

      {filteredMovies.length === 0 ? (
        <p className='movies__excuse'>{excuse}</p>
      ) : null}
    </>
  );
}

export default SavedMovies;
