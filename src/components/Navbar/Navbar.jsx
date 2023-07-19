import CartWidget from "../Cart/CartWidget"
import MenuItems from "../Menu/MenuItems"
// import Logo from "./Logo.svg"
import Logo from '../../assets/karakura.svg'



const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-slate-800 shadow-md w-full">
        <Logo width="30" height="30" />
        <MenuItems />
        <CartWidget />
    </nav>
  )
}

export default Navbar