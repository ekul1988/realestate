import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If db is already connected, don't connect again.
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  // Connect to mongo db
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
