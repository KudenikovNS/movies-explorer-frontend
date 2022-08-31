import "./InputText.css";

function InputText({
  name,
  label,
  errorMessage,
  pattern,
  type,
  value,
  onChange,
}) {
  return (
    <label className='input-text' htmlFor={name}>
      <span className='input-text__name input-text__text'>{label}</span>
      <input
        className='input-text__input input-text__text'
        name={name}
        id={name}
        onChange={onChange}
        pattern={pattern}
        type={type}
        value={value}
        required
      />
      <span className='input-text__error input-text__text'>{errorMessage}</span>
    </label>
  );
}

export default InputText;
