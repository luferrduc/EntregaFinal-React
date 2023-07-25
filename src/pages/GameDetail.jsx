import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../lib/games.request";
import { Loading } from "../components/Loading/Loading";
import { GenresTag } from "../components/Genres/GenresTag";
import { ItemCount } from "../components/Item/ItemCount";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";

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

  if (isLoading) return <Loading />;
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
            <span className="mx-auto my-0 flex gap-3">
              {game?.genres.map((genre) => {
                return (
                  <GenresTag key={genre.name} name={genre.name} id={genre.id} />
                );
              })}
            </span>
            <div className="p-4 text-justify">
              <p className="text-white">{game.description}</p>
            </div>
            <ItemCount />
          </article>
        </div>
      </div>
    </ContentWrap>
  );
};
