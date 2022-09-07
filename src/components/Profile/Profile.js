import "./Profile.css";
import Popups from "../Popups/Popups";
import InputText from "../InputText/InputText";
import DisableContext from "../../contexts/DisableContext";
import UserContext from "../../contexts/UserContext";
import useFormWithValidation from "../../utils/useFormWithValidation";

import { useState, useContext, useEffect } from "react";

function Profile({ popupText, isLuck, editProfile, handleLogout }) {
  const currentUser = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const componentDisable = useContext(DisableContext);
  const { values, setValues, handleChange, isValid, setIsValid, errors } =
    useFormWithValidation();

  function handleProfileSave(evt) {
    evt.preventDefault();
    setIsEdit(false);
    editProfile(values);
    setShowPopup(true);
  }

  function handleProfileEdit(evt) {
    evt.preventDefault();
    setIsEdit(true);
    setShowPopup(false);
  }

  useEffect(() => {
    if (
      values.name === currentUser.name &&
      values.email === currentUser.email
    ) {
      setIsValid(false);
    }
  }, [values]);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
    componentDisable({ footer: true, ...componentDisable });
    return () => {
      componentDisable({ footer: false, ...componentDisable });
    };
  }, [componentDisable]);

  return (
    <>
      <section className='profile'>
        <Popups showPopup={showPopup} popupText={popupText} isLuck={isLuck} />
        <form className='form profile-form '>
          <h2 className='profile__title'>{`Привет, ${values.name}`}</h2>
          <div className='profile__inputs'>
            <InputText
              classNameLabel='profile__label form-input_border'
              titleInput='Имя'
              name='name'
              type='text'
              classNameInput='profile__input'
              handleChange={handleChange}
              value={values.name}
              placeholder={"Введите имя"}
              disabled={!isEdit}
              required={true}
              minLength='2'
              maxLength='30'
              errors={errors.name}
            />
            <InputText
              classNameLabel='profile__label'
              titleInput='E-mail'
              name='email'
              type='text'
              classNameInput='profile__input'
              handleChange={handleChange}
              value={values.email}
              placeholder={"Введите E-mail"}
              disabled={!isEdit}
              pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$'
              required={true}
              errors={errors.email}
            />
          </div>
          <button
            className={`profile__button profile__edit-button ${
              isEdit && !isValid && "profile__button_inactive"
            }`}
            type={isEdit ? "submit" : "button"}
            onClick={isEdit ? handleProfileSave : handleProfileEdit}
            disabled={isEdit && !isValid}
          >
            {isEdit ? "Сохранить" : "Редактировать"}
          </button>
        </form>
        <p
          className='profile__button profile__btn-signout'
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </p>
      </section>
    </>
  );
}

export default Profile;
