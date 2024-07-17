import jwt from "jsonwebtoken";


export default function verifyToken(req,res,next){
    const token = req.headers.token;
    jwt.verify(token, 'fady', async function(err, decoded) {
        if(err) return res.json({message:err});
        req.userInfo = decoded;
        next();
    });
};