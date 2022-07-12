import React from "react";
import "./NavBar.css"
import { Link , NavLink} from "react-router-dom";
import { useContext } from "react";
import { CartWidget } from "./CartWidget/CartWidget";
import { CartContext } from "../CartContext/CartContext";


export const NavBar = () => {
  const {cart } = useContext(CartContext)
    return <nav className="menu">
      <div className="boton">
        <button>
          <ion-icon name="water"></ion-icon>
        </button>
        <button>
          <ion-icon name="cafe"></ion-icon>
        </button>
      </div>
      <Link to="/"><button className="letra">LETO BREW LAB</button></Link>
      <ul className="menu-list">
        <li className="item"><NavLink to='/category/bean' className={({isActive}) => isActive? 'currentcategory' : ''}><button>CAFÉ</button></NavLink></li>
        <li className="item"><NavLink to='/category/elab' className={({isActive}) => isActive? 'currentcategory' : ''}><button>ELABORACIONES</button></NavLink></li>
      </ul>
       <CartWidget  /> 
  </nav> 
}