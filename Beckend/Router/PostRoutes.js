import express from "express";
import { addPost, getPost } from "../Controll/PostControl.js";

export const PostRouter = express.Router();

PostRouter.post("/add-post/:user_id", addPost);

PostRouter.get("/get-data", getPost);
