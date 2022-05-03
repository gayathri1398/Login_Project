// import mongoose from 'mongoose';
import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt, { hash } from 'bcrypt';
import { otpGeneratorFunction } from '../services/otp.js';

const UserSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:[{type:Number}],
    otp:{type:String}
},
{
    timestamps:true
})

UserSchema.methods.generateJwtToken = function(){
    let token = Jwt.sign({user:this._id.toString()}, "UserToken");
    return token;
}

UserSchema.statics.checkByEmailAndPhone = async({email,phonenumber})=>{
   const checkEmail = await UserModel.findOne({email});
   const checkPhone = await UserModel.findOne({phonenumber});

   if(checkEmail||checkPhone){
       throw new Error("User Already exists!!") 
   }
   return false
}

UserSchema.statics.checkByEmailAndPassword= async({email,password})=>{
    // check email
   const emailChecking = await UserModel.findOne({email});
   if(!emailChecking) {
       throw new Error("User does not Exist!")
   }
    //    check password
    const passwordChecking = await bcrypt.compare(password, emailChecking.password)
 
    if(!passwordChecking){
        throw new Error("Invalid Password!")
    }
    
    return emailChecking;
}

UserSchema.statics.checkByEmailAndOtp = async({email,otp})=>{
    const emailChecking = await UserModel.findOne({email});
   if(!emailChecking) {
       throw new Error("User does not Exist!")
   }
//    const otpChecking = await UserModel.findOne({otp});
//    if(otpChecking.length<1){
//     throw new Error("otp does not Exist!")
//    }
   return emailChecking;
}

UserSchema.pre("save", function(next){
   const user = this;
  
   if(!user.isModified("password")){
       return next()
   }
   
   bcrypt.genSalt(8, function(error,salt){
       if(error) {
           return next(error)
       }

       bcrypt.hash(user.password,salt,(error,hash)=>{
           if (error){
               return next(error)
           }
   
           user.password= hash;
           return next()
       })
   })

})


 export const UserModel = mongoose.model("user",UserSchema);
