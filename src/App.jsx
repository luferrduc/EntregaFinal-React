import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { GameDetail } from "./pages/GameDetail";
import { GameGenre } from "./pages/GameGenre";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/genre/:name" element={<GameGenre />} />
    </Route>
  )
);

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
