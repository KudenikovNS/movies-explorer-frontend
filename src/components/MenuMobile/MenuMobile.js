import "./MenuMobile.css";
import closeMenu from "../../images/close-burger.svg";
import openMenu from "../../images/burger.svg";
import NavTab from "../NavTab/NavTab";
import Account from "../Account/Account";

function MenuMobile({ isOpened, handleClickImg }) {
  return (
    <section className='menu-mobile'>
      <img
        className='menu-mobile__icon'
        src={isOpened ? closeMenu : openMenu}
        onClick={handleClickImg}
        alt='Открыть меню'
      />
      <div
        className={`menu-mobile__nav ${isOpened && "menu-mobile__nav_opened"}`}
      >
        <NavTab />
        <Account />
      </div>
    </section>
  );
}

export default MenuMobile;
