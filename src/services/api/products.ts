import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "~/services/firebase";
import Iproduct from "~/interfaces/product";

function Products() {
    const [products, setProducts] = useState<Iproduct[]>([]);

    const fetchget = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const newData: Iproduct[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(newData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchget();
    }, []);

    return { products, fetchget };
}

export default Products
