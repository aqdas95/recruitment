const express = require("express");
const router = express.Router();

const { all } = require("../controllers/areas");

// areas
router.get("/", all);

module.exports = router;
