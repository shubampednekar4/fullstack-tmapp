import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
export const loginUser = async (req,res) => {
    const { email, password } = req.body;
    res.status(401).json({ message : 'Invalid creds'})
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