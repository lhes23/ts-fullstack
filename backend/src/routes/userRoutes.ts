import express from "express";
import {
  addUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from "../controllers/userControllers";

const router = express.Router();

// router.route("/").get(getAllUsers);
router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getSingleUser).put(updateSingleUser);

export default router;
