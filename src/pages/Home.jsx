import { useEffect, useState } from "react"
import { getGames } from "../lib/games.request"
import ItemListContainer from "../components/Item/ItemListContainer"
import { Loading } from "../components/Loading/Loading"
import { ContentWrap } from "../components/ContentWrap/ContentWrap"



export const Home = () => {

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    // cargarData()
    getGames()
    .then(res=>{
      setIsLoading(false)
      setGames(res)
    })
  }, [])

  if (isLoading) return <Loading />

  return (
      <ContentWrap>
        <ItemListContainer products={games} />
      </ContentWrap> 
  )
}
