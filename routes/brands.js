const express = require("express");
const router = express.Router();

const { all } = require("../controllers/brands");

// brands
router.get("/", all);

module.exports = router;
