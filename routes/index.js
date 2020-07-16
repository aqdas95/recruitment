const express = require("express");
const router = express.Router();
const staticRouter = require("./staticPages");
const authMiddleware = require("../middlewares/authorize");
const authRouter = require("./auth");

/* GET home page. */
const indexRouter = router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = (app) => {
  app.use("/", indexRouter);
  app.use("/page", staticRouter);
  app.use("/auth", authRouter);
  app.use(authMiddleware);
};
