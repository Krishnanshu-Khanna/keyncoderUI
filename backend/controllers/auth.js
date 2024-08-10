import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const EMAIL_ID = process.env.EMAIL_ID;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;

export const register = async (req, res) => {
  try {
    const {
      type,
      name,
      email,
      password,
      phone,
      college,
      yearOfGraduation,
      programmeEnrolled,
      coursesAccessed,
    } = req.body; // req body is destructured.

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds); // salt for hashing is generated
    const passwordHash = await bcrypt.hash(password, salt); // hashed password is created.

    const newUser = new User({
      type,
      name,
      email,
      password: passwordHash,
      phone,
      college,
      yearOfGraduation,
      programmeEnrolled,
      coursesAccessed,
    }); // here the User mongoose schema is invoked and hashed password is stored

    const savedUser = await newUser.save(); // this new user is stored in database

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message, msg: "error in registering" });
  }
};

// Login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // req body is destructed

    const user = await User.findOne({ email: email }); // database search is done using key email === req.body.email

    if (!user) return res.status(400).json({ msg: "User does not exist" }); // if no database match is found error thrown of non-existent user

    const isMatch = await bcrypt.compare(password, user.password); // checks the normal password with hashed password

    if (!isMatch) return res.status(400).json({ msg: "Password doesnt match" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // function to create the jwt token

    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_APP_PASSWORD,
  },
});

export const forgot_password = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("No account with that email address exists.");
    }

    // Generate a reset token
    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email
    const mailOptions = {
      to: user.email,
      from: EMAIL_ID,
      subject: "Password Reset",
      text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            http://${req.headers.host}/reset-password/${token}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.`,
    };

    await transporter.sendMail(mailOptions);

    res.send(
      "An email has been sent to " + user.email + " with further instructions."
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

export const reset_password = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .send("Password reset token is invalid or has expired.");
    }

    user.password = password; // You should hash the password before saving it
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.send("Password has been successfully reset.");
  } catch (error) {
    res.status(500).send(error);
  }
};
