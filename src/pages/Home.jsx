import { useEffect, useState } from "react"
import { getGames } from "../lib/games.request"
import ItemListContainer from "../components/Item/ItemListContainer"
import { Loading } from "../components/Loading/Loading"



export const Home = () => {

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    getGames()
    .then(res=>{
      setIsLoading(false)
      setGames(res)
    })
  }, [])

  if (isLoading) return <Loading />
  return (
    <main className="flex flex-col flex-grow bg-slate-700 p-20 w-full">
      <ItemListContainer products={games} />
    </main>
  )
}
