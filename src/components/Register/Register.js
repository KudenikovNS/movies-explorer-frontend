import "./Register.css";
import InputText from "../InputText/InputText";
import Form from "../Form/Form";
import Popups from "../Popups/Popups";
import DisableContext from "../../contexts/DisableContext";
import useFormWithValidation from "../../utils/useFormWithValidation";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register({ signup, popupText, showPopup, isLoggedIn, isLuck }) {
  const { values, handleChange, isValid, errors } = useFormWithValidation();
  const componentDisable = useContext(DisableContext);
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(values.name, values.email, values.password);
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    componentDisable({ header: true, footer: true });
    return () => {
      componentDisable({ header: false, footer: false });
    };
  }, [componentDisable, isLoggedIn, navigate]);

  return (
    <section className='register'>
      <Popups showPopup={showPopup} popupText={popupText} isLuck={isLuck} />
      <Form
        title='Добро пожаловать!'
        question='Уже Зарегистрированы?'
        handleSubmit={handleSubmit}
        textButton='Зарегистрироваться'
        textLink='Войти'
        urlNavigation='/signin'
        isValid={isValid}
      >
        <InputText
          titleInput='Имя'
          name='name'
          type='text'
          classNameInput='form-input_border'
          handleChange={handleChange}
          value={values.name}
          placeholder='Введите имя'
          required={true}
          minLength='2'
          maxLength='30'
          errors={errors.name}
          autoComplete='off'
        />

        <InputText
          titleInput='E-mail'
          name='email'
          type='text'
          classNameInput='form-input_border'
          handleChange={handleChange}
          value={values.email}
          placeholder='Введите E-mail'
          pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$'
          required={true}
          errors={errors.email}
          autoComplete='off'
        />

        <InputText
          titleInput='Пароль'
          name='password'
          type='password'
          classNameInput='form-input_border'
          handleChange={handleChange}
          value={values.password}
          placeholder='Введите пароль'
          required={true}
          minLength='4'
          errors={errors.password}
          autoComplete='off'
        />
      </Form>
    </section>
  );
}

export default Register;
