import mongoose from "mongoose";

const PostSechema = mongoose.Schema(
  {
    caption: {
      type: String,
      required: false,
    },
    background: {
      startColor: {
        type: String,
        default: "#ffffff",
      },
      endColor: {
        type: String,
        default: "#ffffff",
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
