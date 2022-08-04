import Pizzas from "./components/Pizzas.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import PizzaPage from "./pages/PizzaPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
