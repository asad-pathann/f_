import express from "express";
import { register } from "../Controll/UserControll.js";

export const UserRouter = express.Router();

UserRouter.post("/user-data", register);
