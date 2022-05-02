import express from 'express';

// database
import {UserModel} from "../database/user.js"


const Router = express.Router();

// routes

Router.post("/signup",async(req,res)=>{
    try {
        // const {credentials} = req.body
        await UserModel.checkByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
         const token = await newUser.generateJwtToken();
         return res.status(200).json({token:token});

    } catch (error) {
       return res.status(500).json({error:error.message});
       
    }
});


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