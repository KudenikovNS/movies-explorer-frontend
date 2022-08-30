import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import TooltipContext from "../../context/TooltipContext";
import searchFilter from "../../utils/searchFilter";
import mainApi from "../../utils/MainApi";
import { NO_CONNECT_SERVER, MESSAGE_NOT_FOUND } from "../../utils/constants";
import React, { useState, useEffect, useContext } from "react";

function SavedMovies() {
  const [loading, setLoading] = useState(false);
  const { setTooltipMessage } = useContext(TooltipContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage("");
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    const filtered = searchFilter(savedMovies, query, isShort);
    if (filtered.length === 0) {
      setErrorMessage(MESSAGE_NOT_FOUND);
    }
    setMovies(filtered);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    mainApi
      .getFilms()
      .then((savedMovies) => {
        const user = localStorage.getItem("userId");
        const ownMovies = savedMovies.filter((film) => film.owner === user);
        localStorage.setItem("savedMovies", JSON.stringify(ownMovies));
        setLoading(false);
      })
      .catch(() => setTooltipMessage(NO_CONNECT_SERVER));
  }, []);

  return (
    <div className='saved-movies'>
      <Header />
      <SearchForm handleSearch={handleSearch} />
      {loading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} errorMessage={errorMessage} />
      )}
      <Footer />
    </div>
  );
}

export default SavedMovies;
