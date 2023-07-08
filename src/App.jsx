import Navbar from "./components/Navbar/Navbar"
import './App.css'
import ItemListContainer from "./components/Item/ItemListContainer"
import { Footer } from "./components/Footer/Footer"

function App() {


  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Navbar />
      <main className="flex flex-col flex-grow bg-gradient-to-b from-[#f2f2f2] to-white p-10 w-full">
        <ItemListContainer grettings={"Welcome to Karakura Store"} />
      </main>
      <Footer />
    </div>
  )
}

export default App
