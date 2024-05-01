import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IVehicle } from '~/interfaces/vehicle';


const VehicleList: React.FC = () => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/vehicles');
                console.log(response.data);  // แสดงข้อมูลที่ได้รับ
                setVehicles(response.data);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div>
            <h2>Vehicle List</h2>
            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>
                        {vehicle.year} {vehicle.make} {vehicle.model}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
