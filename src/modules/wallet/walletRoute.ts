import { Router } from "express";
import { checkAuth } from "../../middleware/auth";
import validator from "../../validator/validator";
import WalletController from "./walletController";
import { deposit, transfer } from "./walletValidation";

const router = Router();

router.post("/deposit", checkAuth, validator(deposit), WalletController.fundsDeposit);
router.post("/transfer", checkAuth, validator(transfer), WalletController.fundsTransfer);
router.get("/balance", checkAuth, WalletController.getWalletBalance);
router.get("/history", checkAuth, WalletController.getTansactionHistory);

export default router;