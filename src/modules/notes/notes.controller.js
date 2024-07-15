import noteModel from "../../db/models/note.model.js"

const addNote = async (req,res)=>{
    res.setHeader("content-type","application/json");

    await noteModel.insertMany({
        title:req.body.title,
        description:req.body.description,
        createdBy:req.params.id
    });

    res.send(JSON.stringify(req.body));
}


const getAllNotes = async (req,res)=>{
    res.setHeader("content-type","application/json");
    const allNoteDetails = await noteModel.
        find().
        populate({
            path:'createdBy',
            select:"name email -_id"
        }).select("-_id title description")

    res.send(JSON.stringify(allNoteDetails))
}

const deleteNote = async (req,res)=>{
    res.setHeader("content-type","application/json")
    const deletedNote = await noteModel.findByIdAndDelete(req.params.id)
    res.send(JSON.stringify(deletedNote))
}

const updateNote = async (req,res)=>{
    res.setHeader("content-type","application/json")
    const newNote = await noteModel.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        description:req.body.description
    },{new: true});

    res.send(JSON.stringify(newNote));
}


export {addNote,getAllNotes,deleteNote,updateNote};