import mongoose from 'mongoose';

const medical_record = new mongoose.Schema({}, { timestamps: true });

export const Medical_Record = mongoose.model('Medical_Record', medical_record);
