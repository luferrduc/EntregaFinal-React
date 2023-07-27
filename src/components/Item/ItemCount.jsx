import { useState } from "react"


export const ItemCount = ({stock=0, onAdd}) => {

  const [count, setCount] = useState(1)

  const handleSubstraction = () => {
    setCount(Math.max(1, count - 1));
    
  }
  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  }
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex gap-3 items-center justify-center">
        <button onClick={handleSubstraction} className="bg-cyan-700 text-white px-5 py-1 rounded-lg font-semibold text-lg hover:bg-cyan-700/70">-</button>
        <span className="text-white font-semibold">{count}</span>
        <button onClick={handleSum} className="bg-cyan-700 text-white px-5 py-1 rounded-lg font-semibold text-lg hover:bg-cyan-700/70">+</button>
      </div>
      <button onClick={()=>{onAdd(count)}} disabled={!stock} className="block text-white bg-cyan-950 px-8 py-2 rounded-lg hover:bg-cyan-950/70 font-semibold" >Agregar</button>
    </div>
  )
}
