import mongoose from 'mongoose';

const patient = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dignoseWith: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patient);
