import noteModel from "../../db/models/note.model.js"

const addNote = async (req,res)=>{
  const newNote = await noteModel.insertMany({
        title:req.body.title,
        description:req.body.description,
        createdBy:req.userInfo.id
    });

    res.json({message:"added",newNote});
}


const getAllNotes = async (req,res)=>{
        
    if(req.userInfo.role == "admin"){
        const allNoteDetails = await noteModel.find();
        return res.json(allNoteDetails)
    }
    const allNoteDetails = await noteModel.
    find({
        createdBy:req.userInfo.id
    }).
    populate({
        path:'createdBy',
        select:"name email -_id"
    }).select("-_id title description")

    res.json(allNoteDetails)
}

const deleteNote = async (req,res)=>{
    if(req.userInfo.role == "admin"){
        const allNoteDetails = await noteModel.findByIdAndDelete(req.params.id);
        return res.json(allNoteDetails)
    } else if (req.userInfo.role == "user"){
        const deletedNote = await noteModel.findOneAndDelete({_id:req.params.id,createdBy:req.userInfo.id},{new:true});
        return res.json({message:"deleted",deletedNote})
    }

    return res.json({message:"you are not authorization"});
}

const updateNote = async (req,res)=>{
    res.setHeader("content-type","application/json")
    const newNote = await noteModel.findOneAndUpdate({_id:req.params.id,createdBy:req.userInfo.id},{
        title: req.body.title,
        description:req.body.description
    },{new: true});

    res.send(JSON.stringify(newNote));
}


export {addNote,getAllNotes,deleteNote,updateNote};