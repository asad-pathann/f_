import { Post } from "../Model/Post.js";

export const addPost = async (req, res) => {
  const { user_id } = req.params;
  const { caption, background, PostImage } = req.body;

  const newPost = await Post.create({
    caption: caption,
    background,
    PostImage,
    user_id,
  });
  res.send(newPost);
};

export const getPost = async (req, res) => {
  const getAll = await Post.find();
  res.send(getAll);
};

export const getdata = async (req, res) => {
  const getdataAll = await Post.find().sort({ create: -1 });
  res.send(getdataAll);
};

const makeReaction = async (req, res) => {
  const { user_id, post_id } = req.params;
  const { emoji } = req.body;
  const findPost = await Post.findById(post_id);
  if (!findPost) {
    res.state(404);
    throw new Error("post Not found ");
  }
  findPost.likes.push({ type: emoji, id: user_id });
  res.send(findPost);
};
