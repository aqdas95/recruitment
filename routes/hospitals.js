const express = require("express");
const router = express.Router();

const { all } = require("../controllers/hospitals");

// hospitals
router.get("/", all);

module.exports = router;
