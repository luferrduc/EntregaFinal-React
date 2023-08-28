import {FaHeart, FaRegHeart} from 'react-icons/fa'

export const WishListIcon = ({ isAdded=false }) => {

  return (
    isAdded ?
    <FaHeart className='text-red-600'/>
    :
    <FaRegHeart  className='text-red-600'/>
  )
}
