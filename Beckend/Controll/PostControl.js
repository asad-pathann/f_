import { Post } from "../Model/Post.js";

export const addPost = async (req, res) => {
  const { user_id } = req.params;
  const { caption, background } = req.body;

  const newPost = await Post.create({
    caption: caption,
    background,
    user_id,
  });
  res.send(newPost);
};

export const addPostt = async (req, res) => {
  const { user_id } = req.params;

  const { caption, background } = req.params;

  const newPost = await Post.create({
    caption,
    background,
    user_id,
  });
  res.send(newPost);
};

export const getPost = async (req, res) => {
  const getAll = await Post.find();
  res.send(getAll);
};
