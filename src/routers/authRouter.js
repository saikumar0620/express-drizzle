import { Router } from "express";
import { logInUser, refreshAccessToken, registerNewUser } from "../controllers/authController.js";

const authRouter = Router();
//http://localhost:8000/api/v1/auth/register
authRouter.post("/register",registerNewUser);
authRouter.post("/login",logInUser);
authRouter.get("/refresh-token",refreshAccessToken);

export default authRouter;