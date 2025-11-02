import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";

export const loginUser = async (req,res,next) => {
    try {
        const { username, password } = req.body;
        console.log('inside login cntrl')

    if(!username || !password){
        res.status(403).json({
            success : false,
            message : 'username and password are required field',
            data : null
        })
    }
    
    const user = await User.findOne({ 
        username
    })
    if(!user){
        res.status(404).json({
            success : false,
            message : 'user doesnt exist',
            data : null
        })
    }
    const hashpassword = user.password;
    if(!bcrypt.compare(password, hashpassword)){
        res.status(401).json({
            success : false,
            message : 'invalid creds',
            data : null
        })
    }
    const loggedin = user.toObject()
    delete loggedin.password;
    const token = await jwt.sign({
        loggedin},
    process.env.JWT_SECRET,
{expiresIn : '1h'})

    res.status(200).json({
        success :true,
        message : 'logged in success',
        token : token,
        data : loggedin

    })
    } catch (error) {
        next(error)
    }
    

}

export const registerUser = async (req,res, next) => {
    try {
            const { username , password, email } = req.body;

    if(!username || !password || !email){
        res.status(403).json({
            success : false,
            message : "all fields are needed",
            data : null
        })
    }
    const saltRound = 10;
    const hashpassword = await bcrypt.hash(password,saltRound);
    const existingUser = await User.findOne({ email });
    if(existingUser){
        res.status(403).json({
            success :false,
            message : "user already exists",
            data : null
        })
    }

    const newUser = await User.create({
        username,
        password : hashpassword,
        email
    })

    if(!newUser){
        res.status(500).json({
            success : false,
            message : 'Technical error',
            data : null
        })
    }

    res.status(200).json({ success : true , message : 'User created', data : newUser})

    } catch (error) {
        next(error)
    }

}