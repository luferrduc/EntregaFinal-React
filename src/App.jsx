import {useState, useEffect} from 'react'
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import ItemListContainer from "./components/Item/ItemListContainer"
import { Footer } from "./components/Footer/Footer"
import {getGames} from "./lib/games.request"

function App() {
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    getGames()
    .then(res=>{
      setIsLoading(false)
      setGames(res)
    })
  }, [])

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Navbar />
      <main className="flex flex-col flex-grow bg-gradient-to-b from-[#f2f2f2] to-white p-10 w-full">
        { isLoading ? <h3>Cargando...</h3> : <ItemListContainer products={games} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
