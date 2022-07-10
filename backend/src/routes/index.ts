import express from "express";

const router = express.Router();

const port = process.env.PORT || 4000;
router
  .route("/")
  .get((req, res) => res.send(`Server Running on port : ${port}`));

export default router;
