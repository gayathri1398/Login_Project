import express from 'express';

const Router = express.Router();

Router.post("/signin",async(req,res)=>{
    try {
        const options = await req.body;
        return res.json({"signInOptions":options, "message":"Added successful"})
    } catch (error) {
       return res.status(500).json({error:error.message});
       
    }
})

Router.post("/signup",async(req,res)=>{
    try {
        const options =await req.body;
        return res.json({"signUpOptions":options,"message":"Added Successfully!"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


export default Router;