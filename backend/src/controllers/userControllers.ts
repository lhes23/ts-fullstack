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

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const user = await User.create({ name, age });
    return res.status(201).json({ message: "Success", user });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const user = await User.find({ _id });
    return res.status(201).json({ message: "Success", user });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const { name, age } = req.body;
    const user = await User.findByIdAndUpdate({ _id }, { name, age });
    return res.status(201).json({ message: "Success", user });
  } catch (error) {
    return res.status(401).json({ error });
  }
};
