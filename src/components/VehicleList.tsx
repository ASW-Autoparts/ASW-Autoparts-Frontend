import React, { useEffect, useState } from "react";
import Vehicles from "~/services/api/vehicles"

function VehicleList() {
    const { vehicles, fetchget } = Vehicles();

    useEffect(() => {
        fetchget();
    }, []);

    return (
        <div className="container">
            <h1>Vehicle Data</h1>
            {vehicles.map((vehicle, i) => (
                <div key={i}>
                    <p>id: {vehicle.id}</p>
                    <p>Make: {vehicle.make}</p>
                    <p>model: {vehicle.model}</p>
                    <p>Year: {vehicle.year}</p>
                </div>
            ))}
        </div>
    );
}

export default VehicleList;
