import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  photoURL: {
    type: String,
    trim: true,
  },
});

export const User = mongoose.model("User", userSchema);
