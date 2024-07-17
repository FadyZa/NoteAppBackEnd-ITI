import express from "express";
import {signUp,signIn,verifyEmail,varifyOtp} from "./users.controller.js"
import { checkEmail } from "../middleware/checkEmail.js";

const userRoutes = express.Router();

userRoutes.post("/signup",checkEmail,signUp)
userRoutes.post("/signin",signIn)
userRoutes.get("/verifyemail/:email",verifyEmail)
userRoutes.put("/verifyotp/:otp",varifyOtp)


export default userRoutes;