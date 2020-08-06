const express = require("express");
const router = express.Router();

const { all, create } = require("../controllers/contactPersons");

// contact-persons
router.get("/", all);

// contact-persons
router.post("/", create);

module.exports = router;
