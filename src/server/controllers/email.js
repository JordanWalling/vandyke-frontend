const Email = require("../models/email");

// GET ALL EMAILS
const getEmails = async (req, res) => {
  try {
    const allEmails = await Email.find({});
    res.status(200).json(allEmails);
  } catch (err) {
    console.log(err);
  }
};

// GET A SINGLE EMAIL
const getEmail = async (req, res) => {
  const { params: _id } = req;
  try {
    const email = await Email.findOne({
      id: _id,
    });
    if (!email) {
      return res.json({ error: "Email not found" });
    }
    res.json(email);
  } catch (err) {
    console.log(err);
  }
};

// CREATE AN email
const createEmail = async (req, res) => {
  const { name, phoneNumber, message, userEmail } = req.body;

  if (!name) {
    return res.json({ error: "Please provide a name" });
  }
  if (!phoneNumber) {
    return res.json({ error: "Please provide a Phone Number" });
  }
  if (!message) {
    return res.json({ error: "please provide a message" });
  }
  if (!userEmail) {
    return res.json({ error: "please provide a message" });
  }
  try {
    const email = await Email.create({
      name,
      phoneNumber,
      message,
      userEmail,
    });
    email.save();
    res.status(200).json({ email });
  } catch (err) {
    console.log(err);
  }
};

// UPDATE A Email
const updateEmail = async (req, res) => {
  const {
    body: { name, phoneNumber, message, userEmail },
    params: { _id },
  } = req;

  try {
    if (email === "" || phoneNumber === "" || message === "" || name === "") {
      res.json({ error: "Please fill in all fields" });
    }

    const email = await Email.findOneAndUpdate(
      {
        _id,
      },
      req.body,
      { new: true }
    );

    if (!email) {
      return res.json({ error: "Email not found" });
    }

    res.json(email);
  } catch (err) {
    console.log(err);
  }
};

// DELETE A Email
const deleteEmail = async (req, res) => {
  const { _id } = req.params;

  try {
    const email = await Email.findByIdAndDelete({
      _id,
    });
    if (!email) {
      return res.json({ error: "Email not found" });
    }
    res.status(200).json(email);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getEmail,
  getEmails,
  createEmail,
  updateEmail,
  deleteEmail,
};
