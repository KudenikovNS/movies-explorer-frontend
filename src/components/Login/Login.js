import "./Login.css";

import Form from "../Form/Form";
import InputText from "../InputText/InputText";

import DisableContext from "../../contexts/DisableContext";
import useFormWithValidation from "../../utils/useFormWithValidation";
import Popups from "../Popups/Popups";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ signin, isLoggedIn, popupText, isLuck, showPopup }) {
  const { values, handleChange, isValid, errors } = useFormWithValidation();
  const componentDisable = useContext(DisableContext);
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    signin(values.email, values.password);
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
        title='Рады видеть!'
        question='Ещё не Зарегистрированы?'
        handleSubmit={handleSubmit}
        textButton='Войти'
        textLink='Регистрироваться'
        urlNavigation='/signup'
        isValid={isValid}
      >
        <InputText
          titleInput='E-mail'
          name='email'
          type='email'
          classNameInput='form-input_border'
          handleChange={handleChange}
          value={values.email}
          placeholder='Введите E-mail'
          required={true}
          errors={errors.email}
        />

        <InputText
          titleInput='Пароль'
          name='password'
          type='password'
          classNameInput='form-input_border'
          handleChange={handleChange}
          placeholder='Введите пароль'
          value={values.password}
          required={true}
          minLength='4'
          errors={errors.password}
        />
      </Form>
    </section>
  );
}

export default Login;
