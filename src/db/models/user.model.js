import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    age:Number,
    role:{
      type:String,
      enum:["admin","user"],
      default:"user"
    },
    isConfirmed:{
      type:Boolean,
      default:false
    },
    otp:{
      type:Number,
      default:Math.floor(100000 + Math.random() * 900000)
    },
    isOtpVerified:{
      type:Boolean,
      default:false
    }
  },{
    timestamps:true,
    versionKey:false
});

const userModel = mongoose.model('User', userSchema);


export default userModel;


