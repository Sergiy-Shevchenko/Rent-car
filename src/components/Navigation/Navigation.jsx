import { NavLink } from "react-router-dom";
import logo from '../picture/logo.png'


export const Navigation = () => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <div 
    //   className={css.navi}
      >
        <img 
        // className={css.img} 
        src={logo} alt="logo" />
        <h2 
        // className={css.title}
        >Rent car</h2>
        <nav 
        // className={css.list}
        >
          <NavLink 
        //   className={css.item} 
          to="/">Home</NavLink>
          <NavLink 
            // className={css.item} 
            to="phonebook">Catalog</NavLink>
          
        </nav>
      </div>
    );
  };