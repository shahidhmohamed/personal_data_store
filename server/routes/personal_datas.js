// routes/personal_datas.js
import express from 'express';
import PersonalData from '../models/personal_data.js';

const router = express.Router();

// POST route to create a new personal data entry
router.post('/', async (req, res) => {
    const personalData = new PersonalData({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });

    try {
        const newPersonalData = await personalData.save();
        res.status(201).json(newPersonalData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// New GET route to fetch all personal data
router.get('/', async (req, res) => {
    try {
        const personalDataList = await PersonalData.find();
        res.status(200).json(personalDataList);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE route
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedData = await PersonalData.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default router;
