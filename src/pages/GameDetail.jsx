import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/games.request";
import { Loading } from "../components/Loading/Loading";

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
    <div className="flex w-full flex-grow flex-col bg-slate-700 p-20">
        <img src={game?.images[1]} alt="" width={300} />
    </div>
  );
};
