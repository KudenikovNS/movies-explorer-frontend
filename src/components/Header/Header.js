import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({ isBackground, isLog }) {
  const [isMenuBurgerOpen, setIsMenuBurgerOpen] = React.useState(false);
  const headerClass = `header ${isBackground && "header_background"}`;
  const btnBurgerMenuOpen = `header__open-menu-burger ${
    isMenuBurgerOpen && "header__open-menu-burger_hidden"
  }`;
  const btnBurgerMenuClose = `header__close-menu-burger_hidden ${
    isMenuBurgerOpen && "header__close-menu-burger"
  }`;

  function openMenuBurger() {
    setIsMenuBurgerOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeMenuBurger() {
    setIsMenuBurgerOpen(false);
    document.body.style.overflow = "unset";
  }

  return (
    <header className={headerClass}>
      <div className='header__container'>
        <Logo />
        {isLog ? (
          <>
            <Navigation
              isMenuBurgerOpen={isMenuBurgerOpen}
              closeMenuBurger={closeMenuBurger}
            />
            <div className={btnBurgerMenuOpen} onClick={openMenuBurger}>
              <span className='header__menu-burger-span'></span>
            </div>
            <div className={btnBurgerMenuClose} onClick={closeMenuBurger}></div>
          </>
        ) : (
          <>
            <Link className='header__link' to='/signup'>
              Регистрация
            </Link>
            <Link className='header__link header__link_color' to='/signin'>
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
