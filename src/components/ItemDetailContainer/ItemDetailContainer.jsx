import { useEffect,useState } from "react";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../index";
import ItemDetail from "../ItemDetail/ItemDetail";
import PromiseErrorMessage from "../PromiseErrorMessage/PromiseErrorMessage";
import { useParams } from "react-router-dom";
import swal from "sweetalert2";


const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const { itemId } = useParams();

    useEffect (()=>{
        setLoading(true);
        /*-----obtener detalles de un item mediante su id-----*/
        const fetchProduct = async()=>{
            try {               
                const querySnapshot = await getDoc(doc(db, "books", itemId));
                const newData = querySnapshot.data();
                const newProduct = {id:querySnapshot.id, ...newData};
                setProduct(newProduct);
                setLoading(false);              
            }
            catch(error) {
                console.error(error);
                setLoading(false);
                setError(true);                
            }
        };
        fetchProduct();
    },[itemId]);

    if (loading) {
        return (swal.showLoading());
    } else {
        swal.close()
    };
    
    if (error) {return (<><PromiseErrorMessage /></>)};     

    return (
        <div className="itemDetailContainer">
            <ItemDetail { ...product } />
        </div>
    );
};

export default ItemDetailContainer;