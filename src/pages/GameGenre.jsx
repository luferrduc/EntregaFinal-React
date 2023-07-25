import { useEffect, useState } from "react";
import { getGameByGenre } from "../lib/games.request";
import ItemListContainer from "../components/Item/ItemListContainer";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";

export const GameGenre = () => {
  const { genreId } = useParams();

  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGameByGenre(genreId).then((res) => {
      setIsLoading(false);
      setGames(res);
    });
  }, [genreId]);

  if (isLoading) return <Loading />;
  return (
    <ContentWrap>
      <ItemListContainer products={games} />
    </ContentWrap>
  );
};
