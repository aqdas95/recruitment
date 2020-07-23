const express = require("express");
const router = express.Router();

const { all } = require("../controllers/portals");

// portals
router.get("/", all);

module.exports = router;
