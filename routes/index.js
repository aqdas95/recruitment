const express = require("express");
const router = express.Router();
const staticRouter = require("./staticPages");
const authMiddleware = require("../middlewares/authorize");

/* GET home page. */
const indexRouter = router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = (app) => {
  app.use(authMiddleware);
  app.use("/", indexRouter);
  app.use("/page", staticRouter);
};
