import { useContext } from "react";
import cartimg from "./assets/cart.png";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <div className= { totalQuantity===0 ? "hiddenCart" : "shownCart"}>
                <img src={cartimg} alt="carrito de compras" />
                <span>{totalQuantity}</span>
            </div>
        </Link>
    );
};

export default CartWidget;