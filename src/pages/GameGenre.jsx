import { useEffect, useState } from "react";
import { getGameByGenre } from "../lib/games.request";
import ItemListContainer from "../components/Item/ItemListContainer";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

export const GameGenre = () => {
    const { name } = useParams()
    console.log(name)
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getGameByGenre(name)
        .then(res => {
            setIsLoading(false)
            setGames(res)
        })
    }, [name])

    if (isLoading) return <Loading />
    return (
    <div className="flex w-full flex-grow flex-col bg-slate-700 p-20">
        <ItemListContainer products={games} /> 
    </div>
  );
};
