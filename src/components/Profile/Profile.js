import "./Profile.css";

import { Link } from "react-router-dom";
import React from "react";

import UserForm from "../UserForm/UserForm";
import currentUser from "../../utils/user";
import { useValidation } from "../../utils/validation";

function Profile() {
  const [name, setName] = React.useState(`${currentUser.name}`);
  const [email, setEmail] = React.useState(`${currentUser.email}`);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const logChangeClass = `form__logout ${isFormOpen && "form__logout_hidden"}`;
  const editBtnChangeClass = `form__edit ${isFormOpen && "form__edit_hidden"}`;
  const validationName = useValidation(false);
  const validationEmail = useValidation(false);

  const isFormInvalid = validationName.isInvalid || validationEmail.isInvalid;

  const submitBtnForm = `form__btn_hidden ${
    isFormOpen && "form__btn form__btn_visible"
  } ${isFormInvalid && "form__btn_disabled"}`;

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    closeForm();
  }

  return (
    <section className='profile'>
      <UserForm title={`Привет, ${currentUser.name}!`} onSubmit={handleSubmit}>
        <fieldset className='form__input-list form__inputs_profile'>
          <label className='form__label form__label_profile'>
            Имя
            <input
              className='form__input form__input_profile'
              id='name-input'
              name='name'
              type='text'
              required
              minLength='2'
              maxLength='30'
              disabled={!isFormOpen}
              value={name}
              onChange={(evt) => {
                handleChangeName(evt);
                validationName.onChange(evt);
              }}
            />
          </label>
          <label className='form__label form__label_profile'>
            E-mail
            <input
              className='form__input form__input_profile'
              id='form-email-input'
              name='email'
              type='email'
              required
              disabled={!isFormOpen}
              value={email}
              onChange={(evt) => {
                handleChangeEmail(evt);
                validationEmail.onChange(evt);
              }}
            />
          </label>
        </fieldset>
        <span className='form__profile-error profile-input-error'></span>
        <button className={submitBtnForm} type='submit'>
          Сохранить
        </button>
        <button className={editBtnChangeClass} type='button' onClick={openForm}>
          Редактировать
        </button>
        <Link className={logChangeClass} to='/signin'>
          Выйти из аккаунта
        </Link>
      </UserForm>
    </section>
  );
}

export default Profile;
