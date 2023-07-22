import { useEffect, useState } from "react";
import { getGameByGenre } from "../lib/games.request";
import ItemListContainer from "../components/Item/ItemListContainer";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

export const GameGenre = () => {
    const { genreId } = useParams()
    
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getGameByGenre(genreId)
        .then(res => {
            console.log(res)
            setIsLoading(false)
            setGames(res)
        })
    }, [genreId])

    if (isLoading) return <Loading />
    return (
    <div className="flex w-full flex-grow flex-col bg-slate-700 p-20">
        <ItemListContainer products={games} /> 
    </div>
  );
};
