const express = require("express");
const router = express.Router();
const staticRouter = require("./staticPages");
const authMiddleware = require("../middlewares/authorize");
const authRouter = require("./auth");

const areaRouter = require("./areas");
const brandRouter = require("./brands");
const contactPersonRouter = require("./contactPersons");
const documentRouter = require("./documents");
const gradeRouter = require("./grades");
const hospitalRouter = require("./hospitals");
const hospitalSubsiteRouter = require("./hospitalSubSites");
const portalRouter = require("./portals");
const recruiterProfileRouter = require("./recruiterProfiles");
const specialityRouter = require("./specialities");
const vacancyRouter = require("./vacancies");
const vacancyAttachmentsRouter = require("./vacancyAttachments");

/* GET home page. */
const indexRouter = router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/page", staticRouter);
  app.use("/auth", authRouter);

  app.use("/portals", portalRouter);
  app.use("/hospitals", hospitalRouter);
  app.use(authMiddleware);

  app.use("/areas", areaRouter);
  app.use("/brands", brandRouter);
  app.use("/contact-persons", contactPersonRouter);
  app.use("/documents", documentRouter);
  app.use("/grades", gradeRouter);
  app.use("/hospital-sub-sites", hospitalSubsiteRouter);
  app.use("/recruiter-profiles", recruiterProfileRouter);
  app.use("/specialities", specialityRouter);
  app.use("/vacancies", vacancyRouter);
  app.use("/vacancy-attachments", vacancyAttachmentsRouter);
};
