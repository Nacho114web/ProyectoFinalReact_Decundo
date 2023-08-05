import "./Checkout.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import PromiseErrorMessage from "../PromiseErrorMessage/PromiseErrorMessage";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../index";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {
    const [loading,setLoading] = useState(false);
    const [orderId,setOrderId] = useState("");
    const [error,setError] = useState(false);

    const { cart, total, clearCart } = useContext(CartContext)

    /*-----crear orden con datos de items en el carrito y usuario/comprador-----*/
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const order = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: serverTimestamp(),
            };            
            const ordersRef = collection (db,"orders");
            const orderAdded=await addDoc(ordersRef, order);
            setOrderId(orderAdded.id);                        
            setLoading(false)
            clearCart();        
        }
        catch(error) {
            console.error(error)
            setLoading(false);
            setError(true);
        }
    };

    if (loading) { 
        return <h1>Tu orden se está generando...</h1>
    };

    if (error) {
        return (<><PromiseErrorMessage /></>
        )
     };

     /*-----mostrar id de orden cuando se haya creado-----*/
     if (orderId) {
        return ( 
        <div className="idMessageContainer">   
            <h1>El ID de tu orden es: {orderId}</h1>
            <Link to="/" className="backButton">Volver al Catálogo</Link>
        </div> 
        );
    };   

return(
    <div>
        <h1>Ingresa tus datos para generar Orden de Compra</h1>
        <CheckoutForm onConfirm={ createOrder } />
    </div>    
);    
};

export default Checkout;