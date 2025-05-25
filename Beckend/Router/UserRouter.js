import express from "express";
import { Login, register } from "../Controll/UserControll.js";

export const UserRouter = express.Router();

UserRouter.post("/user-data", register);
UserRouter.post("/login", Login);
