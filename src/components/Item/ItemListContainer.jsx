import { Item } from "./Item"


const ItemListContainer = ({ products }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-10">
      {products.map(game => {
        return <Item key={game.id} title={game.title} platform={game.platform} genres={game.genres} price={game.price} images={game.images} developers={game.developers} />
      })}
    </section>
  )
}

export default ItemListContainer