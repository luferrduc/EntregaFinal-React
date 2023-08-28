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
import { CartProvider } from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { CartPage } from "./pages/CartPage";
import { LoginPage } from "./pages/LoginPage";
import { UserProvider } from "./state/User.context";
import { NotFound } from "./pages/NotFound";
import { RegisterPage } from "./pages/RegisterPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/game/:id" element={<GameDetail />}  />
      <Route path="/genre/:genreId" element={<GameGenre />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <UserProvider>
        <ThemeProvider>
          <CartProvider>
            <RouterProvider router={routes} />
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
