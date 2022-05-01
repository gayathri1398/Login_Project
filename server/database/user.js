// import mongoose from 'mongoose';
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:[{type:Number}]
},
{
    timestamps:true
})

 export const UserModel = mongoose.model("user",UserSchema);
