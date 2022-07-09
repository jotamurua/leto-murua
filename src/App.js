import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return <>
          <BrowserRouter>
          <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </CartProvider>
          </BrowserRouter>
            </>;
}

export default App;
