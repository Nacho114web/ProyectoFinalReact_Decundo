import "./CheckoutForm.css";
import { useState } from "react";
import swal from "sweetalert2";

const CheckoutForm = ({ onConfirm }) => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmed,setEmailConfirmed] = useState("");

    /*-----handler del submit del formulario de checkout-----*/
    const handleConfirm = (e) => {
        e.preventDefault();

        /*----validar e-mail-----*/
        if (email !== emailConfirmed) {            
        swal.fire({
            icon: "warning",
            iconColor: "#5f0db8",
            confirmButtonColor: "#5f0db8",
            text: "La dirección de e-mail no coincide",            
        });
        } else {
        const userInfo = {name,phone,email};
        onConfirm(userInfo);
        };
    };

    /*-----FORMULARIO DE CHECKOUT-----*/
    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleConfirm}>
                <label className="label">                    
                    <input 
                        type="text" 
                        className="input"
                        value={ name }
                        onChange={ ({target}) => setName(target.value)}
                     />
                     Nombre y Apellido
                </label>
                <label className="label">                    
                    <input 
                        type="text" 
                        className="input"
                        value={ phone }
                        onChange={ ({target}) => setPhone(target.value)}
                     />
                     Teléfono                   
                </label>
                <label className="label">                    
                    <input 
                        type="email"
                        className="input"
                        value={ email }
                        onChange={ ({target}) => setEmail(target.value)}
                        required
                     />
                     E-mail                    
                </label>
                <label className="label">                    
                    <input 
                        type="email" 
                        className="input"
                        value={ emailConfirmed }
                        onChange={ ({target}) => setEmailConfirmed(target.value)}
                        required    
                     /> 
                     Confirmar E-mail                   
                </label>
                <input className="button" type="submit" value="Crear Orden" />                                            
            </form>
        </div>
    );
}

export default CheckoutForm;