import mongoose from "mongoose";

async function connectDB(dbUrl) {
  await mongoose.connect(dbUrl);
}

export { connectDB };
