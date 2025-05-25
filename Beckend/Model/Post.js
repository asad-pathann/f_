import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  Comment: {
    type: Array,
    default: [],
    required: false,
  },
});

export const Posts = mongoose.model("Posts", PostSchema);
