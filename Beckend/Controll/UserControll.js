import { User } from "../Model/UserModlle.js";
import bcrypt from "bcrypt";

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
  res.send(newUser);
};

// Login Data Controller
const SameEmail = await User.findine({ email });

export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("Enter the Filder ! ");
  }

  if (!SameEmail) {
    res.status(404);
    throw new Error("Email Invailed ! ");
  }
  if (await bcrypt.compare(password, SameEmail.password)) {
    res.send(SameEmail);
  } else {
    res.status(400);
    throw new Error("Incorrect Password  ");
  }
};
