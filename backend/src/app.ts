import express, { Application } from "express";
import { config } from "dotenv";
import { errorHandler, httpErrorHandler } from "./errorHandlers";
import indexRoute from "./routes";
import userRoutes from "./routes/userRoutes";

// Initialize App
config();
const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRoute);
app.use("/api/users", userRoutes);

// Error Handlers
app.use(httpErrorHandler);
app.use(errorHandler);

// Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port : ${port}`));
