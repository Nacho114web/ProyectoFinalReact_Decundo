import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({id,title, price,quantity}) => {    
    const { removeItem } = useContext(CartContext);
           
    return (
        <div className="itemCartContainer">
            <p className="itemCartTitle">{ title }</p>
            <p className="itemCartPrice">Precio: ${ price }</p> 
            <p className="itemCartQuant">Cantidad: { quantity }</p> 
            <p className="itemCartSubt">Subtotal: ${ quantity*price }</p>          
            <button className="button" onClick={()=>removeItem(id)}>X</button> 
        </div>
    );
};

export default CartItem;