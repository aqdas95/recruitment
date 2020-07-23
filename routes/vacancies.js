const express = require("express");
const router = express.Router();

const {
  get,
  jobEntryDashboard,
  jobEntryVacancies,
} = require("../controllers/vacancies");

// vacancies/job-entry-dashboard-counts
router.get("/job-entry-dashboard-counts", jobEntryDashboard);

// vacancies/job-entry-vacancies
router.post("/job-entry-vacancies", jobEntryVacancies);

// vacancies/:id
router.get("/:id", get);

module.exports = router;
