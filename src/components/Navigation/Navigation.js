import "./Navigation.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  function handleMenuClick() {
    setIsMobileNavOpened(!isMobileNavOpened);
  }

  return (
    <nav className='nav'>
      <ul className={`nav__links ${isMobileNavOpened && "nav__links_open"}`}>
        <button
          className='nav__btn nav__btn-close'
          type='button'
          onClick={handleMenuClick}
        />
        <li className='nav__link'>
          <Link to='/' className='nav__link-item nav__link-item_hidden'>
            Главная
          </Link>
        </li>
        <li className='nav__link'>
          <Link to='/movies' className='nav__link-item nav__link-item_account'>
            Фильмы
          </Link>
        </li>
        <li className='nav__link '>
          <Link
            to='/saved-movies'
            className='nav__link-item nav__link-item_account nav__link_margin'
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li className='nav__link account'>
          <Link
            to='/profile'
            className='account__item-link nav__link-item_account'
          >
            <p className='account__title'>Аккаунт</p>
          </Link>
        </li>
      </ul>

      <button
        className='nav__btn navigation__show-button'
        type='button'
        onClick={handleMenuClick}
      />
    </nav>
  );
}

export default Navigation;
