import express from "express";
import { getAllUsers,getUserById,addUser,updateUser,deleteUser} from "./users.controller.js";

const userRoutes = express.Router();

userRoutes.get("/",getAllUsers)
userRoutes.get("/user/:id",getUserById);
userRoutes.post("/",addUser)
userRoutes.put("/user/:id",updateUser)
userRoutes.delete("/user/:id",deleteUser)

export default userRoutes;