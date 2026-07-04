import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    f_name: {
      type: String,
      required: [true, "Enter the first name"],
    },
    l_name: {
      type: String,
      required: [true, "Enter the last name"],
    },
    email: {
      type: String,
      required: [true, "Enter the email"],
      unique: true, // Email unique hona chahiye hamesha
    },
    date: {
      type: Number,
      required: [true, "Enter the date"],
    },
    month: {
      type: String,
      required: [true, "Enter the month"],
    },
    year: {
      type: Number,
      required: [true, "Enter the year"],
    },
    password: {
      type: String,
      required: [true, "Enter the password"],
    },
    otp: {
      type: String,
      default: null,
    },
    gander: {
      type: String,
      required: [true, "Enter the gender"],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
