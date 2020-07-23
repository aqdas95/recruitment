const express = require("express");
const router = express.Router();

const { get } = require("../controllers/documents");

// documents/:id
router.get("/:id", get);

module.exports = router;
