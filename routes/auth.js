const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/authorize");

// auth/login
router.post("/login", authController.login);

// auth/forgot-password
router.put("/forgot-password", authController.forgotPassword);

// auth/token-valid
router.post("/token-valid", authController.resetPassTokenCheck);

// auth/update-password
router.post("/update-password", authController.updatePassword);

// auth/logout
router.put("/logout", authMiddleware, authController.logout);

// auth/change-password
router.put("/change-password", authMiddleware, authController.changePassword);

module.exports = router;
