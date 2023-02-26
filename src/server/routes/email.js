const express = require("express");
const {
  getEmail,
  getEmails,
  createEmail,
  deleteEmail,
  updateEmail,
} = require("../controllers/email");

const router = express.Router();

// GET JOB/S
router.get("/emails", getEmails).get("/email/:id", getEmail);

// CREATE JOB
router.post("/email", createEmail);

// DELETE JOB
router.delete("/email/:id", deleteEmail);

// UPDATE JOB
router.patch("/email/:id", updateEmail);

module.exports = router;
