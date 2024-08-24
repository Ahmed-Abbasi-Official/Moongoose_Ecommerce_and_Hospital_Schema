import mongoose from 'mongoose';

const hospital = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    reviews: [
      {
        Patient: {
          type: String,
          required: true,
        },
      },
      {
        review: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospital);
