

export const ItemCount = ({stock, onAdd}) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex gap-3 items-center justify-center">
        <button className="bg-cyan-700 text-white px-5 py-1 rounded-lg font-semibold text-lg hover:bg-cyan-700/70">-</button>
        <span className="text-white">1</span>
        <button className="bg-cyan-700 text-white px-5 py-1 rounded-lg font-semibold text-lg hover:bg-cyan-700/70">+</button>
      </div>
      <button className="block text-white bg-cyan-950 px-8 py-2 rounded-lg hover:bg-cyan-950/70">Agregar</button>
    </div>
  )
}
