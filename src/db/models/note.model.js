import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:String,
    description:String, 
    createdBy: {
        type: mongoose.ObjectId,
        ref: 'User'
      }
},{
    versionKey:false,
    timestamps:true
})


const noteModel = mongoose.model("Note",noteSchema);

export default noteModel;