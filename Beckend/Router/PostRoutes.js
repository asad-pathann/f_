import express from "express";
import {
  addPost,
  getPost,
  getReact,
  // getReaction,
  makeReact,
} from "../Controll/PostControl.js";

export const PostRouter = express.Router();

PostRouter.post("/add-post/:user_id", addPost);

PostRouter.get("/get-data", getPost);
PostRouter.post("/add-like/:post_id/:user_id", makeReact);
PostRouter.get("/GetLike/:post_id", getReact);
