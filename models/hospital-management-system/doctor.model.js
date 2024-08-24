import mongoose from 'mongoose';

const workInHospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    workingHours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const doctor = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    workInHospital: {
      type: [workInHospitalSchema],
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctor);
