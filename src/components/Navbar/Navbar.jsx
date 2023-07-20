import { Outlet } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import MenuItems from "../Menu/MenuItems";
import Logo from "./Logo";
// import Logo from "./Logo.svg"

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-between bg-slate-800 p-5 shadow-md">
        <Logo />
        <MenuItems />
        <CartWidget />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
