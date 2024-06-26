import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/games.request";
import { Loading } from "../components/Loading/Loading";
import { GenresTag } from "../components/Genres/GenresTag";
import { ItemCount } from "../components/Item/ItemCount";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";
import { useCartContext } from "../state/Cart.context";

export const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { addProduct, cantidadProduct } = useCartContext();

  const handleAddProduct = (cantidad) => {
    addProduct(game, cantidad);
  };
  useEffect(() => {
    getGameById(id).then((res) => {
      setIsLoading(false);
      setGame(res);
    });
  }, []);

  if (isLoading) return <Loading />;
  if(!Object.keys(game).length) return

  return (
    <ContentWrap>
      <div className="container mx-auto pt-5 md:pt-0">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <img
            src={game?.images[1]}
            alt=""
            className="mx-auto h-[50%] w-[150px] max-w-[400px] sm:w-[300px]"
          />
          <article className="flex w-full flex-col gap-5">
            <h3 className="mx-auto my-0 p-4 text-2xl font-bold text-white md:text-5xl">
              {game?.title}
            </h3>
            <span className="mx-auto my-0 flex flex-wrap gap-3">
              {game?.genres.map((genre) => {
                return (
                  <GenresTag key={genre.id} name={genre.name} id={genre.id} />
                );
              })}
            </span>
            <div className="p-4 text-justify flex flex-col gap-5">
              <p className="text-white">{game.description}</p>
              <p className="font-bold text-white text-2xl text-center">Precio: ${game.price.toLocaleString('es-CL')}</p>
            </div>
            <ItemCount stock={game.stock - (cantidadProduct(game.id))} onAdd={handleAddProduct} />
          </article>
        </div>
      </div>
    </ContentWrap>
  );
};
