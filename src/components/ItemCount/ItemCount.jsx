import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ minimum, stock, onAdd}) => {
    const [quantity,setQuantity] = useState(minimum);
    
    return (
        <div className="countContainer">
            <div className="counter">
                <button className="button" onClick={ ()=>{(quantity > 1) && setQuantity(quantity-1)} }>-</button>
                <p>{quantity}</p>
                <button className="button" onClick={ ()=>{(quantity < stock) && setQuantity(quantity+1)} }>+</button>                
            </div>
            <button className="button" onClick={ ()=>onAdd(quantity) } disabled={ !stock }>Agregar al Carrito</button>            
        </div>
    );
};

export default ItemCount;
