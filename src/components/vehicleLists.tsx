import React, { useState, useEffect } from 'react';

interface Vehicle {
    Year: number;
    Make: string;
    Model: string;
}

const VehicleList: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/vehicles');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);  // แสดงข้อมูลที่ได้รับ
                setVehicles(data);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Vehicle List</h2>
            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>
                        {vehicle.Year} {vehicle.Make} {vehicle.Model}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
