import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: [true, "inter the f_name"],
    },
    l_name: {
      type: String,
      required: [true, "inter the f_name"],
    },
    email: {
      type: String,
      required: [true, "inter the f_name"],
    },
    date: {
      type: Number,
      required: [true, "inter the f_name"],
    },
    month: {
      type: String,
      required: [true, "inter the f_name"],
    },
    year: {
      type: Number,
      required: [true, "inter the f_name"],
    },
    password: {
      type: String,
      required: [true, "inter the f_name"],
    },
    gander: {
      type: String,
      required: [true, "inter the f_name"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
