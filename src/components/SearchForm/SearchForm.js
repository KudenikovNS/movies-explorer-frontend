import "./SearchForm.css";
import findBtn from "../../images/find-button.svg";
import Popups from "../Popups/Popups";
import useFormAndValidation from "../../utils/useFormWithValidation";

import { useEffect, useState } from "react";

function SearchForm({
  handleSearch,
  initialValue,
  initialChecked,
  onChangeCheck,
  disabledCheck,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const { values, handleChange, isValid, errors, setErrors } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      handleSearch(values.search);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }
  useEffect(() => {
    setErrors({ search: "Фильм" });
  }, []);

  function handleCheck(evt) {
    onChangeCheck(evt.target.checked);
  }

  return (
    <>
      <Popups
        popupText='Нужно ввести ключевое слово'
        showPopup={showPopup}
        isLuck={false}
      />
      <form
        className='form search-form container'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='search-from__container'>
          <input
            className='search-form__input'
            name='search'
            type='text'
            onChange={handleChange}
            placeholder={isValid ? "" : errors.search}
            defaultValue={initialValue}
            required
          />
          <button className='search-form__button' type='submit'>
            <img src={findBtn} className='search-form__icon' alt='иконка' />
          </button>
        </div>
        <div className='filter-checkbox'>
          <label className='filter-checkbox__label'>
            <input
              className='filter-checkbox__input'
              type='checkbox'
              onChange={handleCheck}
              disabled={disabledCheck}
              defaultChecked={initialChecked}
            />
            <span className='filter-checkbox__toggle filter-checkbox__change'></span>
          </label>
          <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
