import "./InputText.css";

function Input({
  classNameLabel,
  titleInput,
  name,
  type,
  classNameInput,
  handleChange,
  value,
  placeholder,
  disabled,
  pattern,
  required,
  minLength,
  maxLength,
  errors,
}) {
  return (
    <>
      <label className={`input-text__label ${classNameLabel}`}>
        <span className='input-text__placeholder'>{titleInput}</span>
        <input
          name={name}
          type={type}
          className={`input ${classNameInput}`}
          onChange={handleChange}
          value={value || ""}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      </label>
      <span
        className={`input-text__error ${errors && "input-text__error-show"}`}
      >
        {errors}
      </span>
    </>
  );
}

export default Input;
