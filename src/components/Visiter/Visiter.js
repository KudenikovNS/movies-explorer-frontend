import { Link } from "react-router-dom";

function Visiter() {
  return (
    <div className='header__links'>
      <Link className='header__link header__link-signup' to='/signup'>
        Регистрация
      </Link>
      <Link className='header__link header__link-signin' to='/signin'>
        Войти
      </Link>
    </div>
  );
}

export default Visiter;
