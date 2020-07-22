const express = require("express");
const router = express.Router();

const { all } = require("../controllers/specialities");

// specialities
router.get("/", all);

module.exports = router;
