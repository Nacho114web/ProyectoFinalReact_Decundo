import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from  "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, title, author, cover, price, description, stock, category }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext);

    /*-----handler de evento para pasar a ItemCount-----*/
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, title, price};
        addItem (item, quantity);       
    };

    return (
        <div className="cardDetContainer">
            <p className="cardDetTitle"> { title }</p>
            <p className="cardDetAuthor">{ author }</p>
            <div className="cardDetails">
                <img className="cardDetCover" src={ `../images/${cover}` } alt={ title } />
                <div className="bookDetails">
                    <p className="cardDetPrice">${price}</p>
                    <p className="cardDetDescrip">{ description }</p>
                    <p className="cardDetCateg"><b>Categoría:</b> { category }</p>
                    <p className="cardDetStock">Stock disponible: { stock }</p>
                    { quantityAdded > 0 ? (<Link to = "/cart" className="button">Terminar Compra </Link>)
                     : 
                    (<ItemCount minimum={1} stock={stock} onAdd={ handleOnAdd } />)
                }                    
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;