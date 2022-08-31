import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchForm({ handleSearch }) {
  const [contentPlaceholder, setContentPlaceholder] = useState("Фильм");
  const [valueInput, setValueInput] = useState("");
  const [error, setError] = useState(false);
  const [shorts, setShorts] = useState(false);
  const { pathname } = useLocation();

  const handleInput = (evt) => {
    setValueInput(evt.target.value);
  };

  const handleCheckbox = () => {
    setShorts(!shorts);
    localStorage.setItem("shorts", !shorts);
    handleSearch(valueInput, !shorts);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!valueInput) {
      setError(true);
      setContentPlaceholder("Нужно ввести ключевое слово");
      evt.target.elements["search-query"].focus();
      return;
    }
    setError(false);
    setContentPlaceholder("Фильм");
    localStorage.setItem("query", valueInput);
    handleSearch(valueInput, shorts);
  };

  useEffect(() => {
    if (pathname === "/movies") {
      const savedvalueInput = localStorage.getItem("query");
      const savedShorts = JSON.parse(localStorage.getItem("shorts"));
      if (savedvalueInput) {
        setValueInput(savedvalueInput);
      }
      if (savedShorts) {
        setShorts(savedShorts);
      }
      if (savedvalueInput || savedShorts === true) {
        handleSearch(savedvalueInput, savedShorts);
      }
    }
  }, []);

  return (
    <form
      name='search'
      className='search-form'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='search-form__container'>
        <label className='search-form__label' htmlFor='search-query'>
          <input
            className={`search-form__input ${
              error && "search-form__input_error"
            } search-form__text`}
            id='search-query'
            name='search-query'
            type='text'
            placeholder={contentPlaceholder}
            onChange={handleInput}
            value={valueInput}
            required
          />
        </label>
        <button
          className='search-form__btn'
          type='submit'
          aria-label='Искать'
        />
      </div>
      <label className='search-form__checkbox' htmlFor='shorts'>
        <FilterCheckbox value={shorts} onChange={handleCheckbox} />
        <span className='search-form__text'>Короткометражки</span>
      </label>
    </form>
  );
}
