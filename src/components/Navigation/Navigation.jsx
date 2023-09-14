import { NavLink } from "react-router-dom";
import logo from '../picture/logo.png'
import css from "./Navigation.module.css"


export const Navigation = () => {
       return (
      <div className={css.container}> 
        <img src={logo} alt="logo" className={css.img}/>
        <h2 className={css.title}>Rent car</h2>
        <nav className={css.navgation}>
          <NavLink to="/" className={css.link}>Home</NavLink>
          <NavLink to="catalog" className={css.link}>Catalog</NavLink>
          <NavLink to="favorites" className={css.link}>Favorites</NavLink>          
        </nav>
      </div>
    );
  };