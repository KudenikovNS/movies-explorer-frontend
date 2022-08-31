import "./Register.css";
import Logo from "../Logo/Logo";
import InputText from "../InputText/InputText";
import UserContext from "../../context/UserContext";
import mainApi from "../../utils/MainApi";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { ERROR_CODE_CONFLICT } from "../../utils/constants";

import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { setCurrentUser } = useContext(UserContext);
  const [disabled, setDisabled] = useState(true);
  const [errorRegister, setErrorRegister] = useState("");
  const form = useFormWithValidation();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisabled(true);
    mainApi
      .register(form.values)
      .then((user) =>
        mainApi.login({ email: user.email, password: form.values.password })
      )
      .then(() => mainApi.getUser())
      .then((user) => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userId", user._id);
        setCurrentUser(user);
        navigate("/movies");
      })
      .catch((err) => {
        err.status === ERROR_CODE_CONFLICT
          ? setErrorRegister("Данный email уже зарегистрирован")
          : setErrorRegister("Нет соединения с сервером");
      });
  };

  useEffect(() => {
    setDisabled(!form.isValid);
  }, [form.values]);

  return (
    <div className='register'>
      <div className='register__up'>
        <Logo />
        <h2 className='register__title register__text'>Добро пожаловать!</h2>
      </div>
      <form
        name='register'
        className='register__form'
        id='register'
        onSubmit={handleSubmit}
        noValidate
      >
        <InputText
          name='name'
          label='Имя'
          type='text'
          onChange={form.handleChange}
          value={form.values.name || ""}
          errorMessage={form.errors.name}
          pattern='^[a-zA-Zа-яА-Я\s-]+$'
        />
        <InputText
          name='email'
          label='E-mail'
          type='email'
          onChange={form.handleChange}
          value={form.values.email || ""}
          errorMessage={form.errors.email}
          pattern='^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$'
        />
        <InputText
          name='password'
          type='password'
          label='Пароль'
          onChange={form.handleChange}
          value={form.values.password || ""}
          errorMessage={form.errors.password}
        />
      </form>

      <div className='register__down'>
        <p className='register__text register__text_color'>{errorRegister}</p>
        <button
          className={`register__btn-submit ${
            disabled && "register__btn-submit_disabled"
          } register__text`}
          form='register'
          type='submit'
          disabled={disabled}
        >
          Зарегистрироваться
        </button>
        <div className='register__container-question'>
          <p className='register__text register__container-question-text_color'>
            Уже зарегистрированы?
          </p>
          <Link to='/signin' className='register__link register__text'>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}
