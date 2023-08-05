import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
    const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="emptyCart">
                <h1>El carrito está vacío</h1>
                <Link to="/" className="button">Ver Libros</Link>
            </div>
        );
    };

    return (
        <div className="cart">
            {cart.map(prod => <CartItem key={prod.id}{...prod} />)}
            <h1 className="totalCart">Total: ${total}</h1>
            <div className="cartControls">
                <button onClick={() => clearCart()} className="button">Limpiar Carrito</button>
                <Link to="/checkout" className="button">Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;