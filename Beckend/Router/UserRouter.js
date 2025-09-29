import express from "express";
import { GetallUser, Login, register } from "../Controll/UserControll.js";

export const UserRouter = express.Router();

UserRouter.post("/user-data", register);
UserRouter.post("/login", Login);
UserRouter.get("/get-user", GetallUser);
