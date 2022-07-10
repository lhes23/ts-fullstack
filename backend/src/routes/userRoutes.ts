import express from "express";
import {
  addUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from "../controllers/userControllers";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router
  .route("/:id")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);

export default router;
