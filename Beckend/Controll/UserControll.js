import { User } from "../Model/UserModlle.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { sendOtp } from "../extra/sendOtp.js";

// bcrypt  jwt
export const register = async (req, res) => {
  try {
    const { f_name, l_name, email, password, date, month, year, gander } =
      req.body;

    // 1. Validation check
    if (
      !f_name ||
      !l_name ||
      !password ||
      !email ||
      !date ||
      !year ||
      !gander
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // 2. Check existing email
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // 3. Generate OTP
    let otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // 4. Hash Password
    const hashPassword = await bcrypt.hash(password, 10);

    // 5. Create New User
    const newUser = await User.create({
      f_name,
      l_name,
      email,
      password: hashPassword,
      gander,
      otp,
      date,
      year,
      month,
    });

    // 6. Send OTP Email
    sendOtp({ email, otp });

    // 7. 10 Minutes baad OTP automatic null karne ke liye timeout
    setTimeout(async () => {
      try {
        await User.findOneAndUpdate({ email }, { otp: null });
        console.log(`OTP expired for ${email}`);
      } catch (err) {
        console.log("Timeout OTP error:", err);
      }
    }, 600000);

    // 8. Final Single Response (Sirf ek baar data bhejenge)
    return res.status(201).json({
      _id: newUser._id,
      f_name: newUser.f_name,
      l_name: newUser.l_name,
      email: newUser.email,
      gander: newUser.gander,
      date: newUser.date,
      month: newUser.month,
      year: newUser.year,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
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
    checkSameEmail.password,
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
    expiresIn: "60d",
  });
};

export const GetallUser = async (req, res) => {
  const alluser = await User.find();
  res.send(alluser);
};

export const UserInfo = async (req, res) => {
  const { user_id } = req.params;

  const UserInfo = await User.findById(user_id);
  res.send(UserInfo);
};
