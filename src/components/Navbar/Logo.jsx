import { NavLink } from 'react-router-dom'
import logo from '../../assets/karakura.png'


const Logo = () => {
	return (
		<NavLink to={"/"} className="my-auto mx-0">
			<img src={logo} alt="Karakura store Logo" className='w-[60px] h-[40px] md:w-[80px] md:h-[60px]' />
		</NavLink>
	)
}
export default Logo