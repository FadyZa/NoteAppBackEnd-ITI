import express from "express";
import userRoutes from "./src/modules/users/users.routes.js";
import notesRoutes from "./src/modules/notes/notes.routes.js";
import {dbConnection} from "./src/db/config.js"
const app = express();

app.use(express.json());
dbConnection
app.use(userRoutes)
app.use(notesRoutes)

app.listen(3000,()=>{
    console.log("server is running")
})