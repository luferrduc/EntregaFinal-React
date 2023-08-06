import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="flex items-center gap-4">
      <NavLink
        to={"/genre/USfnlvYAhuL9EQrVjKc1"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Action
      </NavLink>
      <NavLink
        to={"/genre/So3XY1qno7nTOAYofIhW"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        RPG
      </NavLink>
      <NavLink
        to={"/genre/6T1Sz0vpQZuqqsVefKkH"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Sports
      </NavLink>
    </ul>
  );
};

export default MenuList;
