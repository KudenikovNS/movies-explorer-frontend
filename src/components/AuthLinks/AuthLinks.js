import "./AuthLinks.css";
import { Link } from "react-router-dom";

function AuthLinks() {
  return (
    <nav>
      <ul className='auth-links'>
        <li className='auth-links__link-item'>
          <Link
            to='/signup'
            className='auth-links__link auth-links__link_white'
          >
            Регистрация
          </Link>
        </li>
        <li className='auth-links__link-item auth-links__link-item_color_green'>
          <Link to='/signin' className='auth-links__link'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthLinks;
