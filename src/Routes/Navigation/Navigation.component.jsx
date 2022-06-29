import { Fragment } from "react";
import {Outlet, NavLink} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/083 crown.svg';
import './Navigation.style.scss';
const Navigation = () =>{
    return(
      <Fragment>
        <div className="navigation">
          
            <NavLink className='logo-container' to="/">
                 <div><Logo className='logo' /></div>
            </NavLink>
         
          <div className="nav-links-container">
            <NavLink
            className="nav-link"
            to="/shop"
            >
            Shop
            </NavLink>
            <NavLink
            className="nav-link"
            to="/auth"
            >
            Sign In
            </NavLink>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }
  
export default Navigation;