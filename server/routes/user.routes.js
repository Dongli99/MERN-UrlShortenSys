import express from "express";
import UserController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.get("/profile", UserController.getProfileByToken);

export default userRouter;
