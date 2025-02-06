import React from "react";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Button, { ButtonVariants } from "../Button/Button";
import NavItem from "./components/NavItem";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4">
      <Logo />
      <nav className="md:flex justify-center gap-4 hidden">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/features">Features</NavItem>
        <NavItem to="/team">Our Team</NavItem>
        <NavItem to="/about">About Emit</NavItem>
      </nav>
      <div className="flex gap-2">
        <Button
          variant={ButtonVariants.TRANSPARENT}
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </Button>
        <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
