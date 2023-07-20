import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="flex items-center gap-4">
      <NavLink
        to={"/genre/acción"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Action
      </NavLink>
      <NavLink
        to={"/genre/RPG"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        RPG
      </NavLink>
      <NavLink
        to={"/genre/deportes"}
        className="text-lg font-bold text-white transition-all duration-[0.4s] ease-in-out hover:underline"
      >
        Sports
      </NavLink>
    </ul>
  );
};

export default MenuList;
