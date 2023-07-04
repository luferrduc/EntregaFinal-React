import Navbar from "./components/Navbar/Navbar"
import './App.css'
import ItemListContainer from "./components/Item/ItemListContainer"

function App() {


  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <ItemListContainer grettings={"Saludos"} />
      
    </div>
  )
}

export default App
