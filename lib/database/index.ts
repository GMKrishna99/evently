import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// initialize cached variable
let cached = (global as any).mongoose || { conn: null, promise: null };
//exporting database
export const connectToDatabase = async () => {
  // checking if cached is connected
  if (cached.conn) return cached.conn;

  // Don't have mongodb URI
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  // if we have cached connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;

  return cached.conn;
};
