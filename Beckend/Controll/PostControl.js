import { Post } from "../Model/Post.js";

export const addPost = async (req, res) => {
  const { user_id } = req.params;
  const { caption, background, postImage } = req.body;

  const newPost = await Post.create({
    caption: caption,
    background,
    postImage,
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

export const makeReact = async (req, res) => {
  try {
    const { user_id, post_id } = req.params;
    const { emoji } = req.body;

    if (!emoji) {
      return res.status(400).json({ message: "Emoji is required!" });
    }

    const findpost = await Post.findById(post_id);
    if (!findpost) {
      return res.status(404).json({ message: "Post not found!" });
    }

    // Check if user already reacted with any emoji
    const existingReactionIndex = findpost.likes.findIndex(
      (item) => item.id === user_id
    );

    if (existingReactionIndex === -1) {
      // User hasn't reacted yet - add new reaction
      findpost.likes.push({ type: emoji, id: user_id });
    } else if (findpost.likes[existingReactionIndex].type === emoji) {
      // User is clicking the same emoji again - remove reaction
      findpost.likes.splice(existingReactionIndex, 1);
    } else {
      // User is changing their reaction - update emoji type
      findpost.likes[existingReactionIndex].type = emoji;
    }

    await findpost.save();
    res.status(200).json(findpost);
  } catch (error) {
    console.error("Error in makeReact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getReact = async (req, res) => {
  try {
    const { post_id } = req.params;
    const findPost = await Post.findById(post_id);
    if (!findPost) {
      res.send(402);
      throw new Error("Post ID is  not found ! ");
    }
    res.send(findPost.likes);
  } catch (error) {
    console.log(error, "try catch error");
  }
};
