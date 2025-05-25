import { User } from "../Model/UserModlle.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { f_name, l_name, email, password, date, month, year, gander } =
    req.body;

  if (!f_name || !l_name || !password || !email || !date || !year || !gander) {
    res.status(400);
    throw new Error("Enter hte Fieled ! ");
  }

  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    res.status(404);
    throw new Error("Email ALready");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    f_name,
    l_name,
    email,
    password: hashPassword,
    gander,
    date,
    year,
    month,
  });
  res.send({
    _id: newUser?._id,
    f_name: newUser?.f_name,
    l_name: newUser?.l_name,
    password: newUser?.password,
    date: newUser?.date,
    year: newUser?.year,
    month: newUser?.month,
    gander: newUser?.gander,
    email: newUser?.email,
    token: await generateToken(newUser?._id),
  });
};

// Login Data Controller
export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("inter the Feiled");
  }

  const checkSameEmail = await User.findOne({ email });
  if (!checkSameEmail) {
    res.status(404);
    throw new Error("Envalied Email");
  }
  const unhashPasssword = await bcrypt.compare(
    password,
    checkSameEmail.password
  );
  if (unhashPasssword) {
    res.send({
      _id: checkSameEmail?._id,
      f_name: checkSameEmail?.f_name,
      l_name: checkSameEmail?.l_name,
      password: checkSameEmail?.password,
      date: checkSameEmail?.date,
      year: checkSameEmail?.year,
      month: checkSameEmail?.month,
      gander: checkSameEmail?.gander,
      email: checkSameEmail?.email,
      token: await generateToken(checkSameEmail?._id),
    });
  } else {
    res.status(404);
    throw new Error("incorect Password");
  }
};

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });
};
