import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthLinks from "../AuthLinks/AuthLinks";
import UserContext from "../../context/UserContext";

import React, { useContext } from "react";

function Header() {
  const { currentUser } = useContext(UserContext);
  const headerClass = `header ${currentUser._id ? "" : "header_background"}`;

  return (
    <header className={headerClass}>
      <Logo />
      {currentUser._id ? <Navigation /> : <AuthLinks />}
    </header>
  );
}

export default Header;
