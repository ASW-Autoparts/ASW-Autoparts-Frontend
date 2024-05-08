import React, { useEffect, useState } from "react";
// application
import { collection, getDocs } from "firebase/firestore";
import Ivehicle from "~/interfaces/vehicle";
import db from "~/services/firebase";

function VehicleList() {
    const [todos, setTodos] = useState<Ivehicle[]>([]);

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "vehicles"));
        const newData: Ivehicle[] = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTodos(newData);
        console.log("Eit X", todos, newData);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="container">
            <h1>Vehicle Data</h1>
            {todos.map((todo, i) => (
                <div key={i}>
                    <p>id: {todo.id}</p>
                    <p>Make: {todo.make}</p>
                    <p>model: {todo.model}</p>
                    <p>Year: {todo.year}</p>
                </div>
            ))}
        </div>
    );
}

export default VehicleList;
