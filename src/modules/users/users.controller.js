import userModel from "../../db/models/user.model.js";
import sendEmail from "../utilities/verfiyEmail.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signUp = async(req,res)=>{
    res.setHeader("content-type","application/json");
    await userModel.insertMany(req.body)
    sendEmail(req.body.email);
    const currUser = await userModel.findOne({email:req.body.email});
    res.end(JSON.stringify(currUser))
}


const signIn = async (req,res)=>{
    res.setHeader("content-type","application/json");
    let foundUser = await userModel.findOne({email:req.body.email});
    if(foundUser){
        if(bcrypt.compareSync(req.body.password, foundUser.password)){
            const token = jwt.sign({id : foundUser.id,role:foundUser.role}, 'fady', { expiresIn : '24h'});
            res.json({message:"loggedIn",token});
        }else{
            res.end("check your pass")
        }
    } else{
        res.end("Invalid Email")
    }
}

const verifyEmail = async(req,res)=>{
    // console.log(req.params.email);
    res.setHeader("content-type","application/json");
    const verifiedUser = await userModel.findOneAndUpdate({email:req.params.email},{isConfirmed:true},{new:true});
    res.end(JSON.stringify(verifiedUser));
}

const varifyOtp = async (req,res)=>{
    res.setHeader("content-type","application/json");
    const findUser = await userModel.findOneAndUpdate(
        {otp:req.params.otp},
        { isOtpVerified: true },
        { new: true }
    );

    if(findUser){
        res.end(JSON.stringify(findUser));
    }else{
        res.end("Wrong OTP");
    }
}


export {
    signUp,
    signIn,
    verifyEmail,
    varifyOtp
}