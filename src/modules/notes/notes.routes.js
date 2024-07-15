import express from "express";
import {addNote,getAllNotes,deleteNote,updateNote} from "./notes.controller.js"

const notesRoutes = express.Router();


notesRoutes.post("/note/:id",addNote)
notesRoutes.get("/note",getAllNotes)
notesRoutes.delete("/note/:id",deleteNote)
notesRoutes.put("/note/:id",updateNote)


export default notesRoutes;