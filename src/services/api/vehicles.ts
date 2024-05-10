import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "~/services/firebase";
import Ivehicle from "~/interfaces/vehicle";

function Vehicles() {
    const [vehicles, setVehicles] = useState<Ivehicle[]>([]);

    const fetchget = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "vehicles"));
            const newData: Ivehicle[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setVehicles(newData);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };

    useEffect(() => {
        fetchget();
    }, []);

    return { vehicles, fetchget };
}

export default Vehicles;
