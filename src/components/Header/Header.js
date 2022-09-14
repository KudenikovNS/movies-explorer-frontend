import Logo from "../Logo/Logo";
import "./Header.css";
import Visiter from "../Visiter/Visiter";
import Account from "../Account/Account";
import NavTab from "../NavTab/NavTab";
import MenuMobile from "../MenuMobile/MenuMobile";

export default function Header({
  isLoggedIn,
  isOpened,
  handleClickImg,
  headerDisable,
}) {
  return (
    <header
      className={`header-bg ${!isLoggedIn && "header-bg-dark"} ${
        headerDisable && "header-disable"
      }`}
    >
      <div className='header container'>
        <Logo />
        <div className={`header__nav ${isLoggedIn && "menu-mobile__nav"}`}>
          {isLoggedIn && <NavTab />}
          {isLoggedIn ? <Account /> : <Visiter />}
        </div>
        {isLoggedIn ? (
          <MenuMobile isOpened={isOpened} handleClickImg={handleClickImg} />
        ) : null}
      </div>
    </header>
  );
}
