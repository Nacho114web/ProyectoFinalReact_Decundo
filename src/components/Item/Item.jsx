import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, author, cover, price }) => {
    return (
        <div className="cardContainer">
            <p className="cardTitle">{ title }</p>
            <p>{ author }</p>
            <img className="cardCover" src={ `../images/${cover}` } alt={ title } />
            <p className="cardPrice">${ price }</p>            
            <Link to= { `/item/${ id }` } className="button">Ver Detalle </Link> 
        </div>
    );
};

export default Item;