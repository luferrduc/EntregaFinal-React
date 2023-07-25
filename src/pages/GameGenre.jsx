import { useEffect, useState } from "react";
import { getGameByGenre, getGenre } from "../lib/games.request";
import ItemListContainer from "../components/Item/ItemListContainer";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { ContentWrap } from "../components/ContentWrap/ContentWrap";

export const GameGenre = () => {
  const { genreId } = useParams();

  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGameByGenre(genreId).then((res) => {
      getGenre(genreId).then((response) => {
        setGenre(response);
      });
      setIsLoading(false);
      setGames(res);
    });
  }, [genreId]);

  if (isLoading) return <Loading />;
  return (
    <ContentWrap>
      <h3 className="text-center text-3xl font-semibold text-white pb-5 mb-5">
        Juegos de {genre.name}
      </h3>
      <ItemListContainer products={games} />
    </ContentWrap>
  );
};
