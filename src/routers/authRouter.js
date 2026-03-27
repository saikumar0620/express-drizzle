import { Router } from "express";
import { logInUser, registerNewUser } from "../controllers/authController.js";

const authRouter=Router();
authRouter.post("/register",registerNewUser);
authRouter.post("/login",logInUser);

export default authRouter;