import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Vehicle {
    id: string;
    name: string;
    make: string;
}

async function fetchDataFromFirestore(): Promise<Vehicle[]> {
    const querySnapshot = await getDocs(collection(db, "vehicles"));
    const data: Vehicle[] = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Vehicle);
    });
    return data;
}

const VehicleList: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setVehicles(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>My Firebase Data</h1>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.id}>
                        <p>{vehicle.make}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
