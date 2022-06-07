import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./screens/ItemListContainer/ItemListContainer";

function App() {
  return <><NavBar />
          <ItemListContainer />
            </>;
}

export default App;
