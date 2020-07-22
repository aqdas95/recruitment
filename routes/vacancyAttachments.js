const express = require("express");
const router = express.Router();

const { get } = require("../controllers/vacancyAttachments");

// vacancy-attachments/:id
router.get("/:id", get);

module.exports = router;
