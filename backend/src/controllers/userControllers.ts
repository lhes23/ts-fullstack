import { Request, Response } from "express";
import User from "../models/userModels";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(201).json({ users });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

//   export const addUser = (req: Request, res: Response) => {
//     try {
//       const { name, age } = req.body;
//     } catch (error) {
//       return res.status(401).json({ error });
//     }
//   };

//   export const getSingleUser = (req: Request, res: Response) => {
//     try {
//       const paramsId = req.params.id;
//       const id = Number(paramsId);
//       queryHandler(userData.findById({ id }), res);
//     } catch (error) {
//       return res.status(401).json({ error });
//     }
//   };
