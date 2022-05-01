import express from 'express';

// database
import {UserModel} from "../database/user.js"


const Router = express.Router();

// routes

Router.post("/signup",async(req,res)=>{
    try {
        const {credentials} = req.body
        const newUser = await UserModel.create(credentials);
        return res.json({users:newUser})
    } catch (error) {
       return res.status(500).json({error:error.message});
       
    }
});



// Router.post("/signin",async(req,res)=>{
//     try {
//         const options =await UserModel.create(req.body.options);
//         return res.json({"signUpOptions":options,"message":"Added Successfully!"})
//     } catch (error) {
//         return res.status(500).json({error:error.message})
//     }
// })


export default Router;