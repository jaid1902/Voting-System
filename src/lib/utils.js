import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to DB");
  } catch (error) {
    console.log("DB connection error:", error);
    throw new Error(error);
  }
};
