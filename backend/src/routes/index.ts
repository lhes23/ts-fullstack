import express from "express";
import { port } from "../app";

const router = express.Router();

router.get("/", (req, res) => res.send(`Server Running on port : ${port}`));

export default router;
