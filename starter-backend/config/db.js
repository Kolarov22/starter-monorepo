import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.ATLAS_URI || "";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    await mongoose.connect(URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

export const db = mongoose.connect(URI);
