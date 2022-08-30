import "./Profile.css";
import Header from "../Header/Header";
import UserContext from "../../context/UserContext";
import TooltipContext from "../../context/TooltipContext";
import mainApi from "../../utils/MainApi";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {
  ERROR_CODE_CONFLICT,
  MESSAGE_EMAIL,
  NO_CONNECT_SERVER,
  MESSAGE_UPDATE,
} from "../../utils/constants";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const form = useFormWithValidation();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setTooltipMessage } = useContext(TooltipContext);
  const navigate = useNavigate();
  const handleSignuot = () => {
    mainApi
      .logout()
      .then(() => {
        setCurrentUser({});
        localStorage.clear();
        navigate("/");
      })
      .catch(() => setTooltipMessage(NO_CONNECT_SERVER));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDisabled(true);
    mainApi
      .patchUser(form.values)
      .then((user) => {
        setCurrentUser(user);
        setMessage(MESSAGE_UPDATE);
        form.resetForm();
      })
      .catch((err) => {
        if (err.status === ERROR_CODE_CONFLICT) {
          setMessage(MESSAGE_EMAIL);
        } else {
          setMessage(NO_CONNECT_SERVER);
        }
      });
  };

  useEffect(() => {
    form.setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  useEffect(() => {
    const { name, email } = form.values;
    form.isValid && (currentUser.name !== name || currentUser.email !== email)
      ? setDisabled(false)
      : setDisabled(true);
  }, [form.values, currentUser]);

  return (
    <div className='profile'>
      <Header />
      <div className='profile__container'>
        <h2 className='profile__title profile__text profile__text_marked'>
          {`Привет, ${currentUser.name}!`}
        </h2>
        <form
          name='profile'
          className='profile__info'
          id='profile'
          onSubmit={handleSubmit}
        >
          <div className='profile__info-item'>
            <p className='profile__text profile__text_marked'>Имя</p>
            <input
              className='profile__text profile__input'
              type='text'
              name='name'
              value={form.values.name || ""}
              onChange={form.handleChange}
              pattern='^[a-zA-Zа-яА-Я\s-]+$'
              required
            />
          </div>
          <div className='profile__info-item'>
            <p className='profile__text profile__text_marked'>E-mail</p>
            <input
              className='profile__text profile__input'
              type='email'
              name='email'
              value={form.values.email || ""}
              onChange={form.handleChange}
              pattern='^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$'
              required
            />
          </div>
        </form>
        <ul className='profile__btns'>
          <p className='profile__text profile__message'>{message}</p>
          <li className='profile__btn-item'>
            <button
              className={`profile__btn ${
                disabled && "profile__btn_disabled"
              } profile__text`}
              type='submit'
              form='profile'
              disabled={disabled}
            >
              Редактировать
            </button>
          </li>
          <li className='profile__btn-item'>
            <button
              className='profile__btn profile__text profile__text_color'
              type='button'
              onClick={handleSignuot}
            >
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
