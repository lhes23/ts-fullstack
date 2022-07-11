import express, { Application } from "express";
import { config } from "dotenv";
import { errorHandler, httpErrorHandler } from "./errorHandlers";
import cors from "cors";
import indexRoute from "./routes";
import userRoutes from "./routes/userRoutes";
import dbConnect from "./db";

// Initialize App
config();
dbConnect();
const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", indexRoute);
app.use("/api/users", userRoutes);

// Error Handlers
app.use(httpErrorHandler);
app.use(errorHandler);

// Server
export const port: string | number = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port : ${port}`));
