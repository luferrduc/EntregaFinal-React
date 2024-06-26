import { useEffect, useState } from "react";
import { getGameByGenre, getGenre  } from "../lib/games.request";
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
      getGenre(genreId).then(res => setGenre(res))
      setIsLoading(false);
      setGames(res);
    });
  }, [genreId]);

  if (isLoading) return <Loading />;
  return (
    <ContentWrap>
      {games.length ? (
        <>
          <h3 className="mb-5 pb-5 text-center text-3xl font-semibold text-white">
            Juegos de {genre.name}
          </h3>
          <ItemListContainer products={games} />
        </>
      ) : (
        <h3 className="mb-5 pb-5 text-center text-3xl font-semibold text-white">
          No hay juegos en esta categoría
        </h3>
      )}
    </ContentWrap>
  );
};
