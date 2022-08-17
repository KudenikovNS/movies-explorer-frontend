import "./Register.css";

import { Link } from "react-router-dom";
import UserForm from "../UserForm/UserForm";
import { useValidation } from "../../utils/validation";

import Logo from "../Logo/Logo";

function Register() {
  const validationName = useValidation(true);
  const validationEmail = useValidation(true);
  const validationPassword = useValidation(true);

  const isFormInvalid =
    validationName.isInvalid ||
    validationEmail.isInvalid ||
    validationPassword.isInvalid;

  const submitBtnForm = `form__btn ${isFormInvalid && "form__btn_disabled"}`;

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className='register'>
      <Logo />
      <UserForm title='Добро пожаловать!' onSubmit={handleSubmit}>
        <fieldset className='form__input-list'>
          <label className='form__label'>
            Имя
            <input
              className='form__input'
              id='name-input'
              name='name'
              type='text'
              required
              minLength='2'
              maxLength='30'
              placeholder='Имя'
              onChange={(evt) => {
                validationName.onChange(evt);
              }}
            />
            <span className='form__text-error name-input-error'>
              {validationName.isInvalid && validationName.errorMessage}
            </span>
          </label>
          <label className='form__label'>
            E-mail
            <input
              className='form__input'
              id='form-email-input'
              name='email'
              type='email'
              required
              placeholder='E-mail'
              onChange={(evt) => {
                validationEmail.onChange(evt);
              }}
            />
            <span className='form__text-error form-email-input-error'>
              {validationEmail.isInvalid && validationEmail.errorMessage}
            </span>
          </label>
          <label className='form__label'>
            Пароль
            <input
              className='form__input'
              id='form-password-input'
              name='password'
              type='password'
              required
              placeholder='Пароль'
              onChange={(evt) => {
                validationPassword.onChange(evt);
              }}
            />
            <span className='form__text-error form-password-input-error'>
              {validationPassword.isInvalid && validationPassword.errorMessage}
            </span>
          </label>
        </fieldset>
        <button
          className={submitBtnForm}
          type='submit'
          disabled={isFormInvalid}
        >
          Зарегистрироваться
        </button>
        <p className='form__login-reg'>
          Уже зарегистрированы?
          <Link className='form__login-reg-link' to='/signin'>
            Войти
          </Link>
        </p>
      </UserForm>
    </section>
  );
}

export default Register;
