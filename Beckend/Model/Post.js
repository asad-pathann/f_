import mongoose from "mongoose";

const PostSechema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: false,
    },
    bcakground: {
      startColor: {
        type: String,
        default: "#fff",
      },
      endColor: {
        type: String,
        default: "#fff",
      },
      image: {
        type: String,
        default: "",
      },
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);
export const Post = mongoose.model("Post", PostSechema);
