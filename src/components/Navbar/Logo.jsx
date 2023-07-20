import { NavLink } from 'react-router-dom'
import logo from '../../assets/karakura2.svg'


const Logo = () => {
	return (
		<NavLink to={"/"}>
			<img src={logo} alt="Karakura store Logo" height={80} width={80}/>
		</NavLink>
	)
}
export default Logo