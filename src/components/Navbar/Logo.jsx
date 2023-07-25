import { NavLink } from 'react-router-dom'
import logo from '../../assets/karakura2.svg'


const Logo = () => {
	return (
		<NavLink to={"/"}>
			<img src={logo} alt="Karakura store Logo" className='absolute left-0 top-[-8px]' height={120} width={120}/>
		</NavLink>
	)
}
export default Logo