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
import  {CartProvider}  from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { CartPage } from "./pages/CartPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/genre/:genreId" element={<GameGenre />} />
      <Route path="/cart" element={ <CartPage /> }/>
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
