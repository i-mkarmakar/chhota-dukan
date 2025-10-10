import express, { Router } from "express";
import {
  loginUser,
  resetUserPassword,
  userForgotPassword,
  userRegistration,
  verifyUser,
  refreshToken,
  verifyUserForgotPassword,
  getUser,
  registerSeller,
  verifySeller,
  createShop,
  createCashfreeVendor,
  loginSeller,
  getSeller,
} from "../controller/auth.controller";
import isAuthenticated from "@packages/middleware/isAuthenticated";
import { isSeller } from "@packages/middleware/authorizeRoles";

const router: Router = express.Router();

// User Routes
router.post("/user-registration", userRegistration);
router.post("/verify-user", verifyUser);
router.post("/login-user", loginUser);
router.post("/refresh-token", refreshToken);
router.get("/logged-in-user", isAuthenticated, getUser);
router.post("/forgot-password-user", userForgotPassword);
router.post("/reset-password-user", resetUserPassword);
router.post("/verify-forgot-password-user", verifyUserForgotPassword);

// Seller Routes
router.post("/seller-registration", registerSeller);
router.post("/verify-seller", verifySeller);
router.post("/login-seller", loginSeller);
router.get("/logged-in-seller", isAuthenticated, isSeller, getSeller);
router.post("/create-shop", createShop);
router.post("/create-cashfree-vendor", createCashfreeVendor);

export default router;
