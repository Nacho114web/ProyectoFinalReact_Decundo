import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cart from  "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a LeO Más"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos a LeO Más"} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1 className="notFound404">Error 404 Page Not Found</h1>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
};

export default App;
