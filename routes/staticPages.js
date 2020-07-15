const express = require("express");
const router = express.Router();
// const tutorialVideos = require("./tutorialVideo");
// const faq = require("./faq");

router.get("/faq", async function (req, res) {
  const data = await faqCommonFunction.getFAQAppList();
  res.render("faq", { data });
});

router.get("/agreement", function (req, res) {
  res.render("agreement");
});

router.get("/tutorialVideos", async function (req, res) {
  const data = await tutorialVideoCommonFunction.getList();
  res.render("tutorialVideos", { data });
});

router.get("/help", function (req, res) {
  res.render("help");
});

router.get("/marketing", function (req, res) {
  res.render("marketing");
});

router.get("/privacyPolicy", function (req, res) {
  res.render("privacyPolicy");
});

module.exports = router;
