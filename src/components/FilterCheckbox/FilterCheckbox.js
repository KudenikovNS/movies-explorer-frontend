import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className='filter-checkbox__label'>
      Короткометражки
      <input
        className='filter-checkbox__input'
        id='filter-checkbox-id'
        name='checkbox'
        type='checkbox'
      />
      <span className='filter-checkbox__change' />
    </label>
  );
}

export default FilterCheckbox;
