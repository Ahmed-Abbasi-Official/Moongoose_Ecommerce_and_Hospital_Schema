import mongoose from 'mongoose';

const userSchemea = new mongoose.Schema(
  {
    // Normal Code

    // userName: String,
    // email: String,
    // age: Number,
    // Gender: String,
    // isActive:Boolean

    // Professinal code get rid from controller using suoerPower of Mongooose .

    userName: {
      type: String,
      // required: true,
      required: [true, 'userName is required'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      // required:true,
      required: [true, 'email must be valid'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required:true,
      required: [true, 'password is required'],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchemea);
