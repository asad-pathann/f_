import express from "express";
import {
  AddComment,
  addPost,
  getPost,
  getReact,
  // getReaction,
  makeReact,
} from "../Controll/PostControl.js";
import { authHandler } from "../ModelError/authMiddler.js";

export const PostRouter = express.Router();

PostRouter.post("/add-post/:user_id", addPost);

PostRouter.get("/get-data", getPost);
PostRouter.post("/add-like/:post_id/:user_id", makeReact);
PostRouter.get("/GetLike/:post_id", getReact);
PostRouter.post("/addComment/:post_id/:user_id", AddComment);
