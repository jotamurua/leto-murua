import React from "react";
import "./NavBar.css"
import { Link , NavLink} from "react-router-dom";
import { CartWidget } from "./CartWidget/CartWidget";


export const NavBar = () => {
    return <nav className="menu">
      <div className="boton">
        <button>
        <NavLink to='/category/elab' className={({isActive}) => isActive? 'currentcategory' : ''}> <ion-icon name="water"></ion-icon></NavLink>
        </button>
        <button>
        <NavLink to='/category/bean' className={({isActive}) => isActive? 'currentcategory' : ''}><ion-icon name="cafe"></ion-icon></NavLink>
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