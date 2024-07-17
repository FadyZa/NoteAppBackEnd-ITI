import bcrypt from "bcrypt";
import userModel from "../../db/models/user.model.js";

export const checkEmail = async (req,res,next)=>{
    let foundUser = await userModel.findOne({email:req.body.email})
    if(foundUser) return res.end("this email already used");
    req.body.password = bcrypt.hashSync(req.body.password,8)
    next();
}