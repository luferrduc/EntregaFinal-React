import CartWidget from "../Cart/CartWidget"
import MenuItems from "../Menu/MenuItems"
import Logo from "./Logo"



const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-slate-400 shadow-md w-full">
        <Logo />
        <MenuItems />
        <CartWidget />
    </nav>
  )
}

export default Navbar