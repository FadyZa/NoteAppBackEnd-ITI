import { existsSync, writeFileSync, readFileSync } from "fs";


if(!existsSync("test.json")){
    let users = [
        {name:"Ahmed", age:33, id:1},
        {name:"fady", age:23, id:2}
    ]
    writeFileSync("test.json",JSON.stringify(users))
} 

let testFile = readFileSync("test.json");
let users = JSON.parse(testFile)


const getAllUsers = (req,res)=>{
    res.setHeader("content-type","application/json")
    users.sort((a,b)=>a.name.localeCompare(b.name))
    let sortedUsers = JSON.stringify(users);
    res.send(sortedUsers);
};

const getUserById = (req,res)=>{
    res.setHeader("content-type","application/json")
    let id = Number(req.params.id);
    let user = users.find((user)=> user.id == id);
    if(user){
        res.end(JSON.stringify(user));
    }else{
        res.end("there is no user with this id")
    }
};


const addUser = (req,res)=>{
    res.setHeader("content-type","application/json")
    console.log(req.body);
    req.body.id = users[users.length - 1].id + 1;
    users.push(req.body)
    writeFileSync("test.json",JSON.stringify(users)) // Act Like DB 
    res.end(JSON.stringify(users));
}

const updateUser = (req,res)=>{
    let userToUpdate = users.find((user)=>user.id == req.params.id)
    if(userToUpdate){
        userToUpdate.name = req.body.name;
        userToUpdate.age = req.body.age;
    }else{
        res.end("user not found")
    }

    writeFileSync("test.json",JSON.stringify(users)) // Act Like DB 
    res.end("user Updated");
}

const deleteUser = (req,res)=>{
    let filteredUsers = users.filter((user)=>req.params.id != user.id)
    users = filteredUsers;
    console.log(users)
    writeFileSync("test.json",JSON.stringify(users))
    res.end("user Deleted");
}

export {getAllUsers,getUserById,addUser,updateUser,deleteUser}