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
    PostImage: {
      type: String,
      default: "",
      required: false,
    },
    likes: {
      type: [{ type: "", id: mongoose.Schema.Types.ObjectId }],
      default: [],
      required: false,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);
export const Post = mongoose.model("Post", PostSechema);
