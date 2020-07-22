const express = require("express");
const router = express.Router();

const { all } = require("../controllers/grades");

// grades
router.get("/", all);

module.exports = router;
