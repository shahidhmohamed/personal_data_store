import mongoose from 'mongoose';

const PersonalDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: 'false'
    }
});

const PersonalData = mongoose.model('PersonalData', PersonalDataSchema);

export default PersonalData;
