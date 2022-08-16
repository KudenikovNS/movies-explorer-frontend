import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <div className='search-form__frame'>
          <input
            className='search-form__input'
            id='search-form-text'
            name='movie'
            type='text'
            placeholder='Фильм'
            required
          />
          <button className='search-form__submit-btn' type='submit' />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
