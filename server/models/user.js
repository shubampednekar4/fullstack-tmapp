import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'username is required']
    },
    password : {
        type : String,
        required : [true, 'password is required'],
        minLength : 7
    },
    email : {
        type :String,
        required : [ true , 'email is required'],
        unique : true
    },
    
},{
    timestamps : true
})

export const User = await mongoose.model('User', userSchema);