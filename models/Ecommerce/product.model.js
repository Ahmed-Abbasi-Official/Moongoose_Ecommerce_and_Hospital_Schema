import mongoose, { mongo } from 'mongoose';



const product = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catogary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Catogary',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', product);
