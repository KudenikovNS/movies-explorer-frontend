import "./FilterCheckbox.css";

export default function FilterCheckbox({ value, onChange }) {
  return (
    <label className='filter-checkbox__label' htmlFor='shorts'>
      <input
        className='filter-checkbox__input'
        id='shorts'
        name='shorts'
        type='checkbox'
        checked={value}
        onChange={onChange}
      />
      <div className='filter-checkbox__toggle'>
        <div className='filter-checkbox__change' />
      </div>
    </label>
  );
}
