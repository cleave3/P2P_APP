import { Request, Response, Router } from "express";
import userRoute from "../modules/user/userRoute";
import walletRoute from "../modules/wallet/walletRoute";

const router = Router();

router.get("/", (req: Request, res: Response) => res.status(200).json({ code: 200, message: "app is live" }));
router.use("/user", userRoute);
router.use("/wallet", walletRoute);

export default router;