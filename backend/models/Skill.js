import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 100 }
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);
