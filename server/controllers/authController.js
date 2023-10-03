const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const crypto = require("crypto");
const sendEmail = require("../utils/email");
const { sendOtp, verifyOtp } = require("../utils/twilio");
const { issueToken } = require("../utils/token");
require("dotenv").config();

exports.register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone)
    throw new Error("Missing Credentials");
  try {
    const oldUser = await User.findOne({ email: req.body.email });
    if (oldUser) {
      throw new Error("Email Address Already exists");
    }
    const user = new User({
      name,
      email,
      password,
      phone: `+91${phone}`,
    });

    await user.save();

    const token = issueToken(res, user);

    return res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (err) {
    return res.json({
      status: "error",
      message: err.message,
    });
    // console.log(err.message);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Missing Credentials");

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.verifyPassword(password, user.password))) {
      throw new Error("Incorrect email or password!");
    }

    user.password = undefined;

    issueToken(res, user);
    const token = issueToken(res, user);

    return res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      throw new Error("You are not logged in! Please Log in again!");
    }

    // Verifying the token and decrypting it with the public key
    //will return the payload associated with the JWT
    const decodedUser = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    // console.log(decodedUser);

    // finding user from the database with the decoded id

    const user = await User.findOne({ _id: decodedUser.sub });

    // console.log(user)
    if (!user) {
      throw new Error("The user belonging to this token does no longer exist.");
    }

    //adding the user to the request
    req.user = user;
    next();
  } catch (error) {
    res.json(error.message);
  }
};

exports.logout = (req, res, next) => {
  try {
    res.cookie("jwt", "logged out", {
      expires: new Date(Date.now() + 10 * 1000), //expires in 10 seconds
      httpOnly: true,
    });

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("There is no user existing with this email.");
    }
    const resetToken = user.createResetToken();
    await user.save({ validateBeforeSave: false });
    try {
      await sendEmail(
        user,
        { title: "Reset Password", token: resetToken },
        "resetPassword"
      );

      next();
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      throw new Error("There was an error sending the email.");
    }
  } catch (err) {
    return res.json({
      status: "error",
      message: err.message,
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.body.token)
      .digest("hex");
    const user = await User.findOne({ passwordResetToken: hashedToken });
    if (!user) {
      throw new Error("Token is invalid or has expired. Please try again");
    }
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    issueToken(res, user);
    next();
  } catch (err) {
    return res.json({
      status: "error",
      message: err.message,
    });
  }
};

exports.verifyOTP = async (req, res, next) => {
  const { otp } = req.body;
  // console.log(otp, res.locals.id);
  const user = await User.findById(res.locals.id);
  verifyOtp(user.phone, otp);
  // res.redirect("/dashboard");
};
