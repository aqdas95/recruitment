const express = require("express");
const router = express.Router();

const { all, create } = require("../controllers/portals");

// portals
router.get("/", all);

// portals
router.post("/", create);

module.exports = router;
