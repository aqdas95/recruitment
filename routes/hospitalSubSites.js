const express = require("express");
const router = express.Router();

const { all } = require("../controllers/hospitalSubSites");

// hospital-sub-sites
router.get("/", all);

module.exports = router;
