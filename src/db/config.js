// getting-started.js
import { connect } from 'mongoose';

export const dbConnection = connect('mongodb://127.0.0.1:27017/NoteApp').then(()=>{
        console.log("connected to DB");
    }).catch(err => console.log(err));




