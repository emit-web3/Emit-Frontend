import React from "react";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import NavItem from "./components/NavItem";
import { BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4">
      <Logo />
      <nav className="md:flex justify-center gap-4 hidden">
        <NavItem to="/">خانه</NavItem>
        <NavItem to="/features">صفحه اول</NavItem>
      </nav>
      
    </div>
  );
};

export default Header;
