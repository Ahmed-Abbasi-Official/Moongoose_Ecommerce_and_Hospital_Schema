import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const user = new mongoose.Schema(
  {
    userName:
    {
      type:String,
      required:true,
      unique:true
    },
    email:
    {
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:
    {
      type:String,
      required:true,
      unique:true
    }
  }, { timestamps: true }
);

export const User = mongoose.model('User', user);
