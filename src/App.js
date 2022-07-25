import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/CartContext/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartConfirm } from "./components/CartContainer/CartConfirm/CartConfirm";
import ErrorUrl from "./components/ErrorUrl/ErrorUrl";

function App() {
  return (
    
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/finish" element={<CartConfirm />} />
            <Route path="/*" element={<ErrorUrl />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    
  );
}

export default App;
