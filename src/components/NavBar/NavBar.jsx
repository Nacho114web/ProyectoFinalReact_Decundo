import "./NavBar.css";
import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBarContainer">
            <Link to="/">
                <img className="logo" src={logo} alt="logo de LeoMás" />
            </Link>
            <NavLink to={"category/nuevo"} className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"}>Libros Nuevos</NavLink>
            <NavLink to={"category/e-book"} className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"}>e-Books</NavLink>
            <NavLink to={"category/usado"} className={({ isActive }) => isActive ? "activeNavBarButton" : "navBarButton"}>Libros Usados</NavLink>
            <CartWidget />
        </nav>
    );
};

export default NavBar;