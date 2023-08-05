import { createContext, useState } from "react";
import swal from "sweetalert2";

export const CartContext = createContext({ cart:[] });

/*----------CUSTOM PROVIDER----------*/ 
export const CartProvider = ({ children }) => {   
    const [cart, setCart] = useState([]);    

    /*-----calcular total de unidades del carrito-----*/
    const totalQuantity = cart.reduce((acum, item) => acum + item.quantity, 0);

    /*-----calcular importe total del carrito-----*/
    const total = cart.reduce((acum, item) => acum + (item.quantity * item.price), 0);

    /*-----comprobar si el item está en el carrito-----*/
    const isInCart = itemId => {
        return cart.some(prod => prod.id === itemId)
    };

    /*-----mostrar alerta si se intenta agregar un item que ya está en carrito-----*/
    const showAlertItemDuplicated = () => {
        swal.fire({
            icon:"warning",
            iconColor:"#5f0db8",
            confirmButtonColor:"#5f0db8",
            title: "Este libro ya fue agregado",
            timer:3000
        });
    };

    /*-----agregar un item al carrito-----*/
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {           
            showAlertItemDuplicated();                       
        };
    };

    /*-----quitar un item del carrito-----*/
    const removeItem = itemId => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    /*-----limpiar todo el carrito-----*/
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

