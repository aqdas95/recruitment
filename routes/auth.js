const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authorize");

const {
  login,
  forgotPassword,
  resetPassTokenCheck,
  updatePassword,
  logout,
  changePassword,
} = require("../controllers/auth");

// auth/login
router.post("/login", login);

// auth/forgot-password
router.put("/forgot-password", forgotPassword);

// auth/token-valid
router.post("/token-valid", resetPassTokenCheck);

// auth/update-password
router.post("/update-password", updatePassword);

// auth/logout
router.put("/logout", authMiddleware, logout);

// auth/change-password
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
