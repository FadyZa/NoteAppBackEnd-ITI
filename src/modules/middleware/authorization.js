import userModel from "../../db/models/user.model.js";

const isAllow = (...roles)=>{
    return async (req,res,next)=>{
        if(roles.includes(req.userInfo.role)){
            next();
        }else{
            res.json({message:"you are not authorization"});
        }
    }
}

export default isAllow;