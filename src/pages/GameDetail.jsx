import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/games.request";
import { Loading } from "../components/Loading/Loading";
import { GenresTag } from "../components/Genres/GenresTag";

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
      <div className="container flex gap-10">
        <img src={game?.images[1]} alt="" width={300} />
        <article className="flex flex-col w-full">
            <h3 className="text-4xl font-bold my-0 mx-auto p-4">{game?.title}</h3>
            <p className="flex gap-3 my-0 mx-auto">{game?.genres.map((genre)=>{
                return <GenresTag key={genre} genre={genre} />
              })}</p>
            <div>
              <p>{game.description}</p>
            </div>
        </article>
      </div>
    </div>
  );
};
