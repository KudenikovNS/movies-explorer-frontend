import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

import getFilms from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import searchFilter from "../../utils/searchFilter";
import {
  MESSAGE_MOVVIES_DANGER,
  MESSAGE_NOT_FOUND,
} from "../../utils/constants";

import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const filter = (query, shorts) => {
    const savedMovies = JSON.parse(localStorage.getItem("movies"));
    const filtered = searchFilter(savedMovies, query, shorts);
    if (filtered.length === 0) {
      setErrorMessage(MESSAGE_NOT_FOUND);
    }
    setMovies(filtered);
    setLoading(false);
  };

  const handleSearch = (query, shorts) => {
    setLoading(true);
    setErrorMessage("");
    const savedMovies = JSON.parse(localStorage.getItem("movies"));
    if (!savedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem("movies", JSON.stringify(films));
          filter(query, shorts);
        })
        .catch(() => {
          setErrorMessage(MESSAGE_MOVVIES_DANGER);
        });
    } else {
      filter(query, shorts);
    }
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem("savedMovies");
    if (!savedMovies) {
      setLoading(true);
      mainApi
        .getFilms()
        .then((films) => {
          if (films.length > 0) {
            localStorage.setItem("savedMovies", JSON.stringify(films));
          }
          setLoading(false);
        })
        .catch(() => {
          setErrorMessage(MESSAGE_MOVVIES_DANGER);
        });
    }
  }, []);

  return (
    <div className='movies'>
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

export default Movies;
