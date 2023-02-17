const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// CREATE USER
const createUser = async (req, res) => {
  // res.json(req.body);
  const { firstName, lastName, email, password, role } = req.body;

  // generate salt password for password hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "This email already exists, please try again" });
    }
    if (!firstName || !lastName || !email || !password) {
      return res.json({ error: "Please fill in all fields" });
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    const token = await jwt.sign(
      { userId: user._id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );
    user.save();
    res
      .status(200)
      .json({ user: { firstName: user.firstName, email: user.email }, token });
  } catch (err) {
    console.log(err);
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ error: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ error: "Incorrect password" });
    }

    const token = await jwt.sign(
      { userId: user._id, firstName: user.firstName },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );

    res.status(200).json({ user: { firstName: user.firstName }, token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  loginUser,
};
