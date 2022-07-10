import { Request, Response } from "express";
import con from "../db";
import User from "../models/userModels";

const userData = new User();

const queryHandler = async (query: string, res: Response) => {
  con.query(query, (err, data) => {
    if (err) throw err;
    return res.status(201).json({ status: 201, message: "Success", data });
  });
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // await queryHandler(userData.find(), res);
    const query = userData.find();
    con.query(query, (err, data) => {
      if (err) throw err;
      return res.status(201).json({ status: 201, message: "Success", data });
    });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const addUser = (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    queryHandler(userData.create({ name, age }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const getSingleUser = (req: Request, res: Response) => {
  try {
    const paramsId = req.params.id;
    const id = Number(paramsId);
    queryHandler(userData.findById({ id }), res);
  } catch (error) {
    return res.status(401).json({ error });
  }
};
