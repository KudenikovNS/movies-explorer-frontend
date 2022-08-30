import "./Login.css";
import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import UserContext from "../../context/UserContext";
import { ERROR_CODE_UNAUTH } from "../../utils/constants";
import useFormWithValidation from "../../utils/useFormWithValidation";
import mainApi from "../../utils/MainApi";

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [errorLogin, setErrorLogin] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { setCurrentUser } = useContext(UserContext);
  const form = useFormWithValidation();
  const navigate = useNavigate();

  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setDisabled(true);

    mainApi
      .login(form.values)
      .then(() => mainApi.getUser())
      .then((user) => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userId", user._id);
        setCurrentUser(user);
        navigate("/movies");
      })
      .catch((err) => {
        if (err.status === ERROR_CODE_UNAUTH) {
          setErrorLogin("Неправильные почта или пароль");
        } else {
          setErrorLogin("Нет соединения с сервером");
        }
      });
  };

  return (
    <div className='login'>
      <div className='login__up'>
        <Logo />
        <h2 className='login__title login__text'>Рады видеть!</h2>
      </div>
      <form
        className='login__form'
        id='login'
        name='login'
        onSubmit={handleSubmit}
        noValidate
      >
        <InputText
          name='email'
          type='email'
          label='E-mail'
          value={form.values.email || ""}
          onChange={form.handleChange}
          errorMessage={form.errors.email}
          pattern='^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$'
        />
        <InputText
          name='password'
          label='Пароль'
          type='password'
          onChange={form.handleChange}
          errorMessage={form.errors.password}
          value={form.values.password || ""}
        />
      </form>
      <div className='login__down'>
        <p className='login__text login__text_red'>{errorLogin}</p>
        <button
          className={`login__btn-submit ${
            disabled && "login__btn-submit_disabled"
          } login__text`}
          type='submit'
          form='login'
          disabled={disabled}
        >
          Войти
        </button>
        <div className='login__question'>
          <p className='login__text login__text_grey'>
            Ещё не зарегистрированы?
          </p>
          <Link to='/signup' className='login__link login__text'>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
