import express from 'express';
import { Vehicle } from '../models/Vehicle';

const router = express.Router();

// GET all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        if (vehicles.length > 0) {
            res.json(vehicles);
        } else {
            res.status(404).json({ message: 'No vehicles found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
