import clsx from "clsx";
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

const NavItem = ({ to, children }: Props) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Link
      to={to}
      className={clsx("text-gray", {
        ["text-light-blue font-bold"]: pathName === to,
      })}
    >
      {children}
    </Link>
  );
};

export default NavItem;
