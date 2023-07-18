import {BsCart2} from 'react-icons/bs'

const CartWidget = () => {
  return (
    <button className='relative inline-flex items-center m-4'>
        <BsCart2 className='text-3xl text-white'/> 
        <span className="absolute inline-flex items-center justify-center w-[1.115rem] h-[1.115rem] text-[0.65rem] font-bold text-white bg-red-500 border-2 border-white rounded-full -bottom-2 -right-4 dark:border-gray-900">3</span>      
    </button>
  )
}

export default CartWidget


/*
Clases BADGE
.Z_ri7j {
    position: absolute;
    bottom: 10px;
    right: 2px
}

.zKOslY,.Z_ri7j {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: red;
    white-space: nowrap;
    min-width: 16px;
    height: 16px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 1.2rem;
    line-height: 1.1;
    color: #fff;
    padding: .5px 4px 0
}


*/