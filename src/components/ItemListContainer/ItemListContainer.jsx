import ItemList from "../ItemList/ItemList";
import PromiseErrorMessage from "../PromiseErrorMessage/PromiseErrorMessage";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../index";
import swal from "sweetalert2";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        /*----------traer colección de Firebase, completa o por categorías----------*/         
        const collectionRef = categoryId
            ? query(collection(db, "books"), where("category", "==", categoryId))
            : collection(db, "books");
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collectionRef);
                const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(newData);
                setLoading(false);
            }
            catch (error) {
                console.error(error);                                
                setLoading(false);
                setError(true);                
            }
        };
        fetchData();
    }, [categoryId]);    

    if (loading) {
        return (swal.showLoading());
    } else {
        swal.close();        
    };

    if (error) {return (<><PromiseErrorMessage /></>)};

    return (
        <div className="container">
            <h1 className="greetingMsg">{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
