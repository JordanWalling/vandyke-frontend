const express = require("express");

const router = express.Router();

// controller functions
const { createUser, loginUser } = require("../controllers/user");

// CREATE USER
router.post("/create-user", createUser);

// LOGIN USER
router.post("/login", loginUser);

module.exports = router;
