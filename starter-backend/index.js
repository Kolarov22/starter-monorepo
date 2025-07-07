import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { db } from "./config/db.js";
import { teamsRouter } from "./routes/Teams.js";

const PORT = process.env.PORT || 3000;
const app = express();

db.then(() => {
  console.log("Connected to MongoDB successfully!");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.use(express.json());
app.use(cors());
app.use("/teams", teamsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
