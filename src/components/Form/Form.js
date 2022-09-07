import "./Form.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Form({
  title,
  question,
  children,
  handleSubmit,
  textButton,
  textLink,
  urlNavigation,
  isValid,
}) {
  return (
    <>
      <Logo />
      <h2 className='form-title'>{title}</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__inputs'>{children}</div>
        <button
          className={`form__button ${!isValid && "form__button_disabled"}`}
          disabled={!isValid}
          type='submit'
        >
          {textButton}
        </button>
      </form>
      <p className='form__question'>
        {question}
        <Link to={urlNavigation} className='form__link'>
          {textLink}
        </Link>
      </p>
    </>
  );
}

export default Form;
