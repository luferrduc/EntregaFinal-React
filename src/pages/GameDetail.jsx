import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/games.request";
import { Loading } from "../components/Loading/Loading";
import { GenresTag } from "../components/Genres/GenresTag";
import { ItemCount } from "../components/Item/ItemCount";

export const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGameById(id).then((res) => {
      setIsLoading(false);
      setGame(res);
    });
  }, []);

  if (isLoading) return <Loading />
  return (
    <div className="flex w-full flex-grow bg-slate-700 p-20">
      <div className="container mx-auto">
        <div className="flex gap-10">
          <img src={game?.images[1]} alt="" className="w-[150px] sm:w-[300px] max-w-[400px] h-[50%]" />
          <article className="flex flex-col w-full gap-5">
              <h3 className="text-5xl font-bold my-0 mx-auto text-white p-4">{game?.title}</h3>
              <span className="flex gap-3 my-0 mx-auto">{game?.genres.map((genre)=>{
                  return <GenresTag key={genre.name} name={genre.name} id={genre.id} />
                })}
              </span>
              <div className="p-4 text-justify">
                <p className="text-white">{game.description}</p>
              </div>
              <ItemCount />
          </article>
        </div>
      </div>
    </div>
  );
};
