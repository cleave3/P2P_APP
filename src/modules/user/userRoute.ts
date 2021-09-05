import { Router } from "express";
import validator from "../../validator/validator";
import UserController from "./userController";
import { validateAuth } from "./userValidation";

const router = Router();

router.post("/signup", validator(validateAuth), UserController.signup);
router.post("/login", validator(validateAuth), UserController.login);

export default router;