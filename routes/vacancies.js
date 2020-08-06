const express = require("express");
const router = express.Router();

const {
  create,
  get,
  jobEntryDashboard,
  jobEntryVacancies,
  getVacancyAutoNumber,
} = require("../controllers/vacancies");

// vacancies/job-entry-dashboard-counts
router.get("/job-entry-dashboard-counts", jobEntryDashboard);

// vacancies/get-vacancy-auto-number
router.get("/get-vacancy-auto-number", getVacancyAutoNumber);

// vacancies/job-entry-vacancies
router.post("/job-entry-vacancies", jobEntryVacancies);

// vacancies/:id
router.get("/:id", get);

// vacancies/
router.post("/", create);

module.exports = router;
