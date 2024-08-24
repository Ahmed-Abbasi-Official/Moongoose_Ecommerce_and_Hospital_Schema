import mongoose from 'mongoose';

const catogary = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Catogary = mongoose.model('Catogary', catogary);