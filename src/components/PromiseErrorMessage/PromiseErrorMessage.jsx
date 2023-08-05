import "./PromiseErrorMessage.css";
import { Link } from "react-router-dom";

const PromiseErrorMessage = () => {
    return (        
        <div className="errorContainer">
            <h2>Hubo un problema al cargar los datos, intenta nuevamente en unos minutos</h2>
            <Link to="/" className="button">Volver a Inicio</Link>
        </div>
    ); 
};
    
export default PromiseErrorMessage;
