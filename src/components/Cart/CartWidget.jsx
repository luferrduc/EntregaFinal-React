import {BsCart2} from 'react-icons/bs'

const CartWidget = () => {
  return (
    <button className='relative inline-flex items-center'>
        <BsCart2 className='text-3xl text-white'/> 
        <span className="absolute inline-flex items-center justify-center w-[1.115rem] h-[1.115rem] text-[0.65rem] font-bold text-white bg-red-500 border-2 border-white rounded-full -bottom-2 -right-4 dark:border-gray-900">3</span>      
    </button>
  )
}

export default CartWidget