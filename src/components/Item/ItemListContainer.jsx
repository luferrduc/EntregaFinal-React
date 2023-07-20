import { Item } from "./Item"


const ItemListContainer = ({ products }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-10 mx-auto">
      {products.map(game => {
        return <Item key={game.id} id={game.id} title={game.title} platform={game.platform} genres={game.genres} price={game.price} images={game.images} developers={game.developers} />
      })}
    </section>
  )
}

export default ItemListContainer