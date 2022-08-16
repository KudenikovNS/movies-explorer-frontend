import "./Login.css";

import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import UserForm from "../UserForm/UserForm";
import { useValidation } from "../../utils/validation";

function Login() {
  const validationEmail = useValidation(true);
  const validationPassword = useValidation(true);

  const isFormInvalid =
    validationEmail.isInvalid || validationPassword.isInvalid;

  const submitBtnForm = `form__btn form__btn-login ${
    isFormInvalid && "form__btn_disabled"
  }`;

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className='login'>
      <Logo />
      <UserForm title='Рады видеть!' onSubmit={handleSubmit}>
        <fieldset className='form__input-list'>
          <label className='form__label'>
            E-mail
            <input
              className='form__input'
              id='form-email-input'
              name='email'
              type='email'
              placeholder='E-mail'
              required
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
              placeholder='Пароль'
              required
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
          disabled={isFormInvalid}
          type='submit'
        >
          Войти
        </button>
        <p className='form__login-reg'>
          Ещё не зарегистрированы?
          <Link className='form__login-reg-link' to='/signup'>
            Регистрация
          </Link>
        </p>
      </UserForm>
    </section>
  );
}

export default Login;
