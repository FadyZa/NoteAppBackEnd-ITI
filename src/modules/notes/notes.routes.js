import express from "express";
import {addNote,getAllNotes,deleteNote,updateNote} from "./notes.controller.js"
import verifyToken from "../middleware/verifyToken.js";
import isAllow from "../middleware/authorization.js";

const notesRoutes = express.Router();

notesRoutes.use(verifyToken);

notesRoutes.post("/note",isAllow("user"),addNote)
notesRoutes.get("/note",isAllow("user","admin"),getAllNotes)
notesRoutes.delete("/note/:id",isAllow("user","admin"),deleteNote)
notesRoutes.put("/note/:id",isAllow("user"),updateNote)


export default notesRoutes;