import React from "react";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Button, { ButtonColors, ButtonVariants } from "../Button/Button";
import NavItem from "./components/NavItem";
import { BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { toast } from "react-toastify";

const Header = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4">
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav className="md:flex justify-center gap-4 hidden">
        <NavItem to="/">خانه</NavItem>
        <NavItem to="/features">ارائه ها</NavItem>
      </nav>
      {!loggedIn ? (
        <div className="flex gap-2">
          <Button
            variant={ButtonVariants.TRANSPARENT}
            onClick={() =>
              toast.error("ما زدیم اینو ولی هنوز فعال نیست متاسفانه")
            }
          >
            ورود
          </Button>
          <Button
            onClick={() =>
              toast.error("ما زدیم اینو ولی هنوز فعال نیست متاسفانه")
            }
          >
            ثبت نام
          </Button>
          <CgShoppingCart className="text-white text-3xl hover:text-light-gray cursor-pointer mr-2" />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigate("/profile")}
            suffix={<BiUser className="text-xl" />}
            color={ButtonColors.SECONDARY_BLUE}
            className="!py-2"
          >
            حساب کاربری
          </Button>
          <CgShoppingCart className="text-white text-3xl hover:text-light-gray cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Header;
