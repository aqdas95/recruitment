const express = require("express");
const router = express.Router();

const { all } = require("../controllers/recruiterProfiles");

// recruiter-profiles
router.get("/", all);

module.exports = router;
