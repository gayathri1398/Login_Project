import express from 'express';



// database
import {UserModel} from "../database/user.js"
import { sendMail } from '../services/mail.js';
import { otpGeneratorFunction } from '../services/otp.js';

const Router = express.Router();

// routes

Router.post("/signup",async(req,res)=>{
    try {
        const otpGenerated= otpGeneratorFunction();
        const {fullname,email,password,phonenumber} =req.body;
        await UserModel.checkByEmailAndPhone({email,phonenumber});
        const newUser = await UserModel.create({fullname,email,password,phonenumber,otp:otpGenerated});
        await sendMail({to:newUser.email,OTP:newUser.otp})
         const token = await newUser.generateJwtToken();
        
         return res.status(200).json({token:token});

    } catch (error) {
       return res.status(500).json({error:error.message});
       
    }
});

Router.post("/verify",async(req,res)=>{
    try {
        // const {email,otp} =req.body;
        // const user = await UserModel.findOne({email});
        // console.log(user.otp);
        // if(!user){
        //     return new Error("User not found!")
        // }
        // if (user.otp !== otp) {
        //     return [false, 'Invalid OTP'];
        //   }
        //   const updatedUser = await UserModel.findByIdAndUpdate(user._id, {
        //     $set: { new: true },
        //   });
        //   return true;
        
        const {email,otp} = req.body;
       const user= await UserModel.checkByEmailAndOtp({email,otp});
  
        if(otp!==user.otp){
            throw new Error("Invalid otp")
        }
        return res.json({message:"Success"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

Router.post("/signin", async(req,res)=>{
    try {
       
        const user = await UserModel.checkByEmailAndPassword(req.body.credentials);
        
        const token =await user.generateJwtToken();

        return res.status(200).json({token:token})

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


export default Router;