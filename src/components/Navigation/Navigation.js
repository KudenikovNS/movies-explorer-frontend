import "./Navigation.css";

import { NavLink } from "react-router-dom";
import profile from "../../images/profile.svg";

function Navigation({ isMenuBurgerOpen, closeBurger }) {
  const navigationChangeClass = `navigation ${
    isMenuBurgerOpen && "navigation_active"
  }`;

  return (
    <nav className={navigationChangeClass}>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <NavLink
            to='/'
            onClick={closeBurger}
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Главная
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/movies'
            onClick={closeBurger}
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/saved-movies'
            onClick={closeBurger}
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink
            to='/profile'
            onClick={closeBurger}
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link_active"
                : "navigation__link"
            }
          >
            Аккаунт
          </NavLink>
          <img
            className='navigation__img-profile'
            src={profile}
            alt='Иконка пользователя'
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
